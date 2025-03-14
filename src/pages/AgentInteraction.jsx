// Agent Interaction - Scene to interact with Agent
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';
import { KeyboardControls, Loader } from '@react-three/drei';
import { useConvaiClient } from '../hooks/useConvaiClient';
import ChatBubble from '../components/chat/Chat';

function AgentInteraction() {
  /**
   * Add apikey and character id here
   */
  const { client } = useConvaiClient('9b11cba4-a37b-11ef-b34c-42010a7be016', 'd21a7c085eaaea922b64b294d702b74a');
  return (
    <div className="flex">
      <div className="panel left-panel">
        <h1>Control Panel</h1>
      </div>
      <div className="panel right-panel flex-grow">
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
    </div>
  );
}

export default AgentInteraction;
