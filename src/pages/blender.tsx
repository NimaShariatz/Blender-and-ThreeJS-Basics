import { useEffect, useRef } from "react"

import "./tutorial_page.css"
import {CenterOn, zyx_axis, InteractionMode, Day1_001, new_window, Delete, NewObject,
  TransferScale, plane, Day1_002, ScaleAxis, Duplicate, containers, RotateXYZ, SelectAll, Day1_fences, Day1_003,
  GrabAxis, ChangeRenderView, NewLight, NewCamera, RendererMode, Day1_lightAndcamera, Day1_004, trunk, add_trunk, trunks, Day1_005, create_log, cap_fill_mode,
  Fill, final_logs, Day1_006, ResetGeometry, Move, containers_renamed, renaming_items, Day1_007, axe_head, Cut, GG, cut_and_gg,
  cut_action, axe_handle, axe_complete, Extrude, Day1_008, pole_create, Join, LinkedDuplicate, pole_finish, Day1_009, Bisect, make_rock, finished_rocks, 
  Day1_010, Day1_011, copy_paste, making_grass, do_wood, SelectClicked,
  MaterialWindow,
  ApplyMat,
  finish_mat_rocks,
  SplitObj,
  pole_axe_seperation,
  mat_comp,
  add_emission,
  add_areaLight,
  complete_render,
  Day1_012,
  deleting_faces,
  activate_faceorient,
  faceorient_example,
  Day1_013,
  changing_orient,
  mesh_basic_model_render,
  mesh_standard_model_render,
  yumi_example,
  jap_example,
  paper_example,
  plane_example,
  example_snapshot
 } from "../constants"
import PopupText from "../components/popupText/popupText";



function LazyVideo({ src, ...props }: React.VideoHTMLAttributes<HTMLVideoElement>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // ------ 1. Set up the observer to watch our video element
    const observer = new IntersectionObserver((entries) => {//window.addEventListener('scroll', ...) replacement. for performance
      const videoEntry = entries[0];
      
      // ------ 2. Check if the video is currently visible on the screen
      if (videoEntry.isIntersecting) {
        // Only attach the source and play when visible
        if (!videoElement.src && src) {
          videoElement.src = src;
          videoElement.load();
        }
        videoElement.play().catch(e => console.log("Playback prevented:", e));
      } else {
        // Pause and flush the video from memory when off-screen
        videoElement.pause();
        videoElement.removeAttribute('src');
        videoElement.load(); // Forces the browser to clear the memory buffer
      }
    }, {
      rootMargin: "200px" // Loads the video slightly before it scrolls into view
    });

    // 3. ------ Tell the observer to start watching this specific video
    observer.observe(videoElement);

    // 4. ------ Clean up: stop watching when the user leaves the page or the video is removed
    return () => observer.disconnect();
  }, [src]);

  return (
    <video 
      ref={videoRef} 
      preload="none" // Tells the browser not to preload the video data
      {...props} 
    />
  );
}





