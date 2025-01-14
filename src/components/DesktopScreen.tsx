import React, { useState } from "react";
import desktopBackground from "../assets/images/macbookWallpaper.jpg";
import pdf from "../assets/icons/pdf.svg";
import { tanay } from "../assets/images";
import About from "../pages/About";
import Projects from "../pages/Projects";

const componentMap = {
  "about" : <About />,
  "projects": <Projects />


}


const desktopIcons = [
  {
    icon_name: "About me",
    icon_pic: tanay,
    component: "about",
  },
  {
    icon_name: "Resume",
    icon_pic: pdf,
    component: "about",
  },
  {
    icon_name: "Projects",
    icon_pic: pdf,
    component: "projects",
  },
];

function DesktopScreen() {
  const [selectedComponent, setSelectedComponent] = useState<string | undefined>();
  return (
    <div>
      {!selectedComponent ? (
        <div
          style={{
            width: "615px",
            height: "370px",
            backgroundImage: `url(${desktopBackground})`,
            backgroundSize: "cover", // Makes the image cover the entire div
            backgroundPosition: "center", // Centers the image within the div
            overflow: "scroll",
          }}
        >
          <div className=" flex flex-col gap-2 p-2  flex-wrap">
            {desktopIcons.map((item, index) => {
              return (
                <div className="flex flex-row" onClick={()=>{
                    setSelectedComponent(item.component)
                }}>
                  <div className="flex flex-col  items-center justify-center ">
                    <img
                      src={item.icon_pic}
                      alt={"pdf"}
                      className="w-10 h-10 object-contain "
                    />
                    <span className=" text-xs mt-1 text-white cursor-pointer">
                      {item.icon_name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div style={{
            width: 615,
            height:370,
        }} className="overflow-scroll  bg-slate-50 relative">
          <div onClick={()=>{
            setSelectedComponent(undefined)
          }} className="absolute top-4 left-2 cursor-pointer">
            <span className=" cursor-pointer text-lg">Back</span>
            </div>
    {componentMap[selectedComponent]}
  
        </div>
      )}
    </div>
  );
}

export default DesktopScreen;
