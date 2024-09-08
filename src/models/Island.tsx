// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef, useEffect } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { a } from "@react-spring/three";
import islandScene from "../assets/3d/island.glb";
import medivalScene from "../assets/3d/medieval_fantasy_book.glb"
interface Node {
  geometry: any;
  name: string;
  position: [number, number, number];
}

interface Material {
  color: string;
  texture: string;
}

interface GLTFResult {
  nodes: Record<string, Node>;
  materials: Record<string, Material> | any;
}

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const isCursorDown = useRef();
  const group = useRef()
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "fetch";
    link.href = medivalScene;
    link.crossOrigin = "anonymous";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const { nodes, materials } = useLoader(GLTFLoader, medivalScene) as
    | GLTFResult
    | any;

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
    isCursorDown.current = true;
  };

  const handlePointerUp = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    isCursorDown.current = false;
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (isRotating) {
        setIsRotating(false);
      }
      islandRef.current.rotation.y += 0.02 * Math.PI;
      // rotationSpeed.current = 0.01;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.02 * Math.PI;
      rotationSpeed.current = -0.04;
    } else if (event.key === "ArrowDown") {
      if (islandRef.current.scale.x < 3) {
        islandRef.current.scale.x = islandRef.current.scale.x + 0.05;
        islandRef.current.scale.y = islandRef.current.scale.y + 0.05;
        islandRef.current.scale.z = islandRef.current.scale.z + 0.05;
      }
    } else {
      if (islandRef.current.scale.x > 0) {
        islandRef.current.scale.x = islandRef.current.scale.x - 0.05;
        islandRef.current.scale.y = islandRef.current.scale.y - 0.05;
        islandRef.current.scale.z = islandRef.current.scale.z - 0.05;
      }
    }
  };

  const handlePointerMove = (e: any) => {
    if (!isCursorDown.current) return;

    e.stopPropagation();
    e.preventDefault();

    const deltaX = e.clientX - lastX.current;
    lastX.current = e.clientX;
    islandRef.current.rotation.y += deltaX * 0.01;
    rotationSpeed.current = deltaX * 0.01;
  };

  const handleKeyUp = (event) => {
    setIsRotating(true)
  };

  const flyingPlane = () => {
    if (isRotating) {
      islandRef.current.rotation.y -= 0.003 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup",handleKeyUp)
    window.addEventListener("keyright",()=>{console.log("right")})
    canvas.addEventListener("pointermove", handlePointerMove);
  
    const intervalId = setInterval(() => {
      flyingPlane();
    }, 50);

    return () => {
      clearInterval(intervalId);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup",handleKeyUp)
      window.removeEventListener("keyright",()=>{console.log("right")})
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  }, [gl, handlePointerDown, handlePointerUp]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 6:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0 && normalizedRotation <= 2:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.1 && normalizedRotation <= 4.15:
          setCurrentStage(1);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 5.3:
          setCurrentStage(2);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={islandRef} {...props}>
     <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="dad255dd2cf24ae0bb357684e49722b4fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Scene" position={[-5.794, -3, 0.278]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_5" position={[0, 15.788, 4.337]}>
                    <mesh
                      name="Scene_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Texture-base_0'].geometry}
                      material={materials['Texture-base']}
                    />
                    <mesh
                      name="Scene_Texture-base_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Texture-base_0_1'].geometry}
                      material={materials['Texture-base']}
                    />
                    <mesh
                      name="Scene_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Texture-base-gloss-jpg_0'].geometry}
                      material={materials['Texture-base-gloss-jpg']}
                    />
                    <mesh
                      name="Scene_Book-tittle_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Book-tittle_0'].geometry}
                      material={materials['Book-tittle']}
                    />
                  </group>
                  {/* <group
                    name="Mill-wind-wheel"
                    position={[-35.783, -27.192, 3.888]}
                    rotation={[0.445, -0.447, -0.498]}>
                    <group
                      name="Object_11"
                      position={[-8.253, 39.884, -25.75]}
                      rotation={[-0.607, 0.138, 0.644]}>
                      <mesh
                        name="Mill-wind-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Mill-wind-wheel_Texture-base_0'].geometry}
                        material={materials['Texture-base']}
                      />
                    </group>
                  </group> */}
                  <group
                    name="Mill-water-wheel"
                    position={[3.708, -15.395, -0.444]}
                    rotation={[-1.92, 0, 0]}>
                    <group name="Object_14" position={[-17.708, 31.183, 4.781]}>
                      <mesh
                        name="Mill-water-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Mill-water-wheel_Texture-base_0'].geometry}
                        material={materials['Texture-base']}
                      />
                    </group>
                  </group>
                </group>
                {/* <group
                  name="flag"
                  position={[-11.513, 12.497, -6.752]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 6]}>
                  <group name="Object_17" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="0"
                      castShadow
                      receiveShadow
                      geometry={nodes['0'].geometry}
                      material={materials['Texture-base']}
                      morphTargetDictionary={nodes['0'].morphTargetDictionary}
                      morphTargetInfluences={nodes['0'].morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="flag-second"
                  position={[-11.494, 12.552, -26.245]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_20" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="1"
                      castShadow
                      receiveShadow
                      geometry={nodes['1'].geometry}
                      material={materials['Texture-base']}
                      morphTargetDictionary={nodes['1'].morphTargetDictionary}
                      morphTargetInfluences={nodes['1'].morphTargetInfluences}
                    />
                  </group>
                </group> */}
                <group
                  name="Waterfall"
                  position={[-4.794, 0, 0.351]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_23" position={[-14, 15.788, 4.337]}>
                    <mesh
                      name="Waterfall_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Waterfall_Texture-base-gloss-jpg_0'].geometry}
                      material={materials['Texture-base-gloss-jpg']}
                    />
                  </group>
                </group>
                <group
                  name="deers"
                  position={[-23.122, -0.049, 14.878]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_26" position={[4.328, 30.387, 4.387]}>
                    <mesh
                      name="deers_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['deers_Texture-base_0'].geometry}
                      material={materials['Texture-base']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </a.group>
  );
};

export default Island;
