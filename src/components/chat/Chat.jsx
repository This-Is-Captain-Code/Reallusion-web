import React, { useState, useEffect } from "react";
import { Box, TextField, IconButton, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChatBubble = (props) => {
  const { client } = props;
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  // Update messages when client changes
  useEffect(() => {
    if (client?.messages) {
      setMessages(client.messages);
    }
  }, [client?.messages]);

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
      bgcolor: "rgba(0,0,0,0.8)",
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
        {messages?.map((message, idx) => (
          <Box 
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              alignItems: 'flex-start',
              gap: 1,
              width: '100%'
            }}
          >
            <Paper 
              elevation={1}
              sx={{
                p: 1.5,
                maxWidth: '70%',
                bgcolor: message.sender === 'user' ? 'primary.main' : 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 1
              }}
            >
              <Typography 
                sx={{ 
                  color: message.sender === 'user' ? '#F3A79E' : '#7FD276',
                  fontFamily: 'VT323',
                  fontWeight: 'bold',
                  mb: 0.5
                }}
              >
                {message.sender === 'user' ? 'You' : 'Agent'}
              </Typography>
              <Typography 
                sx={{ 
                  color: 'white',
                  fontFamily: 'VT323',
                  fontSize: '1.1rem'
                }}
              >
                {message.content}
              </Typography>
              {message.sender === 'npc' && (
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <IconButton 
                    size="small"
                    onClick={() => handleFeedback(idx, 1)}
                    sx={{ color: feedbacks[idx] === 1 ? '#4CAF50' : 'rgba(255,255,255,0.5)' }}
                  >
                    <ThumbUpIcon fontSize="small" />
                  </IconButton>
                  <IconButton 
                    size="small"
                    onClick={() => handleFeedback(idx, 2)}
                    sx={{ color: feedbacks[idx] === 2 ? '#f44336' : 'rgba(255,255,255,0.5)' }}
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
          sx={{ color: 'rgba(255,255,255,0.5)' }}
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
              color: 'white',
              borderRadius: 1,
              bgcolor: 'rgba(0,0,0,0.3)',
              '& fieldset': {
                borderColor: 'rgba(255,255,255,0.1)'
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255,255,255,0.2)'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main'
              }
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'rgba(255,255,255,0.5)',
              opacity: 1
            }
          }}
        />
        <IconButton 
          onClick={handleSend}
          disabled={!text.trim()}
          sx={{
            color: text.trim() ? 'primary.main' : 'rgba(255,255,255,0.3)'
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBubble;