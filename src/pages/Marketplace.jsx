
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

const marketData = {
  name: "Lily",
  marketCap: "$ 3,750.0",
  vol24h: "68.44",
  volAllTime: "3,714.0",
  percentChange: "+21.5%"
};

const Marketplace = () => {
  return (
    <Box sx={{ bgcolor: "#000", minHeight: "100vh", color: "#fff" }}>
      <Container maxWidth="xl" sx={{ pt: 4 }}>
        <Box sx={{ 
          display: 'flex',
          gap: 8,
          mb: 6
        }}>
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src="/AgentImage.png"
              sx={{
                width: '100%',
                height: 'auto',
                mb: 2
              }}
            />
          </Box>
          <Box sx={{ flex: 1, pt: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Typography variant="h4" sx={{ fontFamily: 'VT323', color: '#666' }}>
                Featured
              </Typography>
              <Typography component="span" sx={{ fontSize: 24, mr: 1 }}>
                🔥
              </Typography>
              <Typography sx={{ color: '#4CAF50', fontSize: 24 }}>
                {marketData.percentChange}
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ 
              fontFamily: 'VT323',
              fontSize: '72px',
              mb: 4
            }}>
              {marketData.name}
            </Typography>

            <Box sx={{ display: 'grid', gap: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ color: '#666' }}>Market Cap:</Typography>
                <Typography>{marketData.marketCap}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ color: '#666' }}>24H Vol:</Typography>
                <Typography>{marketData.vol24h}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ color: '#666' }}>All-Time Vol:</Typography>
                <Typography>{marketData.volAllTime}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              <Typography sx={{ color: '#0B5CD6', cursor: 'pointer' }}>{'[ W ]'}</Typography>
              <Typography sx={{ color: '#0B5CD6', cursor: 'pointer' }}>{'[ N ]'}</Typography>
            </Box>
          </Box>
        </Box>

        <MuiGrid container spacing={0.25}>
          {items.map((item, index) => (
            <MuiGrid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Card sx={{ 
                bgcolor: '#000', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 0,
                position: 'relative',
                height: '100%',
                '&:before': {
                  content: '"»"',
                  position: 'absolute',
                  right: 8,
                  top: 4,
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '24px',
                  fontFamily: 'VT323'
                }
              }}>
                <CardContent sx={{ p: '16px !important' }}>
                  <Box sx={{ position: 'relative' }}>
                    <Typography 
                      sx={{ 
                        position: 'absolute',
                        top: -8,
                        left: 0,
                        fontFamily: 'VT323',
                        opacity: 0.3,
                        fontSize: '14px'
                      }}
                    >
                      01
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    src="/AgentImage.png"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      mb: 2,
                      bgcolor: '#000B14'
                    }}
                  />
                  <Typography sx={{ fontFamily: 'VT323', fontSize: '18px', mb: 1 }}>
                    {item.name}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontFamily: 'VT323', fontSize: '14px' }}>{item.price}</Typography>
                    <Typography sx={{ color: '#4CAF50', fontFamily: 'VT323', fontSize: '14px' }}>{item.change}</Typography>
                    <Typography sx={{ opacity: 0.5, fontFamily: 'VT323', fontSize: '14px' }}>{item.ticker}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </MuiGrid>
          ))}
        </MuiGrid>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 4, 
          mt: 4,
          color: '#666',
          fontFamily: 'VT323'
        }}>
          <Typography>{'[ << ]'}</Typography>
          <Typography>{'[ 1 / 54 ]'}</Typography>
          <Typography>{'[ >> ]'}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Marketplace;
