import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = ({ modelUrl, width, height }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current || !modelUrl) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#000013');
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.6, 4); // Position camera at head height and in front
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Left front light (blue)
    const leftLight = new THREE.DirectionalLight('#90c8dd', 1.2);
    leftLight.position.set(-2, 2, 2);
    scene.add(leftLight);

    // Right front light (pink)
    const rightLight = new THREE.DirectionalLight('#bd2e79', 1.2);
    rightLight.position.set(2, 2, 2);
    scene.add(rightLight);

    // Add some fill light from bottom
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(0, -1, 2);
    scene.add(fillLight);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    // Limit vertical orbit to keep focus on upper body
    controls.minPolarAngle = Math.PI / 4; // 45 degrees
    controls.maxPolarAngle = Math.PI / 2; // 90 degrees
    controlsRef.current = controls;

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        if (modelRef.current) {
          scene.remove(modelRef.current);
        }

        const model = gltf.scene;
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        // Scale model to fit view
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        model.scale.multiplyScalar(scale);

        scene.add(model);
        modelRef.current = model;

        // Position camera to focus on upper body
        const distance = 2.6;
        camera.position.set(0, 0.5, distance); // Keep camera at height 1.3
        camera.lookAt(0, 0.4, 0); // Look at chest height (adjusted down from camera height)
        controls.target.set(0, 0.3, 0); // Orbit around chest height
        controls.update();
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (modelRef.current) {
        scene.remove(modelRef.current);
        modelRef.current = null;
      }
    };
  }, [modelUrl, width, height]);

  // Handle window resize
  useEffect(() => {
    if (!cameraRef.current || !rendererRef.current) return;

    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(width, height);
  }, [width, height]);

  return <div ref={mountRef} />;
};

export default ModelViewer;
