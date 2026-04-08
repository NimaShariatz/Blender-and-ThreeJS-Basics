import "./popupText.css"
import { useRef } from "react";




interface PopupTextProps{

  placerText: string;
  keybindingImgVideo: React.ReactNode;
  keybindingText: React.ReactNode;
  meshOrMenu: boolean;
}



function PopupText({keybindingImgVideo, placerText, keybindingText, meshOrMenu}: PopupTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null); //stops and starts the video based on if tooltip_container is hovered on

  const handleMouseEnter = () => { //start vid
    const video = containerRef.current?.querySelector("video"); //find vid tag in container
    if (video) video.play();
  };

  const handleMouseLeave = () => {//stop vid
    const video = containerRef.current?.querySelector("video");
    if (video) video.pause();
  };
  
  
  
  return(
    <>
      <span className="tooltip_container" 
        style={{backgroundColor: meshOrMenu ? "var(--meshRelated)" : "var(--menuRelated)" }}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {placerText}
        <span className="tooltip_text">
          {keybindingImgVideo}
          {keybindingText}
        </span>
      </span>
    </>    
  )
}

export default PopupText