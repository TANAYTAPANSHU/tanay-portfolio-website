import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  //boolean to check for rotation motion
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
   
//adjust the screen size for the background scene 
  const adjust3dBackgroundForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [5, -7.5, -43];
    const rotation = [0.3, 3.4, 0];
    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
    } else {
      screenScale = [1.35, 1.35, 1.35];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjust3dBackgroundForScreenSize();

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, 0, 0];
    }
    return [screenScale, screenPosition];
  };
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
       {currentStage && <HomeInfo currentStage={currentStage} /> }
     </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* it is like sunlight */}
          <directionalLight position={[1, 1, 1]} intensity={5} />
          {/* illuminate all objects in scene equally without casting shadow */}
          <ambientLight intensity={0.9} />
          {/* Emits light from one direction in shape of cone
     <spotLight /> */}
       <spotLight  intensity={0.9} />
          {/* illuminates in gradient color */}
          <hemisphereLight   groundColor={"#9fad65"}  intensity={2}/>
          <Sky  isRotating={isRotating} />
          <Bird />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
