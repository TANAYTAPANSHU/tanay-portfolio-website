import React, {
  Suspense,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Desktop } from "../models/Desktop";
import { OrbitControls, Html, Text } from "@react-three/drei";
import Loader from "../components/Loader";
import DesktopScreen from "../components/DesktopScreen";
import EduBoldFont from "../assets/fonts/EduAUVICWANTArrows/EduAUVICWANTArrows-Bold.ttf";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { introduction } from "../constants";
import { Robot } from "../models/Robot";

const NeonText = ({ text, position }) => {
  const [opacity, setOpacity] = useState(1); // Opacity state

  // useEffect(() => {
  //   let direction = -0.01; // Controls fade direction (increasing or decreasing)
  //   const interval = setInterval(() => {
  //     setOpacity((prev) => {
  //       // Reverse direction if opacity reaches limits (0 or 1)
  //       if (prev <= 0 || prev >= 1) direction = -direction;
  //       return Math.min(Math.max(prev + direction, 0), 1); // Clamp opacity between 0 and 1
  //     });
  //   }, 300); // Adjust speed of fading

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  return (
    <Text
      fontSize={0.5} // Adjust font size
      color="red" // Base text color
      position={position} // Position in 3D space
      font={EduBoldFont} // Custom font
    >
      {text}
      <meshStandardMaterial
        emissive="cyan" // Neon glow color
        emissiveIntensity={1.5} // Glow intensity
        toneMapped={false} // Ensures emissive colors appear bright
        transparent // Enables opacity changes
        opacity={opacity} // Bind fading effect to material opacity
      />
    </Text>
  );
};

const CameraControl = React.memo(({ isFocused, onFocusToggle }) => {
  const { camera } = useThree();
  const desktopRef = useRef(); 
  



  const [isHovered, setIsHovered] = useState(false); 

  // Handle camera movement when desktop is clicked
  const handleDesktopClick = () => {
    if (!isFocused) {
      camera.position.set(0, -1.65, 0); // Adjust based on model coordinates
    } else {
      camera.position.set(0, 0, 3); // Reset camera position
      // camera.lookAt(0, 0, 0);
    }
    onFocusToggle();
  };

  return (
    <group
      ref={desktopRef}
      onClick={handleDesktopClick}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {/* Desktop Model */}
      <Desktop
        position={[0, -1, 0]}
        isFocused={isFocused}
        isHovered={isHovered}
      />

      {/* Interactive Screen Area */}
      <Html
        scale={0.8}
        position={[-0.23, -0.75, -0.33]}
        transform
        distanceFactor={1.75}
      >
        <DesktopScreen />
      </Html>
    </group>
  );
});

function Test() {
  const [isFocused, setIsFocused] = useState(false);
  const [introCode, setIntroCode] = useState(1);
  const [yDelta , setYDelta] = useState(0)

  useEffect(() => {
    let timeoutId = setInterval(() => {
      if (introCode >= 3) {
        setIntroCode(1);
      } else {
        setIntroCode((state) => state + 1);
      }
    }, 5000);

    return () => {
      clearInterval(timeoutId);
    };
  }, [introCode]);

  // Memoized handler to toggle focus state
  const handleFocusToggle = useCallback(() => {
    if(isFocused){
    setYDelta(0)
    }else{
      setYDelta(1)
    }
    setIsFocused((prev) => !prev);
  }, []);

  return (
    <section
      className="w-full h-screen relative"
      style={{
        background: "radial-gradient(circle, #F3F4F6 15%,  50%, #000 100%)",
      }}
      onClick={() => {
        if (isFocused) {
          setIsFocused((state) => !state);
          setYDelta(0)
        }
      }}
    >
      <Canvas
        className="w-full h-screen"
        camera={{
          position: [0, 0, 4.5], // Sets the initial camera position
          fov: 75, // Field of view
          near: 0.1, // Near clipping plane
          far: 1000, // Far clipping plane
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={true} // Allow zooming
            enablePan={false} // Disable panning
            minPolarAngle={Math.PI / 4} // Limit vertical rotation to a minimum of 45 degrees
            maxPolarAngle={Math.PI / 2} // Limit vertical rotation to a maximum of 90 degrees
            minAzimuthAngle={-Math.PI / 4} // Limit horizontal rotation to -45 degrees
            maxAzimuthAngle={Math.PI / 4} // Limit horizontal rotation to 45 degrees
            minDistance={1} // Minimum zoom distance
            maxDistance={10} // Maximum zoom distance
          />

          {/* Lighting */}
          <directionalLight position={[1, 1, 1]} intensity={5} />
          <ambientLight intensity={0.9} />
          <spotLight intensity={0.9} />
          <hemisphereLight groundColor="#9fad65" intensity={2} />

          {/* NeonText */}
          <NeonText text={introduction[introCode]} position={[0, 2, 0]} />

          {/* Grouping Robot and CameraControl */}
          <group position={[0, 0, 0]}>
            {/* Robot: Positioned on the left */}
            <group position={[-3, -2, 0]}>
              <Robot />
            </group>

            {/* CameraControl: Positioned on the right */}
            <group position={[0.5, 0, 0]}>
              <CameraControl
                isFocused={isFocused}
                onFocusToggle={handleFocusToggle}
                yDelta ={yDelta}
              />
            </group>
          </group>
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Test;
