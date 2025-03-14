import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';

  const scrambleText = (target, originalText) => {
    let currentText = originalText;
    let iteration = 0;
    const duration = 0.5;

    clearInterval(target.interval);

    target.interval = setInterval(() => {
      target.innerText = currentText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= originalText.length) {
        clearInterval(target.interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleHover = (e) => {
    scrambleText(e.target, e.target.getAttribute('data-text'));
  };

  return (
    <AppBar position="static" sx={{ 
      background: '#000000',
      boxShadow: 'none',
      borderBottom: 'none'
    }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        <Button 
          onMouseEnter={handleHover}
          data-text="Oracle"
          sx={{ 
            color: '#0B5CD6',
            fontFamily: 'VT323',
            textTransform: 'none',
          }}
        >
          <Typography variant="h3" sx={{ fontFamily: 'VT323' }}>Oracle</Typography>
        </Button>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            onMouseEnter={handleHover}
            data-text="[ Pools ]"
            sx={{ 
              color: '#0B5CD6',
              fontFamily: 'VT323',
              textTransform: 'none',
              fontSize: '24px'
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: 'VT323' }}>[ Pools ]</Typography>
          </Button>
          <Button 
            onMouseEnter={handleHover}
            data-text="[ Creator ]"
            sx={{ 
              color: '#0B5CD6',
              fontFamily: 'VT323',
              textTransform: 'none',
              fontSize: '24px'
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: 'VT323' }}>[ Creator ]</Typography>
          </Button>
          <Button 
            onMouseEnter={handleHover}
            data-text="[ Connect Wallet ]"
            sx={{ 
              color: '#0B5CD6',
              fontFamily: 'VT323',
              textTransform: 'none',
              fontSize: '24px'
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: 'VT323' }}>[ Connect Wallet ]</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;