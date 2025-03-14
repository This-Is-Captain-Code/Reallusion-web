
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { keyframes } from '@mui/system';

const glitchAnim = keyframes`
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ 
      background: '#000000',
      boxShadow: 'none',
      borderBottom: 'none'
    }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        <Button 
          sx={{ 
            color: '#0B5CD6',
            fontFamily: 'VT323',
            fontSize: '24px',
            textTransform: 'none',
            '&:hover': {
              animation: `${glitchAnim} 1s linear`,
              background: 'none'
            }
          }}
        >
          Oracle
        </Button>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            sx={{ 
              color: '#0B5CD6',
              fontFamily: 'VT323',
              fontSize: '16px',
              textTransform: 'none',
              '&:hover': {
                animation: `${glitchAnim} 1s linear`,
                background: 'none'
              }
            }}
          >
            [ Pools ]
          </Button>
          <Button 
            sx={{ 
              color: '#0B5CD6',
              fontFamily: 'VT323',
              fontSize: '16px',
              textTransform: 'none',
              '&:hover': {
                animation: `${glitchAnim} 1s linear`,
                background: 'none'
              }
            }}
          >
            [ Creator ]
          </Button>
          <Button 
            sx={{ 
              color: '#0B5CD6',
              fontFamily: 'VT323',
              fontSize: '16px',
              textTransform: 'none',
              '&:hover': {
                animation: `${glitchAnim} 1s linear`,
                background: 'none'
              }
            }}
          >
            [ Connect Wallet ]
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