function Blender() {
  


  
  return (
    <>

      <div className="titleSection_container">
        <h1>Blender model</h1>
      </div>
      <div className="content_container">
        <h2>Goal</h2>
        <small>Blender model basics</small>
        <p>
          The goal is to get a feel for Blender. You won't be an expert but you'll get an idea of what is feasible.
          The best way to do it is to make a few models yourself. The following are derived from existing tutorials. They serve as documentation for their steps.
        </p>
        <p>
          Above you will find various keybinds and menu commands. All keybinds can also be selected via a menu or icon somewhere, and a fair amount of menu options
          have an equivalent keybinding attached to them. I chose which ones are more convient by keybind or by menu select. Though there is a bit of preference in there.
        </p>

        <p>
          This is what we'll be making for our blender model.
        </p>
        <div className="media_item_container">
          <img src={complete_render}/>
        </div>
      </div>




      <div className="content_container">
        <h2>Basic Controls</h2>
        <small>Movement and manipulation</small>
        <p>
          You will use your middle-mouse-button for much of your movement. Both rotation and zoom. Notably you will also be using the <PopupText keybindingText={<span>Axis Change-View</span>} keybindingImgVideo={<img src={zyx_axis}/>} meshOrMenu={true} placerText={"axis view-changer"}/> when convient.
        </p>
        <p>
          There's also a set of common actions far more convient by keybind than by menu hopping. <PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"Grab"}/> for movement 
          and <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"scale"}/> for sizing, with both 
          being able to be moved/resized by a specific axis. Items can be <PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<video src={CenterOn} loop muted playsInline/>} meshOrMenu={true} placerText={"centered on"}/> with either the numpad period key, or View → Frame Selected.
          You can <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right collections section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"duplicate"}/> an existing object, or create a <PopupText keybindingText={<span>Alt + D<br/></span>} keybindingImgVideo={<video src={LinkedDuplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"linked duplicate"}/> which has any sizing or physical changes applied to all other instances. Do note 
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
            boards <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right collections section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"by creating several copies"}/>. These copies are done 
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
          the scene. Place it wherever adequate. Notice below your <b>Axis Change-View</b> is a camera icon. You can view through the camera by this button. Below that we can also change our perspective to Orthographic which means objects do not shrink when farther away. RTS games such as AoE, C&C and CoH use this perspective. We also 
          change the <PopupText keybindingText={<span>Rendering Mode</span>} keybindingImgVideo={<img src={RendererMode}/>} meshOrMenu={false} placerText={"rendering mode"}/> to "Cycles" for better quality 
          and set Viewport → Max Samples & Render → Max Samples to '128'. Higher quality is unnecassary.
        </p>
        <p>
          Finally, on the top left go select Render → Render Image to see your model properly rendered. How long it takes to complete depends on 
          the values you put in the "Max Samples", and your personal computer.
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
          We then <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right collections section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"duplicate"}/> the object in "Object Mode" (creating unqiue instances, not part of the original cylinder). Add 3 more of them, place them wherever adequate and scale their 
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
          log however you see fit. <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right collections section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"Duplicate"}/> the log in "Object Mode" and place them wherever adequate
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
          need more vertices. So we introduce <PopupText keybindingText={<span>Ctrl + R <small>(To increase cuts, use scroll-wheel)</small></span>} keybindingImgVideo={<video src={Cut} loop muted playsInline/>} meshOrMenu={true} placerText={"loop cuts"}/> in <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`"Edit Mode"`}/> into our 
          shape which allow us to better curve the 
          axe at its end. Three cuts placed at the center. While still in "Edit Mode" select the vertices at the end and <PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"move them up"}/>. Then 
          <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"tighten"}/> the top of the axe.
        </p>
        
        <div className="media_item_container">
          <LazyVideo src={cut_action} loop muted playsInline controls/>
        </div>

        <p>
          Add <PopupText keybindingText={<span>Ctrl + R <small>(To increase cuts, use scroll-wheel)</small></span>} keybindingImgVideo={<video src={Cut} loop muted playsInline/>} meshOrMenu={true} placerText={"another loop cut"}/> perpendicularly and now use the <PopupText keybindingText={<span>G &#215; 2</span>} keybindingImgVideo={<video src={GG} loop muted playsInline/>} meshOrMenu={true} placerText={"vertex slider"}/> for a
          finer adjustment of points into a sharp edge.
        </p>

        <div className="media_item_container">
          <LazyVideo src={cut_and_gg} loop muted playsInline controls/>
        </div>


        <p>
          Then comes the handle. We <PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"create a cube"}/> in "Edit Mode" (so the cube and axe head are considered the part of the same object) and place it inside the axe head while in <PopupText keybindingText={<span>Z</span>} keybindingImgVideo={<video src={ChangeRenderView} loop muted playsInline/>} meshOrMenu={true} placerText={`"Wireframe" view.`}/>. We 
          use <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"scale"}/> to expand it into a handle.
          We use <PopupText keybindingText={<span>Ctrl + R <small>(To increase cuts, use scroll-wheel)</small></span>} keybindingImgVideo={<video src={Cut} loop muted playsInline/>} meshOrMenu={true} placerText={" loop cuts"}/>, use a bit more of scale and grab, and for the first time use <PopupText keybindingText={<span>E</span>} keybindingImgVideo={<video src={Extrude} loop muted playsInline/>} meshOrMenu={true} placerText={"extrusion"}/> in the process.
        </p>

        <div className="media_item_container">
          <LazyVideo src={axe_handle} loop muted playsInline controls/>
        </div>

        <p>
          Finally, place your axe wherever adequate. Remember to <PopupText keybindingText={<span>Reset Origin Point</span>} keybindingImgVideo={<img src={ResetGeometry}/>} meshOrMenu={false} placerText={"reset the origin to the center"}/> of the object if 
          you move it in "Edit Mode" and move the axe into it's own <PopupText keybindingText={<span>M</span>} keybindingImgVideo={<video src={Move} loop muted playsInline/>} meshOrMenu={true} placerText={"collection folder"}/>.
        </p>

        <div className="media_item_container">
          <LazyVideo src={axe_complete} loop muted playsInline controls/>
        </div>

        

      </div>



      <div className="content_container">
        <h2>008 - Light Poles</h2>
        <small><a href={Day1_008} download="Day1_008.blend">Starter file: 008</a></small>

        <p>
          Creating the post relies on the same techniques used so far. We 
          use a <PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"series of cubes"}/> and make 
          use of <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"scale"}/>, <PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"grab"}/>, and <PopupText keybindingText={<span>R with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={RotateXYZ} loop muted playsInline/>} meshOrMenu={true} placerText={"rotate"}/>. Note 
          that I made the objects <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`in "Edit Mode"`}/> which has them all be considered part of the first cube created. If you made your shapes in "Object Mode" 
          you can <PopupText keybindingText={<span>Join Objects</span>} keybindingImgVideo={<video src={Join} loop muted playsInline/>} meshOrMenu={false} placerText={"join them together"}/> later as well.
        </p>
        <div className="media_item_container">
          <LazyVideo src={pole_create} loop muted playsInline controls/>
        </div>

        <p>
          Next move it <PopupText keybindingText={<span>M</span>} keybindingImgVideo={<video src={Move} loop muted playsInline/>} meshOrMenu={true} placerText={"to its own collection"}/>. We then 
          use a <PopupText keybindingText={<span>Alt + D<br/></span>} keybindingImgVideo={<video src={LinkedDuplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"linked duplicate"}/> (not a <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right collections section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"duplicate"}/>) to make another one for the other side. Place both items wherever 
          convient.
        </p>
        <div className="media_item_container">
          <LazyVideo src={pole_finish} loop muted playsInline controls/>
        </div>

      </div>




      <div className="content_container">
        <h2>009 - Rocks</h2>
        <small><a href={Day1_009} download="Day1_009.blend">Starter file: 009</a></small>
      
        <p>
          We use the <PopupText keybindingText={<span>Bisect</span>} keybindingImgVideo={<video src={Bisect} loop muted playsInline/>} meshOrMenu={false} placerText={"bisect tool"}/> for the rocks, which cuts the object like a knife would. <PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"Add a cube"}/>, then bisect 
          the object. In the bottom left popup menu tick 
          "Clear Outer" and "Fill". You <PopupText keybindingText={<span>A</span>} keybindingImgVideo={<video src={SelectAll} loop muted playsInline/>} meshOrMenu={true} placerText={"select everything"}/> in "Edit Mode" and slash the cube. Keep selecting all 
          and bisecting repeatidly until satisfied. Place your rock wherever adequate and create a new cube for a new rock. Add as many 
          rocks as you'd like. Feel 
          free to 
          use <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"scale"}/>, <PopupText keybindingText={<span>R with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={RotateXYZ} loop muted playsInline/>} meshOrMenu={true} placerText={"rotate"}/>, and <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right collections section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"duplicate"}/> as you wish.
        </p>
        <div className="media_item_container">
          <LazyVideo src={make_rock} loop muted playsInline controls/>
        </div>

        <div className="media_item_container">
          <img src={finished_rocks}/>
        </div>

      </div>


      <div className="content_container">
        <h2>010 - Portal</h2>
        <small><a href={Day1_010} download="Day1_010.blend">Starter file: 010</a></small>

        <p>
          This is an optional bit you can do for some practice. Its largely everything we've done so far. The steps are 
          a series of rectangles reduced in <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"scale"}/> consecutively. 
          The stone blocks forming the circle are cubes that have been <PopupText keybindingText={<span>Alt + D<br/></span>} keybindingImgVideo={<video src={LinkedDuplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"linked duplicate"}/> to form the circle. 
          There is a <PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"circular plane"}/> representing the window.
        </p>

        <p>
          Instead i'll use this opportunity to show you that you can copy and paste (Ctrl + C) objects from one .blend file into another.
          We go to the starter file for 011, select all the items in the portal collection, 
          and copy the portal in its entirity. Then place it into <PopupText keybindingText={<span>M</span>} keybindingImgVideo={<video src={Move} loop muted playsInline/>} meshOrMenu={true} placerText={"its own collection"}/>. 
        </p>

        <div className="media_item_container">
          <LazyVideo src={copy_paste} loop muted playsInline controls/>
        </div>
      
      </div>



      <div className="content_container">
        <h2>011 - Materials</h2>
        <small><a href={Day1_011} download="Day1_011.blend">Starter file: 011</a></small>
        
        <p>
          This is where we color the scene. We go into <PopupText keybindingText={<span>Z</span>} keybindingImgVideo={<video src={ChangeRenderView} loop muted playsInline/>} meshOrMenu={true} placerText={`"Material Preview"`}/> to see our colors. At the beginning everything will be white.
          Changing the color of an object isn't quite as simple as selecting a color. This is because we have much more to play with than just 
          color selection. But for our purposes there won't be much exploration.
        </p>
        <p>
          We start with the floor plane. First we need to create a material. Select the plane and go to the <PopupText keybindingText={<span>Materials Window</span>} keybindingImgVideo={<img src={MaterialWindow}/>} meshOrMenu={false} placerText={"materials window"}/>. We need a new material so 
          select the '+ new'. Note the "Surface" should be "Principled BSDF". Name the material to "grass", set "Roughness" to the max value to replicate rougher texture of grass, and set the "Base Color" to your shade of green. 
        </p>

        <div className="media_item_container">
          <LazyVideo src={making_grass} loop muted playsInline controls/>
        </div>

        <p>
          Next are the wooden objects. We have many of them. It's faster to create the material for one wooden object then apply it to all others.
          First, we create the material for one wooden object of your choice, say a fence. Select it, 
          name it wood, set roughness to max, and color to a light brown. Then in order to apply it to all, <PopupText keybindingText={<span>(hold)Shift + LMB</span>} keybindingImgVideo={<video src={SelectClicked} loop muted playsInline/>} meshOrMenu={true} placerText={"individually select all"}/> the 
          wooden objects and 
          make sure to select the one fence we have as wooden as the very last. Notice how the outline of your last selected object is orange, while the 
          rest is red. Then <PopupText keybindingText={<span>Apply Material to Selected</span>} keybindingImgVideo={<img src={ApplyMat}/>} meshOrMenu={false} placerText={"apply the material"}/> of your final selected object (orange outline) to all others (red outline). Note how 
          we did not select the light poles or the axe.
        </p>

        <div className="media_item_container">
          <LazyVideo src={do_wood} loop muted playsInline controls/>
        </div>

        <p>
          Next are the rocks. Both the individual items placed on the scene and around the portal. The process is nearly the exact same as the fences: select one rock, 
          new material called rock, color to a light grey, keep roughness to .5 this time. Then <PopupText keybindingText={<span>(hold)Shift + LMB</span>} keybindingImgVideo={<video src={SelectClicked} loop muted playsInline/>} meshOrMenu={true} placerText={"select all"}/> the rocks on the ground and portal and keep the rock 
          we changed the material of as the last selection. And <PopupText keybindingText={<span>Apply Material to Selected</span>} keybindingImgVideo={<img src={ApplyMat}/>} meshOrMenu={false} placerText={"apply its material to all selected"}/>.
        </p>

        <div className="media_item_container">
          <LazyVideo src={finish_mat_rocks} loop muted playsInline controls/>
        </div>

        <p>
          Note how we have not touched on the poles and axe yet. This is because previously we <PopupText keybindingText={<span>Join Objects</span>} keybindingImgVideo={<video src={Join} loop muted playsInline/>} meshOrMenu={false} placerText={"Joined"}/> them as one object. This is problematic because 
          we need the pole and axe to be a combinated of various materials. We can solve this in two ways:
          <br/>
          1 - apply our material color on a face-by-face basis. We go in "Edit mode", select the relevant faces and apply the material we want to them.
          <br/>
          2 - more preferably, <PopupText keybindingText={<span>Split Object</span>} keybindingImgVideo={<img src={SplitObj}/>} meshOrMenu={false} placerText={"seperate"}/> the pole into the segments we want by hand. The opposite of <PopupText keybindingText={<span>Join Objects</span>} keybindingImgVideo={<video src={Join} loop muted playsInline/>} meshOrMenu={false} placerText={"join"}/>.
          We <PopupText keybindingText={<span>X</span>} keybindingImgVideo={<video src={Delete} loop muted playsInline/>} meshOrMenu={true} placerText={"delete"}/> one of the poles as if you recall they are <PopupText keybindingText={<span>Alt + D<br/></span>} keybindingImgVideo={<video src={LinkedDuplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"linked duplicates"}/>. This process can accidentally mess with the other pole. Once we are 
          done, we can do a <PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right collections section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"duplicate"}/> of the pole for the other side. Do the same for the axe.
        </p>

        <div className="media_item_container">
          <LazyVideo src={pole_axe_seperation} loop muted playsInline controls/>
        </div>

        <p>
          We then need create <PopupText keybindingText={<span>Materials Window</span>} keybindingImgVideo={<img src={MaterialWindow}/>} meshOrMenu={false} placerText={"a new material"}/> called metal for the lamp case and axe head. Lower the "Roughness" to .2 and do not 
          change the "Metallic" number as its more about having things reflecting. Then apply the existing wood and stone to the relevant items. 
          The only thing left should be the lamps themselves, and the circular portal.
        </p>

        <div className="media_item_container">
          <img src={mat_comp}/>
        </div>

        <p>
          The final materials to add are the lights. These are also materials but specifically called Emmisive Materials; they emit light.
          The process is similar except after pressing "+ new", you set "Surface" to "Emmission" and increase the "Strength" to 40 and choose a warmer color, 
          say orange. Call it "lightEmmisive". Apply it to both lamps. As for the portal, make a new emmisive material, but have the color remain white and a 
          "Strength" of 5. Call it "emmisivePortal".
        </p>

        <div className="media_item_container">
          <img src={add_emission}/>
        </div>

        <p>
          Finally, the point light in our scene can 
          be better. We <PopupText keybindingText={<span>X</span>} keybindingImgVideo={<video src={Delete} loop muted playsInline/>} meshOrMenu={true} placerText={"delete"}/> the point light and <PopupText keybindingText={<span>New Light Source</span>} keybindingImgVideo={<video src={NewLight} loop muted playsInline/>} meshOrMenu={false} placerText={`add an "Area Light"`}/>. <PopupText keybindingText={<span>R with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={RotateXYZ} loop muted playsInline/>} meshOrMenu={true} placerText={"Rotate"}/> and <PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"move"}/> it in a similar position 
          to the one here. Use <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"scale"}/> to make the area light larger. Increase the area light "Strength" to 
          60 and give it an orange color. To clarify, you can 
          apply your own colors and "Strength" values to your own scene.
        </p>

        
        <div className="media_item_container">
          <img src={add_areaLight}/>
        </div>

        <p>
          Finally our scene is complete. Lets do a render.
        </p>

        <div className="media_item_container">
          <img src={complete_render}/>
        </div>

      </div>


      <div className="content_container">
        <h2>012 - Optimization</h2>
        <small><a href={Day1_012} download="Day1_012.blend">Starter file: 012</a></small>

        <p>
          There's a few things we can do to help with performance on our ThreeJS render. Remember the final product will be rendered on a web page. Not 
          on blender. First we can <PopupText keybindingText={<span>X</span>} keybindingImgVideo={<video src={Delete} loop muted playsInline/>} meshOrMenu={true} placerText={"delete"}/> the hidden 
          faces in <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`"Edit Mode"`}/> that likely will never be seen by the user. In our case that is faces that are facing downwards. 
          We do this process with the bottom of whatever objects we can think of: trunks, logs, rocks, poles(which are already done), and the stone steps.
        </p>

        <div className="media_item_container">
          <LazyVideo src={deleting_faces} loop muted playsInline controls/>
        </div>

        <p>
          Next <PopupText keybindingText={<span>A</span>} keybindingImgVideo={<video src={SelectAll} loop muted playsInline/>} meshOrMenu={true} placerText={"select all"}/> in <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`"Object Mode"`}/> and 
          <PopupText keybindingText={<span>Transfer Scale</span>} keybindingImgVideo={<img src={TransferScale}/>} meshOrMenu={false} placerText={"transfer the scale"}/> so every tranform action is now in "Edit Mode". Just to make sure.
        </p>

        <div className="content_container_divide">
          <p>
            Finally, we fix a potential issue that can occur as we make our model; when faces are flipped. All faces have a font and back. On occation they can 
            be flipped. In <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`"Edit Mode"`}/> on the top right corner click on the following icon. And tick "Face Orientation". 
            You will see certain objects be highlighted red. These are the ones with a flipped face. If not, you are good to go!
          </p>
          <img src={activate_faceorient}/>
        </div>

        <p>
          How does this happen? When you try and extrude it in a specific manner which flips the faces. Observe:
        </p>

        <div className="media_item_container">
          <LazyVideo src={faceorient_example} loop muted playsInline controls/>
        </div>



        <div className="content_container_divide">
          <p>
            This is very unlikely to cause any issues with our model as we are using it now, but the solution is very easy. To fix this, <PopupText keybindingText={<span>(hold)Shift + LMB</span>} keybindingImgVideo={<video src={SelectClicked} loop muted playsInline/>} meshOrMenu={true} placerText={"select each of"}/> the faces of red the troubled object, then while in <PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={`"Edit Mode"`}/> go to Mesh → Normals → Flip. The red highlights should go away.
            Do this until nothing red is left highlighted and you can untick "Face Orientation".
          </p>
          <img src={changing_orient}/>
        </div>

        <p>
          On that note: our optimization is complete.
        </p>

      </div>



      <div className="content_container">
        <h2>013 - ThreeJS Implimentation and Why We Got What We Got</h2>
        <small><a href={Day1_013} download="Day1_013.blend">Blender model complete</a></small>

        <p>
          The render looks solid on blender. But we are not rendering it on blender, rather it's being done by the browser real-time. The ThreeJS side of things will 
          be looked into next lesson. But lets skip ahead and see what the render looks like. To download your file for ThreeJS, go to File → Export → glTF 2.0 (.glb/.gltf).
        </p>

        <div className="media_item_container">
          <img src={mesh_basic_model_render}/>
        </div>

        <p>
          So why does it look like a crayon drawing from a 3 year old? When we export a model into ThreeJS lights and their subsequent shadows 
          don't come with us. How can we see the model? This is because in ThreeJS we are rendering the object in <span className="threejs_material_basic">meshBasic</span>. This material 
          does not require light to be shown. It also does not interact with light in any way. Hence we do not have any of the natural gradiences that come 
          with a scene that has lighting. As such, before you export your scene you should remove 
          any light sources and the camera. Blender animations do get passed on to ThreeJS, but learning Blender animations is a 
          complicated affair. Here are some ThreeJS sites that make use of <span className="threejs_material_basic">meshBasic</span>.
        </p>




        <div className="content_container_divide">
          <p>
            1 - <a href="https://www.pola.co.jp/special/o/wecaremore/mothersday/" target="_blank">https://www.pola.co.jp/special/o/wecaremore/mothersday/</a>: This site makes heavy use of ThreeJS for animations for object and camera movement. It likely 
            does use <span className="threejs_material_basic">meshBasic</span> for its material.
          </p>
          <img src={yumi_example}/>
        </div>

        <div className="content_container_divide">
          <p>
            2 - <a href="https://unseen-music.com/yume/" target="_blank">https://unseen-music.com/yume/</a>: this site is rather standard. It does make use of 3D models, but for the most part shown from a 2D perspective. 
            There is ThreeJS used for animating both objects and the camera itself (its movement). It likely does use <span className="threejs_material_basic">meshBasic</span> for its material.
          </p>
          <img src={jap_example}/>
        </div>
        
        <p>
          There is however a type of rendering material that does require a light source: <span className="threejs_material_standard">meshStandard</span>. Yes, like in our Blender scene we can add light 
          sources to our ThreeJS scene. This is how it looks with a white light source (point light).
        </p>

        <div className="media_item_container">
          <img src={mesh_standard_model_render}/>
        </div>
        <p>
          Better, but not good. There is some gradience in our objects thanks to the light source. One thing to note is that even though we added a light source, 
          there are no shadows. Unlike Blender, ThreeJS does not automatically render shadows. Adding shadows in ThreeJS is a separate and manual process. So to 
          summarize: importing a model does not pass on any lighting, or shadows. You can render your object in <span className="threejs_material_basic">meshBasic</span> which does not require any light, or 
          render it in <span className="threejs_material_standard">meshStandard</span> (or a equivalent material that requires light) which does in order to see it. But adding shadows is a manual process. Overall, the quality will 
          not match what it is in Blender because ThreeJS needs to render it in realtime. Recall early on how we changed the <PopupText keybindingText={<span>Rendering Mode</span>} keybindingImgVideo={<img src={RendererMode}/>} meshOrMenu={false} placerText={"rendering mode"}/> to Cycles instead of EEVEE for superior rendering quality in Blender (003)?. EEVEE is in fact closer to 
          the way ThreeJS does it on the basis that it looks worse. But even then, because ThreeJS must render the scene in real-time, I.E in 60FPS (or whatever your moniter refresh rate is). We can't wait a minute just to have a single nice looking frame rendered like we do in Blender.
        </p>

        <p>
          Here are some sites that use materials which react/require a light source. They are all low-poly and actually look pretty good despite our 
          rendering quality limitations.
        </p>


        <div className="content_container_divide">
          <p>
            1 - <a href="https://tympanus.net/Tutorials/TheAviator/" target="_blank">https://tympanus.net/Tutorials/TheAviator/</a>: This is a game primarily comprised of basic shapes. It uses <span className="threejs_material_phong">meshPhong</span> which is similar to <span className="threejs_material_standard">meshStandard</span> except it has more shiny surfaces with specular highlights. 
            There is a small amount of ThreeJS shadows shown on the planet.
          </p>
          <img src={plane_example}/>
        </div>

        <div className="content_container_divide">
          <p>
            2 - <a href="https://paperplanes.world/" target="_blank">https://paperplanes.world/</a>: This page effectively has two models. The paper plane and the world. It makes heavy use of model movement and 
            camera animation. This is using a mesh that makes use of a light source, which could be <span className="threejs_material_standard">meshStandard</span> or <span className="threejs_material_phong">meshPhong</span>. A bit of shadows is used underneath the continents 
            themselves. Note how the background color also gently changes gradience.
          </p>
          <img src={paper_example}/>
        </div>

        <p>
          Note: recall how in 011 we applied color to the objects. We also tweaked the <PopupText keybindingText={<span>Materials Window</span>} keybindingImgVideo={<img src={MaterialWindow}/>} meshOrMenu={false} placerText={`"Roughness" and "Metallic"`}/> values on occasion. While color 
          does get passed on(so long as its not procedural or complex), "Roughness" and "Metallic" values will only get passed on to ThreeJS if <span className="threejs_material_standard">meshStandard</span> or <span className="threejs_material_phyiscal">meshPhysical</span> is used. It's worth 
          mentioning that you can directly apply "Metallic" and "Roughness" to a <span className="threejs_material_standard">meshStandard</span> material (I.E by code in ThreeJS) which overrides any values that come with the Blender model. In fact, mesh materials 
          have some basic fields which tweak the appearance of the model, just like in Blender.
        </p>

        <p>
          This is some documentation on various ThreeJS materials for comparison, if you are curious. Note how in the example render of each, there are fields 
          you can tweak.
        </p>
        <ul className="unordered_list">
          <li><a href="https://threejs.org/docs/#MeshBasicMaterial" target="_blank">meshBasic (no light necassary)</a></li>
          <li><a href="https://threejs.org/docs/#MeshStandardMaterial" target="_blank">meshStandard</a></li>
          <li><a href="https://threejs.org/docs/#MeshPhysicalMaterial" target="_blank">meshPhysical</a></li>
          <li><a href="https://threejs.org/docs/#MeshPhongMaterial" target="_blank">meshPhong</a></li>
          <li><a href="https://threejs.org/docs/#MeshToonMaterial" target="_blank">meshToon</a></li>
          <li><a href="https://threejs.org/docs/#MeshDepthMaterial" target="_blank">meshDepth</a></li>
        </ul>




        <div className="content_container_divide">
         <p>
            There is a trick to make our object look exactly just like our blender. This is called "baking". Effectively, the trick is to make a texture .png of our existing blender model. So copy all of the
            the colors, shadows, gradients, exactly as it is in blender, place it into a .png file and then apply it to our ThreeJS model which is rendered in <span className="threejs_material_basic">meshBasic</span>. This gives the illusion of 
            light and shadows without ever having to add any to our scene! We will get the same result as our Blender model because we are effectivily copying it's output into a .png file. However, the process of "baking" is a manual one done in Blender. It is difficult, and 
            very time consuming. In addition, this only works on static objects. It does not allow for any movement from the object itself otherwise it becomes obvious. It is a static snapshot of a Blender scene afterall. It is not rendered in real-time. Though 
            if felt necassary, this option can be further explored. To the right is an example of a texture from a scene similar to ours. If we are "baking" a scene, it would make sense to go for the highest possible 
            quality in our Blender scene by setting <PopupText keybindingText={<span>Rendering Mode</span>} keybindingImgVideo={<img src={RendererMode}/>} meshOrMenu={false} placerText={"rendering mode"}/> to Cycles. 
            Overall, it is indeed possible to get the same output as our blender with this trick and with the most performant material.
          </p>
          <img src={example_snapshot}/>
        </div>



        <p>
          It's at this point that I bring up the 'p' word in ThreeJS: performance. Two biggest hits in performance come from lights and shadows. As a result <span className="threejs_material_basic">meshBasic</span> is 
          the most performant on the basis that it neither needs nor can make use of either. To be clear, the extent to which it is used is a factor as well. It would be 
          in our best interest to have whatever we are making be either <span className="threejs_material_basic">meshBasic</span>, or use a material that requires light but make the choice to not have any shadows. <span className="threejs_material_basic">MeshBasic</span> paired with baking is 
          also very performant, but as I said, both difficult and time consuming to create a texture map in Blender for a model.
          The four example sites above are good representations of what we'd want. Remember, Blender and ThreeJS are tools for creativity. Their usage is not in of itself a justifcation 
          for its existence.
        </p>


      </div>




      <div className="content_container">
        <h2>014 - Blender Final Notes</h2>

        <p>
          By now, you should feel like you have the basics of Blender on hand but don't feel ready. Here are some web tutorials that should cover more 
          bases than I have. They are time consuming, but should no longer pose a challenge. They will touch on many things I already have, and some new tidbits 
          that I have not.
        </p>



        <div className="media_item_container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/8VmXzjgWQEg?si=e9vSliZPbYnbGIOR" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="media_item_container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/K7__BjW4UWE?si=3_NeHKdnRFUkbHBL" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>


        <p>
          Regardless of whether you feel like doing them, by now you have a fair understanding of how blender models are made and the details on making the 
          transfer to ThreeJS. Cheers.
        </p>

      </div>

    </>

  )

}

export default Blender;