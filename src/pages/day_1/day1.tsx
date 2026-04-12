import { useEffect, useRef } from "react"

import "../tutorial_page.css"
import {CenterOn, Grab, Scale, Day1_final, zyx_axis, InteractionMode, Day1_001, new_window, Delete, NewObject,
  ResetScale, plane, Day1_002, ScaleAxis
 } from "../../../static/constants"
import PopupText from "../../components/popupText/popupText";



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

{/* 
  NOTE TO SELF: end of lesson we should...
  add a point light add -> light -> point

  Set the plane to "generate UVs" [day 2??]
  
  */}





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
          The best way to do it is to make a few models yourself. The following are derived from existing tutorials. They serve as documentation for their steps.
        </p>
        <p>
          Above you will find various keybinds and menu commands. All keybinds can also be selected via a menu or icon somewhere, and a fair amount of menu options
          have an equivalent keybinding attached to them. I chose which ones are more convient by keybind or by menu select. Though there is a bit of preference in there.
        </p>

        <p>
          This is what we'll be making on Day 1. Day 2 will focus on optimization, and preparing it for use in ThreeJS if we want light and shadows included in the web render.
        </p>
        <div className="media_item_container">
          <img src={Day1_final}/>
        </div>
          {/* 
          <img src={Day1_final}/>
          <LazyVideo src={Grab} loop muted playsInline/>
          <PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<img src={tempooo}/>} meshOrMenu={true} placerText={"dolor"}/> 
          <PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<video src={tempVid} loop muted playsInline/>} meshOrMenu={true} placerText={"dolor"}/>
          */}
      </div>




      <div className="content_container">
        <h2>Basic Controls</h2>
        <small>Movement and Manipulation</small>
        <p>
          You will use your middle-mouse-button for much of your movement. Both rotation and zoom. Notably you will also be using the <PopupText keybindingText={<span>Axis Change-View</span>} keybindingImgVideo={<img src={zyx_axis}/>} meshOrMenu={true} placerText={"axis view-changer"}/> when convient.
        </p>
        <p>
          There's also a set of common actions far more convient by keybind than by menu hopping. <PopupText keybindingText={<span>G<br/><small>(note: "Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={Grab} loop muted playsInline/>} meshOrMenu={true} placerText={"Grab"}/> for movement 
          and <PopupText keybindingText={<span>S<br/><small>(note: should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={Scale} loop muted playsInline/>} meshOrMenu={true} placerText={"Scale"}/> for sizing, with both 
          being able to be moved/resized by a specific axis. Items can be <PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<video src={CenterOn} loop muted playsInline/>} meshOrMenu={true} placerText={"centered on"}/> with either the numpad period key, or View → Frame Selected.
          You can duplicate an existing object, or create a linked duplicate which has any sizing or physical changes applied to all other instances. Do note 
          that being in <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`"Edit Mode" or "Object Mode"`}/> can effect your manipulation of all of the above or not have them work at all.
        </p>

        <p>
          We can make things more convient for ourselves by creating more than one view of the scene we are looking at. This is optional.
        </p>
        <div className="media_item_container">
          <LazyVideo src={new_window} loop muted playsInline/>
        </div>
      </div>
      

      <div className="content_container">
        <h2>001 - Scene Setup</h2>
        <small><a href={Day1_001} download="Day1_001.blend">Starter file: 001</a></small>
        <p>
          First we <PopupText keybindingText={<span>X</span>} keybindingImgVideo={<video src={Delete} loop muted playsInline/>} meshOrMenu={true} placerText={"Delete"}/> the existing light, camera, cube. 
          Then <PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"add"}/> the floor that the scene has. A plane will do. You can 
          make it as large as you like. Blender units have no fixed meaning. If you scaled it in "Object Mode", you can fix it by <PopupText keybindingText={<span>Reset Scale</span>} keybindingImgVideo={<img src={ResetScale}/>} meshOrMenu={false} placerText={`transfering the changes to "Edit Mode"`}/>.
        </p>
        <div className="media_item_container">
          <img src={plane}/>
        </div>
      </div>

      <div className="content_container">
        <h2>002 - Fences</h2>
        <small><a href={Day1_002} download="Day1_002.blend">Starter file: 002</a></small>
        <p>
          To make the fences we add a cube and scale it with use of <PopupText keybindingText={<span>S followed by (X,Y,Z)</span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"X, Y, Z selectors"}/>.
          
        </p>
      </div>

    </>

  )

}

export default Day1