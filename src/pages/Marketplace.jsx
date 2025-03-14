
import {
  Box,
  Grid as MuiGrid,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

const items = Array(10).fill({
  id: 1,
  name: "Lily",
  price: "$ 3,750.0",
  change: "+5.5%",
  ticker: "LLX"
});

const Marketplace = () => {
  return (
    <Box sx={{ bgcolor: "#000", minHeight: "100vh", color: "#fff" }}>
      <Box
        component="img"
        src="/processed-image-no-bg-full-resolution.png"
        sx={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          objectPosition: 'center',
          mb: 4
        }}
      />
      <Container>
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: 'VT323',
            fontSize: '48px',
            mb: 3
          }}
        >
          Featured 🔥 +21.5%
        </Typography>
        <MuiGrid container spacing={2}>
          {items.map((item, index) => (
            <MuiGrid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Card sx={{ bgcolor: '#000', border: '1px solid rgba(255,255,255,0.1)' }}>
                <CardContent>
                  <Box
                    component="img"
                    src="/AgentImage.png"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      mb: 2
                    }}
                  />
                  <Typography variant="h6" sx={{ fontFamily: 'VT323', fontSize: '24px' }}>
                    {item.name}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography sx={{ fontFamily: 'Roboto' }}>{item.price}</Typography>
                    <Typography sx={{ color: '#4CAF50' }}>{item.change}</Typography>
                    <Typography sx={{ opacity: 0.7 }}>{item.ticker}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </MuiGrid>
          ))}
        </MuiGrid>
      </Container>
    </Box>
  );
};

export default Marketplace;
