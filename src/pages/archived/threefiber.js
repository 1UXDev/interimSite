import {
  useTexture,
  Sphere,
  MeshDistortMaterial,
  OrbitControls,
  GradientTexture,
} from "@react-three/drei";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { animated } from "@react-spring/three";
import styles from "@/styles/three.module.css";

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

let blobColor = "#ff7850";

function Blob(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  //   const [hovered, hover] = useState(false);
  //   const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.001));

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      //   scale={hovered ? 1.1 : 1}
      //   onHover={(event) => hover(!hovered)}
      //   onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      //   onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[1.5, 128, 128]} />
      <AnimatedMeshDistortMaterial
        distort={0.7}
        speed={1.5}
        color={blobColor}
      />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas className={styles.blobCanvas}>
      <ambientLight intensity={0.3} />
      {/* <spotLight position={[8, 10, 10]} angle={0.25} penumbra={0.8} />
      <pointLight position={[-10, -10, -10]} /> */}
      <directionalLight
        intensity={1}
        position={[10, 10, 10]}
      ></directionalLight>
      <Blob position={[0, 0, 0]} className={styles.blobBody} />
      <OrbitControls />
    </Canvas>
  );
}
