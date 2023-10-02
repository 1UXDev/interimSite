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

import gradient0 from "./05_gradient-alert.png";
import gradient1 from "./02_gradient-primary-variation.png";
import gradient2 from "./03_gradient-secondary.png";
import gradient3 from "./04_gradient-error.png";
// import gradient4 from "./06_cosmic-fusion.png";
// import gradient5 from "./07_deep-ocean.png";
// import gradient6 from "./08_lucky-day.png";
// import gradient7 from "./09_sunset-vibes.png";

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

function Blob(props) {
  const gradients = useTexture([
    gradient0,
    gradient1,
    gradient2,
    gradient3,
    //   gradient4,
    //   gradient5,
    //   gradient6,
    //   gradient7,
  ]);

  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      //   scale={hovered ? 1.1 : 1}
      onHover={(event) => hover(!hovered)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[1.5, 64, 32]} />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial>
      <AnimatedMeshDistortMaterial distort={0.5} speed={5} />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas style={{ width: 1200, height: 600 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[8, 10, 10]} angle={0.25} penumbra={0.8} />
      <pointLight position={[-10, -10, -10]} />
      <Blob position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
}
