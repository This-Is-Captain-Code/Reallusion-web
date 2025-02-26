
"use client";
import { Box } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';
import { KeyboardControls } from '@react-three/drei';
import { ConvaiClient } from 'convai-web-sdk';
import { useEffect, useState } from 'react';

export default function Home() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const convaiClient = new ConvaiClient({
      apiKey: process.env.NEXT_PUBLIC_CONVAI_API_KEY,
      characterId: process.env.NEXT_PUBLIC_CHARACTER_ID,
    });
    setClient(convaiClient);
  }, []);

  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <Box sx={{ 
        flex: 1, 
        bgcolor: '#f5f5f5',
        p: 2,
        pointerEvents: 'auto',
        userSelect: 'text'
      }}>
        <h1>Control Panel</h1>
      </Box>
      
      <Box sx={{ flex: 2, position: 'relative' }}>
        <KeyboardControls
          map={[
            { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
            { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
            { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
            { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
            { name: 'jump', keys: ['Space'] },
          ]}>
          <Canvas
            shadows
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [2.5, 4, 6],
            }}>
            <Experience client={client} />
          </Canvas>
        </KeyboardControls>
      </Box>
    </Box>
  );
}
