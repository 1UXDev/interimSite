import React, { useState, useEffect, useRef } from "react";
import styles from "./ScrollComponent.module.css";
import {
  useTexture,
  Sphere,
  MeshDistortMaterial,
  OrbitControls,
  GradientTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/web";
import ScrollPercentage from "@/utilities/scrollPercentage";

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

function Blob(props) {
  // reference gives direct access to THREE.Mesh object
  const ref = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.005));

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1.3, 128, 128]} />
      <AnimatedMeshDistortMaterial
        distort={0.8}
        speed={1.2}
        color={props.color}
      />
    </mesh>
  );
}

function ScrollComponent() {
  const [scrollPosition, setScroll] = useState(0);
  const AnimatedBlob = animated(Blob);
  const handleScroll = () => {
    setScroll(ScrollPercentage());
  };

  // user scroll > handlescroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // remove when unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.ScrollContainer}`}>
      <div
        className={`${styles.BlobCanvas}`}
        style={{
          filter: `blur(${10 - Math.floor(scrollPosition / 3)}px)`,
        }}
      >
        <Canvas>
          <ambientLight intensity={0.3} />
          <directionalLight
            intensity={1}
            position={[10, 10, 10]}
          ></directionalLight>
          <AnimatedBlob
            position={[0, 0, 0]}
            color={`rgb(255, 120, ${80 + scrollPosition})`}
          />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </div>
  );
}

export default ScrollComponent;
