import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import robotModel from "../assets/3d/robot.glb";

const ROBO_ACTIONS = [
  "hi",
  "attackminiguns",
  "hi",
  "attackspin",
  "jump",
  "walkstart",
  "walking",
  "walkingstop",
  "grab",
];

export function Robot(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(robotModel);
  const { actions } = useAnimations(animations, group);

  const [roboActionIndex, setRoboActionIndex] = useState(0);

  useEffect(() => {
    // Ensure actions are loaded
    if (!actions) {
      console.warn("Actions not loaded.");
      return;
    }

    const interval = setInterval(() => {
      const currentAction = ROBO_ACTIONS[roboActionIndex];
      const nextActionIndex =
        roboActionIndex + 1 < ROBO_ACTIONS.length ? roboActionIndex + 1 : 0;
      const nextAction = ROBO_ACTIONS[nextActionIndex];

      // Debugging logs
      // console.log("Playing action:", currentAction);

      // Stop the current action before starting the next one
      actions[currentAction]?.reset().fadeOut(0.2);

      // Play the next action
      actions[nextAction]?.reset().fadeIn(0.2).play();

      // Update the action index
      setRoboActionIndex(nextActionIndex);
    }, 1000); // 1 second interval for animations

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [actions, roboActionIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 3.5]}
          scale={0.251}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_15">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="robot_14" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../assets/3d/robot.glb");
