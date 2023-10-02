import { useState, useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

const MyScene = () => {
  const isOver = useRef(false);
  //const [clicked, setClicked] = useState(false);

  const { width, height } = useThree((state) => state.size);
  const [springs, api] = useSpring(
    () => ({
      color: "#569AFF",
      scale: 1.5,
      position: [0, 0],
      config: (key) => {
        switch (key) {
          case "scale":
            return { mass: 4, friction: 10 };
          case "position":
            return { mass: 4, friction: 220 };
          default:
            return {};
        }
      },
    }),
    []
  );

  const handleClick = useCallback(() => {
    let clicked = false;
    return () => {
      clicked = !clicked;
      api.start({
        color: clicked ? "#569AFF" : "#ff6d6d",
      });
    };
  }, []);

  const handlePointerEnter = () => {
    api.start({
      scale: 2,
    });
  };

  const handlePointerLeave = () => {
    api.start({
      scale: 1.5,
    });
  };

  const handleWindowPointerOut = useCallback(() => {
    isOver.current = false;
    api.start({
      position: [0, 0],
    });
  }, []);

  const handleWindowPointerOver = useCallback(() => {
    isOver.current = true;
  }, []);

  useEffect(() => {
    window.addEventListener("pointerover", handleWindowPointerOver);
    window.addEventListener("pointerout", handleWindowPointerOut);
    return () => {
      window.removeEventListener("pointerover", handleWindowPointerOver);
      window.removeEventListener("pointerout", handleWindowPointerOut);
    };
  }, [handleWindowPointerOver, handleWindowPointerOut]);

  return (
    <animated.mesh
      onClick={handleClick()}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      scale={springs.scale}
    >
      <sphereGeometry args={[1.5, 64, 32]} />
      <AnimatedMeshDistortMaterial
        speed={3}
        distort={0.5}
        color={springs.color}
      />
    </animated.mesh>
  );
};

export default function MyComponent() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight intensity={0.8} position={[0, 6, 0]} />
      <MyScene />
    </Canvas>
  );
}
