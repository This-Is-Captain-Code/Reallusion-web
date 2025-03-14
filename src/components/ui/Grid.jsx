
import { useState } from 'react';
import { Grid as MUIGrid, Box, Button, Card, CardContent, Typography } from '@mui/material';
import { GridView, ViewList } from '@mui/icons-material';

const GridComponent = ({ agents }) => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
        <Button
          variant="outlined"
          onClick={() => setViewMode('grid')}
          sx={{ mr: 2 }}
          startIcon={<GridView />}
          color={viewMode === 'grid' ? 'primary' : 'inherit'}
        >
          Grid View
        </Button>
        <Button
          variant="outlined"
          onClick={() => setViewMode('list')}
          startIcon={<ViewList />}
          color={viewMode === 'list' ? 'primary' : 'inherit'}
        >
          List View
        </Button>
      </Box>

      <MUIGrid container spacing={2}>
        {agents.map((agent, index) => (
          <MUIGrid item xs={12} md={viewMode === 'grid' ? 3 : 12} key={index}>
            <Card sx={{ 
              bgcolor: 'rgba(255,255,255,0.1)', 
              color: 'white',
              display: 'flex',
              flexDirection: viewMode === 'grid' ? 'column' : 'row',
              alignItems: 'center'
            }}>
              <Box sx={{ 
                width: viewMode === 'grid' ? '100%' : '64px',
                height: '64px',
                m: 2
              }}>
                <img src="/assets/walle.png" alt="Agent" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6">{agent.name}</Typography>
                  <Typography variant="body2" color="text.secondary">Type: {agent.type}</Typography>
                </Box>
                {viewMode === 'list' && (
                  <Typography variant="body2" color="text.secondary">TVL: {agent.tvl}</Typography>
                )}
              </CardContent>
            </Card>
          </MUIGrid>
        ))}
      </MUIGrid>
    </Box>
  );
};

export default GridComponent;
