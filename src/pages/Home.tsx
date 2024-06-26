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
  const [isRotating, setIsRotating] = useState(true);
  const [currentStage, setCurrentStage] = useState();
  const [instructionVisible,setInstructionVisible] = useState<boolean>(true)
   
//adjust the screen size for the background scene 
  const adjust3dBackgroundForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [5, -10.5, -60];
    const rotation = [0.2, 3.4, 0];
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
      screenScale = [0, 0, 0];
      screenPosition = [0, 0, 0];
    }
    return [screenScale, screenPosition];
  };
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  setTimeout(()=>{
   setInstructionVisible(false)
  },10000 )

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-48 left-0 right-0 z-10 flex items-center justify-center'>
       {currentStage && <HomeInfo currentStage={currentStage} /> }
     </div>
   {instructionVisible && (
 <div  className='absolute w-1/2 top-15 left-0 md:right-15 z-10 mx-auto flex items-center justify-center bg-white p-8 '>
 <span className="text-xl md:text-xl">Embark on a project tour: Simply press and hold the mouse to bring the plane to a pause</span>
</div>
   )}
    
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
