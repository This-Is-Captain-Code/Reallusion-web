<<<<<<< Updated upstream
import React from 'react';
import { SearchIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex justify-between items-center">
      <div className="flex items-center relative">
        <SearchIcon className="absolute left-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white p-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="button">Portfolio</button>
        <button className="button button-primary">Connect Wallet</button>
      </div>
    </nav>
=======
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrambleText } from '../../utils/textEffects';
import gsap from 'gsap';

const Navbar = () => {
  const navigate = useNavigate();
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
      borderBottom: 'none',
      pt:2,
    }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        <Button
          onClick={() => navigate('/')}
          sx={{ 
            color: '#ffffff',
            fontFamily: 'VT323',
            fontSize: '3rem',
            textTransform: 'none'
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
            onClick={() => navigate('/create-agent')}
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
>>>>>>> Stashed changes
  );
};

export default Navbar;
