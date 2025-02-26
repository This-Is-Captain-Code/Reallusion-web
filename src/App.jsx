import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { KeyboardControls, Loader } from '@react-three/drei';
import { useConvaiClient } from './hooks/useConvaiClient';
import ChatBubble from './components/chat/Chat';

function App() {
  /**
   * Add apikey and character id here
   */
  const { client } = useConvaiClient('CHARACTER_ID', 'API_KEY');
  return (
    <>
      <div className="panel left-panel">
        <h1>Control Panel</h1>
        {/* Add your left panel content here */}
      </div>
      <div className="panel right-panel">
        <KeyboardControls
          map={[
            { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
            { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
            { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
            { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
            { name: 'jump', keys: ['Space'] },
          ]}>
          <Loader />
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
        <ChatBubble client={client} />
      </div>
    </>
  );
}

export default App;