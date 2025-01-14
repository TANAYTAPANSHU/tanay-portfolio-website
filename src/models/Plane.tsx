import { useState, useEffect, useRef, forwardRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

const Plane = forwardRef(({ isRotating, ...props }, ref) => {
  const planeRef = useRef();
  const intervalRef = useRef(null);
  const [planeRotationIndex, setPlaneRotationIndex] = useState(9);
  const rotationRef = useRef(9);

  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);

  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, planeRef);

  const floatEquals = (a, b, tolerance = 0.01) => Math.abs(a - b) < tolerance;

  // Effect to control plane animation and rotation
  useEffect(() => {
    if (isRotating) {
      actions["Animation"].play();

      intervalRef.current = setInterval(() => {
        planeRef.current.position.x = floatEquals(planeRef.current.position.x, -2) ? -2.01 : -2;
        planeRef.current.position.y = floatEquals(planeRef.current.position.y, 0) ? 0.011 : 0;
        planeRef.current.position.z = floatEquals(planeRef.current.position.z, -1) ? -1.011 : -1;
      }, 50);
    } else {
      actions["Animation"].stop();
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [actions, isRotating]);

  return (
    <mesh
      {...props}
      ref={(node) => {
        planeRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      position={[-3, 0, -1]}
      scale={[0.7, 0.6, 0.6]}
      rotation={[Math.PI / 9, 6, 0.2]}
    >
      <primitive object={scene} />
    </mesh>
  );
});

export default Plane;
