<<<<<<< Updated upstream
import React from 'react';
import Navbar from '../components/ui/Navbar';
import Grid from '../components/ui/Grid';

const agentsData = [
  { name: 'Agent 1', type: 'Type A', tvl: '100M', marketCap: '1B', change24h: '+5%', volume24h: '50M' },
  { name: 'Agent 2', type: 'Type B', tvl: '200M', marketCap: '2B', change24h: '-3%', volume24h: '30M' },
  // Add more agent data as needed
];

const Marketplace = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-8">
        <Grid agents={agentsData} />
      </div>
    </div>
=======
import { Box, Card, CardContent, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Marketplace = () => {
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);

  // Fetch agents data from the API
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('/api/agents');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("\n Response data: ", data);
        setAgents(data); // Set agents directly to the response array
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAgents();
  }, []);

  /// Static marketplace data (commented out)
  // const items = Array(10).fill({
  //   id: 1,
  //   name: "Lily",
  //   price: "$ 3,750.0",
  //   change: "+5.5%",
  //   ticker: "LLX",
  // });

  const marketData = {
    name: "Lily",
    marketCap: "$ 3,750.0",
    vol24h: "68.44",
    volAllTime: "3,714.0",
    percentChange: "+21.5%",
  };

  return (
    <Box sx={{ bgcolor: "#000", minHeight: "100vh", color: "#fff" }}>
      <Container maxWidth="xl" sx={{ pt: 2 }}>
        <Box
          sx={{
            display: "flex",
            gap: 12,
            mb: 8,
          }}
        >
          <Box sx={{ flex: 1.2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box maxWidth="xl" sx={{ flex: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src="/processed-image-no-bg-full-resolution.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ flex: 1, pt: 8 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Typography
                variant="h2"
                sx={{ fontFamily: "VT323", color: "#666" }}
              >
                Featured
              </Typography>
              <Typography variant="h2" component="span" sx={{ mr: 0.5 }}>
                🔥
              </Typography>
              <Typography variant="h2" sx={{ color: "#4CAF50" }}>
                {marketData.percentChange}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "VT323",
                fontSize: "96px",
                mb: 4,
              }}
            >
              {marketData.name}
            </Typography>

            <Box sx={{ display: "grid", gap: 1.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4" sx={{ color: "#666", fontSize: "24px" }}>Market Cap:</Typography>
                <Typography variant="h4" sx={{ fontSize: "24px" }}>{marketData.marketCap}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#666", fontSize: "20px" }}>24H Vol:</Typography>
                <Typography sx={{ fontSize: "20px" }}>{marketData.vol24h}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#666", fontSize: "20px" }}>All-Time Vol:</Typography>
                <Typography sx={{ fontSize: "20px" }}>{marketData.volAllTime}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
              <Typography sx={{ color: "#0B5CD6", cursor: "pointer" }}>
                {"[ W ]"}
              </Typography>
              <Typography sx={{ color: "#0B5CD6", cursor: "pointer" }}>
                {"[ N ]"}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: 0.25,
          }}
        >
          {agents.map((item, index) => (
            <Box key={item._id} onClick={() => navigate('/agent-interaction')}>
              <Card
                sx={{
                  bgcolor: "#000000",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 0,
                  position: "relative",
                  height: "100%",
                  cursor: "pointer",
                  "&:hover": {
                    border: "1px solid #0B5CD6",
                  },
                }}
              >
                <CardContent sx={{ p: "12px !important" }}>
                  <Box sx={{ position: "relative", mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      sx={{
                        fontFamily: "VT323",
                        color: "#666",
                        fontSize: "24px",
                      }}
                    >
                      {index + 1} {/* Counter for each agent */}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "VT323",
                        color: "#0B5CD6",
                        fontSize: "24px",
                      }}
                    >
                      »
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    src="/AgentImage.png"
                    sx={{
                      width: "100%",
                      height: "auto",
                      mb: 1,
                      bgcolor: "#000B14",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "VT323",
                      fontSize: "40px",
                      mb: 0.5,
                      color: "#fff",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 3, mt: 0.5 }}>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "VT323",
                          fontSize: "16px",
                          color: "#666",
                          mb: 0.25,
                        }}
                      >
                        Market Cap:
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "VT323",
                          fontSize: "24px",
                          color: "#fff",
                        }}
                      >
                        {item.price} {/* Static price */}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "VT323",
                          fontSize: "16px",
                          color: "#666",
                          mb: 0.25,
                        }}
                      >
                        24H Change
                      </Typography>
                      <Typography
                        sx={{
                          color: "#4CAF50",
                          fontFamily: "VT323",
                          fontSize: "24px",
                        }}
                      >
                        {item.change} {/* Static change */}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "VT323",
                          fontSize: "16px",
                          color: "#666",
                          mb: 0.25,
                        }}
                      >
                        Ticket
                      </Typography>
                      <Typography
                        sx={{
                          color: "#0B5CD6",
                          fontFamily: "VT323",
                          fontSize: "24px",
                        }}
                      >
                        {item.ticket} {/* Assuming ticket is available */}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            mt: 4,
            color: "#666",
            fontFamily: "VT323",
          }}
        >
          <Typography>{"[ << ]"}</Typography>
          <Typography>{"[ 1 / 54 ]"}</Typography>
          <Typography>{"[ >> ]"}</Typography>
        </Box>
      </Container>
    </Box>
>>>>>>> Stashed changes
  );
};

export default Marketplace;
