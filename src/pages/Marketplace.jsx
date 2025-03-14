
import { Box, Grid, Card, CardContent, Typography, IconButton, Container } from '@mui/material';
import { Search } from '@mui/icons-material';

const items = [
  { id: 1, name: 'SHIP', icon: '🚢' },
  { id: 2, name: 'FLAG', icon: '🏁' },
  { id: 3, name: 'HEART', icon: '💖' },
  { id: 4, name: 'GHOST', icon: '👻' },
  { id: 5, name: 'ELEPHANT', icon: '🐘' },
  { id: 6, name: 'GLOBE', icon: '🌐' },
];

const Marketplace = () => {
  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', color: '#fff', p: 3 }}>
      <Container>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            bgcolor: 'rgba(255,255,255,0.1)',
            borderRadius: 1,
            p: 1
          }}>
            <Search sx={{ color: 'grey.500', mr: 1 }} />
            <input
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                outline: 'none'
              }}
              placeholder="Search..."
            />
          </Box>
        </Box>

        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card sx={{ 
                bgcolor: 'rgba(255,255,255,0.1)', 
                color: 'white',
                transition: '0.3s',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.15)',
                  transform: 'translateY(-5px)'
                }
              }}>
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 4
                }}>
                  <Typography variant="h2" component="div" sx={{ mb: 2 }}>
                    {item.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Marketplace;
