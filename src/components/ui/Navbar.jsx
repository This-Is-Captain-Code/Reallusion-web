
import { AppBar, Toolbar, Box, IconButton, InputBase, Button } from '@mui/material';
import { Search } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ 
      background: 'rgba(18, 18, 18, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid',
      borderColor: 'grey.800'
    }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            position: 'relative',
            backgroundColor: 'grey.900',
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'grey.800',
            marginRight: 2,
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search sx={{ color: 'grey.500', mr: 1 }} />
            <InputBase
              placeholder="Search…"
              sx={{
                color: 'white',
                '& .MuiInputBase-input': {
                  padding: '4px 0',
                }
              }}
            />
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="outlined"
            sx={{ 
              borderColor: 'grey.700',
              color: 'grey.300',
              '&:hover': { borderColor: 'grey.500' }
            }}
          >
            Portfolio
          </Button>
          <Button 
            variant="contained"
            sx={{ 
              background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .3)'
            }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
