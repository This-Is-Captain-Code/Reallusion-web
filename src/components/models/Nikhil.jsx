import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useLipsync } from '../../hooks/useLipsync';
import { useHeadTracking } from '../../hooks/useHeadTracking';

export function Nikhil(props) {
  const { scene, nodes, materials } = useGLTF('/nikhil.glb');
  const { animations } = useGLTF('/animations.glb');
  const nikhilRef = useRef();
  const { actions, mixer } = useAnimations(animations, nikhilRef);
  const [animation, setAnimation] = useState(
    animations.find((a) => a.name === 'Idle') ? 'Idle' : animations[0]?.name
  );
  const { client } = props;

  useEffect(() => {
    client?.convaiClient.current.sendTextChunk('');
  }, []);

  useEffect(() => {
    setAnimation(client?.isTalking ? 'Idle' : 'Idle');
  }, [client?.isTalking]);

  useEffect(() => {
    actions[animation]?.reset().fadeIn(mixer.stats.actions.inUse === 0 ? 0 : 0.5).play();
    return () => actions[animation]?.fadeOut(0.5);
  }, [animation]);

  useLipsync({ client, characterRef: nikhilRef, nodes, scene });
  useHeadTracking({ client, nodes });

  // Auto-detect first SkinnedMesh
  const skinnedMeshNode = Object.values(nodes).find(node => node.isSkinnedMesh);

  return (
    <group ref={nikhilRef} {...props} dispose={null}>
      <group name="Scene">
        {skinnedMeshNode && (
          <group name={skinnedMeshNode.name} scale={0.01}>
            <skinnedMesh
              name={skinnedMeshNode.name}
              geometry={skinnedMeshNode.geometry}
              material={materials.Character} // Adjust this if needed
              skeleton={skinnedMeshNode.skeleton}
              morphTargetDictionary={skinnedMeshNode.morphTargetDictionary}
              morphTargetInfluences={skinnedMeshNode.morphTargetInfluences}
            />
            <primitive object={nodes.RL_BoneRoot} />
          </group>
        )}
      </group>
    </group>
  );
}

useGLTF.preload('/nikhil.glb');