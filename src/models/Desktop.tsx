import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import desktop from "../assets/3d/desktop_computer.glb"

const focusColor = "red" 

export function Desktop(props) {
  const { nodes, materials } = useGLTF(desktop)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.501}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
      
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials['01___Default']}
          />
        </group>
      </group>

 {(props.isHovered || props.isFocused)  && (

<group rotation={[-Math.PI / 2, 0, 0]} scale={1.525}>
<group rotation={[Math.PI / 2, 0, 0]}>
  <mesh geometry={nodes.defaultMaterial.geometry}>
    <meshBasicMaterial color={focusColor} toneMapped={false} transparent opacity={0.5} />
  </mesh>
  <mesh geometry={nodes.defaultMaterial_1.geometry}>
    <meshBasicMaterial color={focusColor} toneMapped={false} transparent opacity={0.5} />
  </mesh>
  <mesh geometry={nodes.defaultMaterial_2.geometry}>
    <meshBasicMaterial color={focusColor} toneMapped={false} transparent opacity={0.5} />
  </mesh>
  <mesh geometry={nodes.defaultMaterial_3.geometry}>
    <meshBasicMaterial color={focusColor} toneMapped={false} transparent opacity={0.5} />
  </mesh>
  <mesh geometry={nodes.defaultMaterial_4.geometry}>
    <meshBasicMaterial color={focusColor} toneMapped={false} transparent opacity={0.5} />
  </mesh>
  <mesh geometry={nodes.defaultMaterial_5.geometry}>
    <meshBasicMaterial color={focusColor} toneMapped={false} transparent opacity={0.5} />
  </mesh>
</group>
</group>
 )}
    

    </group>
  )
}

useGLTF.preload("../assets/3d/desktop_computer.glb")