
import { Box, Typography, Container, Paper } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';
import { KeyboardControls, Loader } from '@react-three/drei';
import { useConvaiClient } from '../hooks/useConvaiClient';
import ChatBubble from '../components/chat/Chat';

function AgentInteraction() {
  const { client } = useConvaiClient('9b11cba4-a37b-11ef-b34c-42010a7be016', 'd21a7c085eaaea922b64b294d702b74a');

  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default', minHeight: '100vh' }}>
      <Paper 
        elevation={0} 
        sx={{ 
          width: '300px', 
          bgcolor: 'rgba(0,0,0,0.8)', 
          p: 3,
          borderRadius: 0,
          borderRight: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            fontFamily: 'VT323',
            color: 'white',
            mb: 2 
          }}
        >
          Control Panel
        </Typography>
      </Paper>

      <Box sx={{ flexGrow: 1, position: 'relative' }}>
        <KeyboardControls
          map={[
            { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
            { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
            { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
            { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
            { name: 'jump', keys: ['Space'] },
          ]}
        >
          <Box sx={{ width: '100%', height: '70vh', position: 'relative' }}>
            <Loader />
            <Canvas
              shadows
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [2.5, 4, 6],
              }}
            >
              <Experience client={client} />
            </Canvas>
          </Box>
        </KeyboardControls>
        
        <Box sx={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0,
          bgcolor: 'background.paper',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          p: 2
        }}>
          <ChatBubble client={client} />
        </Box>
      </Box>
    </Box>
  );
}

export default AgentInteraction;
