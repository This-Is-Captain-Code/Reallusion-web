import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';

const generateRandomChar = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
  return chars[Math.floor(Math.random() * chars.length)];
};

const Navbar = () => {
  const [hoveredText, setHoveredText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (isGlitching) {
      let iterations = 0;
      const interval = setInterval(() => {
        setHoveredText(prev => 
          prev.split('').map((char, idx) => 
            iterations >= idx ? originalText[idx] : generateRandomChar()
          ).join('')
        );
        iterations += 1;
        if (iterations >= originalText.length) {
          clearInterval(interval);
          setIsGlitching(false);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isGlitching, originalText]);

  const handleHover = (text) => {
    setOriginalText(text);
    setHoveredText(text);
    setIsGlitching(true);
  };

  return (
    <AppBar position="static" sx={{ 
      background: '#000000',
      boxShadow: 'none',
      borderBottom: 'none'
    }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        <Button 
          onMouseEnter={() => handleHover('Oracle')}
          sx={{ 
            color: '#0B5CD6',
            fontFamily: 'VT323',
            fontSize: '24px',
            textTransform: 'none',
          }}
        >
          {hoveredText === 'Oracle' ? hoveredText : 'Oracle'}
        </Button>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            onMouseEnter={() => handleHover('[ Pools ]')}
            sx={{ 
              color: '#0B5CD6',
              fontFamily: 'VT323',
              fontSize: '16px',
              textTransform: 'none',
            }}
          >
            {hoveredText === '[ Pools ]' ? hoveredText : '[ Pools ]'}
          </Button>
          <Button 
            onMouseEnter={() => handleHover('[ Creator ]')}
            sx={{ 
              color: '#0B5CD6',
              fontFamily: 'VT323',
              fontSize: '16px',
              textTransform: 'none',
            }}
          >
            {hoveredText === '[ Creator ]' ? hoveredText : '[ Creator ]'}
          </Button>
          <Button 
            onMouseEnter={() => handleHover('[ Connect Wallet ]')}
            sx={{ 
              color: '#0B5CD6',
              fontFamily: 'VT323',
              fontSize: '16px',
              textTransform: 'none',
            }}
          >
            {hoveredText === '[ Connect Wallet ]' ? hoveredText : '[ Connect Wallet ]'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;