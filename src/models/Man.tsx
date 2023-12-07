// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import manScene from '../assets/3d/groot.glb'


export default function Man({currentAnimation,...props}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(manScene);
  const { actions } = useAnimations(animations, group);
  
    // This effect will run whenever the currentAnimation prop changes
    useEffect(() => {
        Object.values(actions).forEach((action) => action.stop());
    
        if (actions[currentAnimation]) {
          actions[currentAnimation].play();
        }
      }, [actions, currentAnimation]); 


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.004}
        >
          <group name="Wave_Hip_Hop_Dancefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials["Scene_-_Root"]}
                    skeleton={nodes.Object_6.skeleton}
                  />
                  <group name="RetopoGroup1" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
