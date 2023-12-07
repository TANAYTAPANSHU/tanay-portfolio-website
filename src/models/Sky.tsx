// @ts-nocheck
import {useGLTF} from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Sky = ({...props}) => {
    const sky =  useGLTF(skyScene)
    const skyRef = useRef();
      // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (props.isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
   //3d object container 
    <mesh ref={skyRef}>
   {/* primitve is used to render a three js primitive */}
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky