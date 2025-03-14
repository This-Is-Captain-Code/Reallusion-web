
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { KeyboardControls } from '@react-three/drei';
import { ConvaiClient } from 'convai-web-sdk';
import { useEffect, useState } from 'react';

export default function App() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const convaiClient = new ConvaiClient({
      apiKey: import.meta.env.VITE_CONVAI_API_KEY,
      characterId: import.meta.env.VITE_CHARACTER_ID,
    });
    setClient(convaiClient);
  }, []);

  return (
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
  );
}
