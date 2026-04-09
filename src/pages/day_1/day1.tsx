import { useEffect, useRef } from "react"

import "../tutorial_page.css"
import { Grab } from "../../../static/constants"




// We define this outside of Day1 so React doesn't recreate it on every render.
function LazyVideo(props: React.VideoHTMLAttributes<HTMLVideoElement>) { //takes in <video/> as input
  
  const videoRef = useRef<HTMLVideoElement>(null);// This is like document.getElementById

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) {// If the video element hasn't loaded yet, do nothing.
      return; 
    }

    // 1. Set up the observer to watch our video element
    const observer = new IntersectionObserver((entries) => { //window.addEventListener('scroll', ...) replacement. for performance
      // There is only one element being observed, so it's always the first entry
      const videoEntry = entries[0]; 

      // 2. Check if the video is currently visible on the screen
      if (videoEntry.isIntersecting) {
        videoElement.play();
        console.log(videoElement)
      } else {
        videoElement.pause();
      }
    });

    // 3. Tell the observer to start watching this specific video
    observer.observe(videoElement);

    // 4. Clean up: stop watching when the user leaves the page or the video is removed
    return () => {
      observer.disconnect();
    };
  }, []);
  return <video ref={videoRef} {...props} />;
}







function Day1() {
  


  
  return (
    <>

      <div className="titleSection_container">
        <h1>Day 1</h1>
      </div>
      <div className="content_container">
        <h2>Goal</h2>
        <small>For Day 1</small>
        <p>
          The goal is to get a feel for Blender. You won't be an expert but you'll get an idea of what is feasible.
          The best way to do it is to make a few models yourself. Of course that's easier said than done. So Let's do some together.
          There are two difficult aspects to making a model. How to disasemble the object you have in mind into it's closest shapes and what commands
          needed in manipulating it. There's no easy solution. Just practice.
        </p>
        <p>
          Above you will find various keybinds and menu commands. All keybinds can also be selected via a menu or icon somewhere, and most menu options
          have an equivalent keybinding attached to them. I chose which ones are more convient by bind or by menu click below. Though there is a bit of preference in there.
        </p>

        <p>
          This is what we'll be making on Day 1. Day 2 will focus on optimization and preparing it for use in ThreeJS if we want light and shadows included in the web render.
        </p>
      </div>




      <div className="content_container">
        <h2>tempo</h2>
        <small>Manipulating our Objects</small>
        <p>
          sit amet 
          consectetur
          adipisicing elit. Ab esse omnis officiis quis aliquid. Corporis earum ab voluptate assumenda minima quibusdam unde tempora quaerat harum id illum placeat, mollitia culpa?
          {/* 
          <PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<img src={tempooo}/>} meshOrMenu={true} placerText={"dolor"}/> 
          <PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<video src={tempVid} loop muted playsInline/>} meshOrMenu={true} placerText={"dolor"}/>
          */}
        </p>
        <LazyVideo src={Grab} loop muted playsInline className="content_container_video"/>
      </div>
      

      <div className="content_container">
        <h2>tempo</h2>
        <small>Manipulating our Objects</small>
        <p>
          sit amet 
          consectetur
          adipisicing elit. Ab esse omnis officiis quis aliquid. Corporis earum ab voluptate assumenda minima quibusdam unde tempora quaerat harum id illum placeat, mollitia culpa?
          {/* 
          <PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<img src={tempooo}/>} meshOrMenu={true} placerText={"dolor"}/> 
          <PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<video src={tempVid} loop muted playsInline/>} meshOrMenu={true} placerText={"dolor"}/>
          */}
        </p>
        <LazyVideo src={Grab} loop muted playsInline className="content_container_video"/>
      </div>


    </>

  )

}

export default Day1