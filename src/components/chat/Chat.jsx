import React, { useState } from "react";
import { Box, TextField, IconButton, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ChatBubblev2 from "./ChatBubbleV2";
import ChatHistory from "./ChatHistory";

const ChatBubble = (props) => {
  const { client } = props;
  const [text, setText] = useState("");

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

  return (
    <Box sx={{ 
      width: "100%",
      bgcolor: "background.paper",
      borderRadius: 1,
      p: 2
    }}>
      <Box sx={{ mb: 2 }}>
        <ChatHistory chatHistory={client} />
      </Box>

      <Box sx={{ 
        display: "flex",
        gap: 1,
        alignItems: "center"
      }}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "text.primary",
              bgcolor: "rgba(255,255,255,0.05)",
              "& fieldset": {
                borderColor: "rgba(255,255,255,0.1)",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
            }
          }}
        />
        <IconButton 
          onClick={handleSend}
          sx={{ color: "primary.main" }}
        >
          <SendIcon />
        </IconButton>
        <IconButton
          onClick={() => window.location.reload()}
          sx={{ color: "text.secondary" }}
        >
          <RestartAltIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBubble;