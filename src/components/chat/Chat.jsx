import React, { useState } from "react";
import { Box, TextField, IconButton, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChatBubble = (props) => {
  const { client } = props;
  const [text, setText] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSend = () => {
    if (text.trim()) {
      client.setUserText(text);
      client.setEnter(true);
      setText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFeedback = (messageIdx, feedback) => {
    const newFeedbacks = [...feedbacks];
    newFeedbacks[messageIdx] = feedback;
    setFeedbacks(newFeedbacks);
  };

  return (
    <Box sx={{ 
      width: "100%",
      height: "30vh",
      bgcolor: "background.paper",
      borderRadius: 1,
      p: 2,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ 
        flex: 1,
        overflowY: 'auto',
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        {client?.messages?.map((message, idx) => (
          <Box 
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              alignItems: 'flex-start',
              gap: 1
            }}
          >
            <Paper 
              elevation={1}
              sx={{
                p: 1.5,
                maxWidth: '70%',
                bgcolor: message.sender === 'user' ? 'primary.main' : 'background.paper',
                border: message.sender === 'npc' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                color: 'white'
              }}
            >
              <Typography variant="body1" sx={{ fontFamily: 'VT323' }}>
                {message.content}
              </Typography>
              {message.sender === 'npc' && (
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <IconButton 
                    size="small"
                    onClick={() => handleFeedback(idx, 1)}
                    color={feedbacks[idx] === 1 ? 'primary' : 'default'}
                  >
                    <ThumbUpIcon fontSize="small" />
                  </IconButton>
                  <IconButton 
                    size="small"
                    onClick={() => handleFeedback(idx, 2)}
                    color={feedbacks[idx] === 2 ? 'error' : 'default'}
                  >
                    <ThumbDownIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Paper>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton 
          onClick={() => {
            client.setMessages([]);
            setFeedbacks([]);
          }}
          sx={{ color: 'text.secondary' }}
        >
          <RestartAltIcon />
        </IconButton>
        <TextField
          fullWidth
          size="small"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          sx={{ 
            '& .MuiOutlinedInput-root': {
              borderRadius: 1,
              bgcolor: 'background.paper',
              '& fieldset': {
                borderColor: 'divider'
              }
            }
          }}
        />
        <IconButton 
          onClick={handleSend}
          color="primary"
          disabled={!text.trim()}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBubble;