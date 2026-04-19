import { useEffect, useRef } from "react"

import "../tutorial_page.css"
import {CenterOn, Day1_final, zyx_axis, InteractionMode, Day1_001, new_window, Delete, NewObject,
  TransferScale, plane, Day1_002, ScaleAxis, Duplicate, containers, RotateXYZ, SelectAll, Day1_fences, Day1_003,
  GrabAxis, ChangeRenderView, NewLight, NewCamera, RendererMode, Day1_lightAndcamera, Day1_004, trunk, add_trunk, trunks, Day1_005, create_log, cap_fill_mode,
  Fill, final_logs, Day1_006, ResetGeometry, Move, containers_renamed, renaming_items, Day1_007, axe_head, Cut, GG, cut_and_gg,
  cut_action
 } from "../../constants"
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
  
  throw things like lights and camera into a collection and have it unselected so its not exported.
  
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
      </div>




      <div className="content_container">
        <h2>Basic Controls</h2>
        <small>Movement and Manipulation</small>
        <p>
          You will use your middle-mouse-button for much of your movement. Both rotation and zoom. Notably you will also be using the <PopupText keybindingText={<span>Axis Change-View</span>} keybindingImgVideo={<img src={zyx_axis}/>} meshOrMenu={true} placerText={"axis view-changer"}/> when convient.
        </p>
        <p>
          There's also a set of common actions far more convient by keybind than by menu hopping. <PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"Grab"}/> for movement 
          and <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"scale"}/> for sizing, with both 
          being able to be moved/resized by a specific axis. Items can be <PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<video src={CenterOn} loop muted playsInline/>} meshOrMenu={true} placerText={"centered on"}/> with either the numpad period key, or View → Frame Selected.
          You can duplicate an existing object, or create a linked duplicate which has any sizing or physical changes applied to all other instances. Do note 
          that being in <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`"Edit Mode" or "Object Mode"`}/> can effect your manipulation of all of the above or not have them work at all.
        </p>

        <p>
          We can make things more convient for ourselves by creating more than one view of the scene we are looking at. This is optional.
        </p>
        <div className="media_item_container">
          <LazyVideo src={new_window} loop muted playsInline controls/>
        </div>
      </div>
      

      <div className="content_container">
        <h2>001 - Scene Setup</h2>
        <small><a href={Day1_001} download="Day1_001.blend">Starter file: 001</a></small>
        <p>
          First we <PopupText keybindingText={<span>X</span>} keybindingImgVideo={<video src={Delete} loop muted playsInline/>} meshOrMenu={true} placerText={"delete"}/> the existing light, camera, cube. 
          Then <PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"add"}/> the floor that the scene has. A plane will do. You can 
          make it as large as you like. Blender units have no fixed meaning. If you scaled it in "Object Mode", you can fix it by <PopupText keybindingText={<span>Transfer Scale</span>} keybindingImgVideo={<img src={TransferScale}/>} meshOrMenu={false} placerText={`transfering the changes to "Edit Mode"`}/>.
        </p>
        <div className="media_item_container">
          <img src={plane}/>
        </div>
      </div>

      <div className="content_container">
        <h2>002 - Fences</h2>
        <small><a href={Day1_002} download="Day1_002.blend">Starter file: 002</a></small>
        <div className="content_container_divide">
          <p>
            To make the fences we add a cube and scale it with 
            use of <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"X, Y, Z selectors"}/>. We add add multiple 
            boards <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right containers section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"by creating several copies"}/>. These copies are done 
            while <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`done in "Edit Mode"`}/> so that they are still considered part of the original mesh object. Otherwise duplicating in "Object Mode" defines it 
            as it's own unique object which we'd prefer to not have in this case (otherwise each plank is its own object which is messy).
          </p>
          <img src={containers}/>
        </div>
        <p>
          Note when when we move both of the verticle planks and space them apart, we do so in "Edit Mode". The "Origin Point" of the object does not 
          move and so remains in between the two stands. This is not a 
          requirement but would be a good idea to do so. During your 
          scaling, you may need to <PopupText keybindingText={<span>A</span>} keybindingImgVideo={<video src={SelectAll} loop muted playsInline/>} meshOrMenu={true} placerText={"select all"}/> while in "Edit Mode". We also make use 
          of <PopupText keybindingText={<span>R with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={RotateXYZ} loop muted playsInline/>} meshOrMenu={true} placerText={"rotate"}/> for the horizontal planks. Once the 
          first fence is done, 
          we duplicate the fence in "Object Mode". A 180deg rotation is used for the 
          other side of the fences, and individual fences for some randomness. Remember if you scale or rotate by accident while in "Object Mode", 
          there is <PopupText keybindingText={<span>Transfer Scale</span>} keybindingImgVideo={<img src={TransferScale}/>} meshOrMenu={false} placerText={"an easy fix to it"}/>.
        </p>
        <div className="media_item_container">
          <LazyVideo src={Day1_fences} loop muted playsInline controls/>
        </div>
        
      </div>





      <div className="content_container">
        <h2>003 - Rendering and Light</h2>
        <small><a href={Day1_003} download="Day1_003.blend">Starter file: 003</a></small>
        <p>
          The scene as we see it is not what will the final product will look like. For that 
          we will <PopupText keybindingText={<span>Z</span>} keybindingImgVideo={<video src={ChangeRenderView} loop muted playsInline/>} meshOrMenu={true} placerText={`change to "Rendered"`}/>. But note that our scene is completely dark. This is 
          because we <PopupText keybindingText={<span>New Light Source</span>} keybindingImgVideo={<video src={NewLight} loop muted playsInline/>} meshOrMenu={false} placerText={"need a light source"}/>. Place it wherever 
          adequate. The "Power" variable should be raised to something adequate. A light source does have other variables you can play with.
        </p>
        <p>
          "Renderer mode" gives us a feel of how it'll look, but rendering an instance of the scene is the accurate version. For this we need to <PopupText keybindingText={<span>New Camera</span>} keybindingImgVideo={<video src={NewCamera} loop muted playsInline/>} meshOrMenu={false} placerText={"add a camera"}/> to 
          the scene. Place it wherever adequate. Notice below your <b>Axis Change-View</b> is a camera icon. You can view through the camera by this button. We also 
          change the <PopupText keybindingText={<span>Rendering Mode</span>} keybindingImgVideo={<img src={RendererMode}/>} meshOrMenu={false} placerText={"rendering mode"}/> to "Cycles" for better quality 
          and set Viewport → Max Samples & Render → Max Samples to '128'. Higher quality is unnecassary.
        </p>
        <p>
          Finally, on the top right go select Render → Render Image to see your model properly rendered. How long it takes to complete depends on 
          the values you put in the Max Samples, and your personal computer.
        </p>
        <div className="media_item_container">
          <LazyVideo src={Day1_lightAndcamera} loop muted playsInline controls/>
        </div>

      </div>

      <div className="content_container">
        <h2>004 - Tree Trunks</h2>
        <small><a href={Day1_004} download="Day1_004.blend">Starter file: 004</a></small>

        <div className="content_container_divide">
          <p>
            Next we add the trunks. Start by <PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"creating one cylinder"}/> and 
            set the number of sides to 10 in the popup menu. <PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"Move the cylinder to somewhere adequate"}/>. Once 
            in position move the log down in "Edit Mode" and move it back up to it's original position 
            in "Object Mode". Note that now the orange circle is at floor level. So now if we choose to <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"Scale"}/> it in "Object Mode", the bottom doesn't scale downwards. This is 
            strictly optional, but convient. Though any scale changes should be <PopupText keybindingText={<span>Transfer Scale</span>} keybindingImgVideo={<img src={TransferScale}/>} meshOrMenu={false} placerText={`transferred to "Edit Mode"`}/> aftewards.
          </p>
          <img src={trunk}/>
        </div>

        <div className="media_item_container">
          <LazyVideo src={add_trunk} loop muted playsInline controls/>
        </div>
        <p>
          We then <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right containers section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"duplicate"}/> the object in "Object Mode" (creating unqiue instances, not part of the original cylinder). Add 3 more of them, place them wherever adequate and scale their 
          height for variety.
        </p>
        <div className="media_item_container">
          <img src={trunks}/>
        </div>
      </div>

      <div className="content_container">
        <h2>005 - Logs</h2>
        <small><a href={Day1_005} download="Day1_005.blend">Starter file: 005</a></small>

        <div className="content_container_divide">
          <p>
            We add a <PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"new cylinder object"}/> with 10 sides, but before making any changes to it, in 
            the popup menu set "Cap Fill Type" which is a unique property
            that defines the structure of the top and bottom faces to "Triangle Fan". Note: any changes made to the object will remove the ability to make this change.
          </p>
          <img src={cap_fill_mode}/>
        </div>

        <p>
          <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`Then in "Edit Mode"`}/> we set the "Select Mode" (to the direct right) to be in "Face". While holding shift, we select every face except two on the top, the two on the sides below them, and 
          two faces on the bottom below them. <PopupText keybindingText={<span>X</span>} keybindingImgVideo={<video src={Delete} loop muted playsInline/>} meshOrMenu={true} placerText={"Delete"}/> the faces. Then switch to "Vertices" and select the four vertices making the empty shell and <PopupText keybindingText={<span>F</span>} keybindingImgVideo={<video src={Fill} loop muted playsInline/>} meshOrMenu={true} placerText={"fill"}/> them.
          Do the same for the other side.
        </p>
        <div className="media_item_container">
          <LazyVideo src={create_log} loop muted playsInline controls/>
        </div>

        <p>
          <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"Scale"}/>, <PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"place"}/> and <PopupText keybindingText={<span>R with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={RotateXYZ} loop muted playsInline/>} meshOrMenu={true} placerText={"Rotate"}/> the 
          log however you see fit. <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right containers section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"Duplicate"}/> the log in "Object Mode" and place them wherever adequate
        </p>
        <div className="media_item_container">
          <img src={final_logs}/>
        </div>
        <p>
          If you move an object in "Edit Mode" by accident, the origin point of that object will not folllow. You 
          can <PopupText keybindingText={<span>Reset Origin Point</span>} keybindingImgVideo={<img src={ResetGeometry}/>} meshOrMenu={false} placerText={"reset the point"}/> if necassary.
        </p>
      </div>



      <div className="content_container">
        <h2>006 - Collection Organization</h2>
        <small><a href={Day1_006} download="Day1_006.blend">Starter file: 006</a></small>

        <div className="content_container_divide">
          <p>
            The top right is your scene organization. You can interpret it as the same as your local file explorer. Collections 
            are folders. Create them, and <PopupText keybindingText={<span>M</span>} keybindingImgVideo={<video src={Move} loop muted playsInline/>} meshOrMenu={true} placerText={"place your objects inside"}/>. The 
            name of individual objects should be updated as well. Each name must be unique.
          </p>
          <img src={containers_renamed}/>
        </div>

        <div className="media_item_container">
          <LazyVideo src={renaming_items} loop muted playsInline controls/>
        </div>


      </div>





      <div className="content_container">
        <h2>007 - Axe</h2>
        <small><a href={Day1_007} download="Day1_007.blend">Starter file: 007</a></small>

        <div className="content_container_divide">
          <p>
            This is a simple low poly scene. For an axe you can just use two rectangles to represent an axe. One for an axe head and another for the handle. 
            Start by creating a cube and scaling it which represents the axe head. If you want something simple this is enough.
          </p>
          <img src={axe_head}/>
        </div>



        <p>
          But we'll be adding a bit more detail. This requires using new keybinds. An axe head has a curved edge. Unfortunately as is we can't cut make the curve. we 
          need more vertices. So we introduce <PopupText keybindingText={<span>Ctrl + R</span>} keybindingImgVideo={<video src={Cut} loop muted playsInline/>} meshOrMenu={true} placerText={"loop cuts"}/> in <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`"Edit Mode"`}/> into our 
          shape which allow us to better curve the 
          axe at its end. Three cuts placed at the center. While still in "Edit Mode" select the vertices at the end and <PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"move them up"}/>. Then 
          <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"tighten"}/> the top of the axe.
        </p>
        
        <div className="media_item_container">
          <LazyVideo src={cut_action} loop muted playsInline controls/>
        </div>

        <p>
          Add <PopupText keybindingText={<span>Ctrl + R</span>} keybindingImgVideo={<video src={Cut} loop muted playsInline/>} meshOrMenu={true} placerText={"another loop cut"}/> perpendicularly and now use the <PopupText keybindingText={<span>G &#215; 2</span>} keybindingImgVideo={<video src={GG} loop muted playsInline/>} meshOrMenu={true} placerText={"vertex slider"}/> for a
          finer adjustment of points into a sharp edge.
        </p>

        <div className="media_item_container">
          <LazyVideo src={cut_and_gg} loop muted playsInline controls/>
        </div>


        <p>
          Then comes the handle. We create a cube and place it inside the axe head while in <PopupText keybindingText={<span>Z</span>} keybindingImgVideo={<video src={ChangeRenderView} loop muted playsInline/>} meshOrMenu={true} placerText={`"Wireframe" view.`}/>. We use <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"scale"}/> to expand it into a handle. We want a small curve on this though.
          We do <PopupText keybindingText={<span>Ctrl + R</span>} keybindingImgVideo={<video src={Cut} loop muted playsInline/>} meshOrMenu={true} placerText={"a loop cuts"}/>, use a bit more of scale, and select a face which we
           then extrude.
        </p>

        {/* video of axe handle */}

        <p>
          Place your complete axe wherever adequate.
          {/* screenshot div split */}
        </p>

      </div>



    </>

  )

}

export default Day1