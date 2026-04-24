import "./popupText.css"
import { useRef, useEffect } from "react";

interface PopupTextProps {
  placerText: string;
  keybindingImgVideo: React.ReactNode;
  keybindingText: React.ReactNode;
  meshOrMenu: boolean;
}

function PopupText({ keybindingImgVideo, placerText, keybindingText, meshOrMenu }: PopupTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null); 

  // Initialize: save the src and clear the video from memory on mount
  useEffect(() => {
    const video = containerRef.current?.querySelector("video");
    if (video && video.src) {
      video.dataset.src = video.getAttribute("src") || video.src;
      video.removeAttribute("src");
      video.load(); // Forces the browser to clear the memory buffer
    }
  }, []);

  const handleMouseEnter = () => {
    const video = containerRef.current?.querySelector("video");
    if (video) {
        // Restore the video source when hovered
        if (!video.src && video.dataset.src) {
            video.src = video.dataset.src;
        }
        video.play().catch(e => console.log("Playback prevented:", e));
    }
  };

  const handleMouseLeave = () => {
    const video = containerRef.current?.querySelector("video");
    if (video) {
        video.pause();
        // Remove the source and flush from memory
        video.removeAttribute("src");
        video.load(); 
    }
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