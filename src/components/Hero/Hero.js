import styles from "./Hero.module.css";
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

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

function Blob(props) {
  // reference gives direct access to THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  //   const [hovered, hover] = useState(false);
  //   const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.001));

  // Return the view
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
      <AnimatedMeshDistortMaterial distort={0.8} speed={1.2} color="#ff7850" />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className={`${styles.HeroSection}`}>
      <div className={`${styles.BlobCanvas}`}>
        <Canvas>
          <ambientLight intensity={0.3} />
          {/* <spotLight position={[8, 10, 10]} angle={0.25} penumbra={0.8} />
    <pointLight position={[-10, -10, -10]} /> */}
          <directionalLight
            intensity={1}
            position={[10, 10, 10]}
          ></directionalLight>
          <Blob position={[0, 0, 0]} />
          <OrbitControls />
        </Canvas>
      </div>
      <div className={`${styles.HeroContainer}`}>
        <h1>Create</h1>
        <h2>Studio of Digital Experience & Product</h2>
      </div>
    </section>
  );
}
