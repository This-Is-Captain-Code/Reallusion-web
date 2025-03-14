
import { useState } from 'react';
import { Card, CardContent, TextField, Box, Button } from '@mui/material';
import { Upload } from '@mui/icons-material';
import Navbar from '../components/ui/Navbar';

export default function CreateAgent() {
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Box sx={{ bgcolor: 'grey.900', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', px: 4, py: 12, position: 'relative' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, #1a1a1a, #000)', opacity: 0.4 }} />
        
        <Card sx={{ width: '120vh', minHeight: '80vh', bgcolor: 'grey.800', p: 12, borderRadius: 4, boxShadow: 20, border: '1px solid', borderColor: 'grey.700', backdropFilter: 'blur(8px)', position: 'relative' }}>
          <CardContent>
            <Box sx={{ textAlign: 'center', mb: 6, typography: 'h4', fontWeight: 600 }}>Create an Agent</Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <TextField 
                  label="Agent Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  sx={{ input: { color: 'white' }, label: { color: 'grey.300' } }}
                />
                
                <TextField 
                  label="Ticket (4 letters max)"
                  value={ticket}
                  onChange={(e) => setTicket(e.target.value)}
                  inputProps={{ maxLength: 4 }}
                  variant="outlined"
                  sx={{ input: { color: 'white' }, label: { color: 'grey.300' } }}
                />
                
                <TextField 
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  multiline
                  rows={8}
                  variant="outlined"
                  sx={{ textarea: { color: 'white' }, label: { color: 'grey.300' } }}
                />
                
                <Button variant="contained" sx={{ mt: 'auto', py: 3, height: '45pt' }}>
                  + Create
                </Button>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ 
                  width: '100%', 
                  aspectRatio: '1/1', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  border: 2,
                  borderColor: 'grey.600',
                  borderRadius: 2,
                  bgcolor: 'grey.700',
                  '&:hover': { borderImage: 'linear-gradient(to right, #9c27b0, #2196f3) 1' }
                }}>
                  <Box sx={{ color: 'grey.400' }}>Model Preview</Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 6, mt: 6 }}>
                  <Button 
                    variant="outlined" 
                    sx={{ 
                      width: '50%', 
                      height: 88,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      bgcolor: 'grey.700',
                      border: 1,
                      borderColor: 'grey.600',
                      '&:hover': { borderImage: 'linear-gradient(to right, #2196f3, #9c27b0) 1' }
                    }}
                  >
                    <Upload sx={{ width: 32, height: 32, color: 'grey.400', mb: 2 }} />
                    <Box sx={{ color: 'grey.300' }}>Upload Image</Box>
                  </Button>
                  
                  <Button 
                    variant="outlined"
                    sx={{ 
                      width: '50%',
                      height: 88,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      bgcolor: 'grey.700',
                      border: 1,
                      borderColor: 'grey.600',
                      '&:hover': { borderImage: 'linear-gradient(to right, #4caf50, #009688) 1' }
                    }}
                  >
                    <Upload sx={{ width: 32, height: 32, color: 'grey.400', mb: 2 }} />
                    <Box>
                      <Box sx={{ color: 'grey.300' }}>Upload Model</Box>
                      <Box sx={{ color: 'grey.400', mt: 1 }}>glb / gltf</Box>
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
