
import "./keybindings.css"
import {ApplyMat, Bisect, BridgeObj, edge_bevel_round, Inset, Join, MaterialWindow, vert_bevel_round, zyx_axis} from "../../constants"
import PopupText from "../popupText/popupText"
import { GrabAxis, ScaleAxis, Duplicate, LinkedDuplicate, CenterOn, FocusOn, ChangeRenderView, SelectAll, SelectClicked
  , Delete, InteractionMode, NewObject, TransferScale, RotateXYZ, NewLight, NewCamera, RendererMode, Fill, ResetGeometry, Move, Cut, GG, Extrude, SplitObj
} from "../../constants"



{/*
  Potential new keybinds
  
  Ctrl + Shift + B: enables vertex bevel which rounds edges. To increase cuts, use mouse wheel.
  Ctrl + B: enables edge bevel which rounds corners. To introduce edges, use mouse wheel
  
  
*/}









function Keybindings() {
  return(
    <>

    <div className="content_container">      {/* Movement keybindings */}
      <h2>Movement & Selection</h2>
      <small>In our environment</small>

      <div className="keybindings_container">
        <div className="keybindings_section">
          <div>
            <p className="keybind">Rotate & Zoom</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">MMB and scroller</p>
          </div>
          <div>
            <p className="keybind">Free Camera Mode</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Shift + ` [Tilde]</p>
          </div>
          <div>
            <p className="keybind">Axis Change-View</p>
            <p className="keybind_-">-</p>
            <img className="keybind_img" src={zyx_axis}/>
          </div>
          <div>
            <p className="keybind">Move Cursor(spawn point)</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Shift + RMB or Shift + S</p>
          </div>
        </div>

        <div className="keybindings_section">
          <div>
            <p className="keybind">Select Item</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">LMB</p>
          </div>
          <div>
            <p className="keybind">Area Select</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">C</p>
          </div>
          <div>
            <p className="keybind">Lasso Select</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Ctrl + RMB</p>
          </div>
          <div>
            <p className="keybind">Select All Connecting</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">L</p>
          </div>
        </div>
      </div>
    </div>


    <div className="content_container">      {/* mesh-related Keybindings */}
      <h2>Mesh-Related Keybinds</h2>
      <small>Manipulating our objects</small>

      <div className="keybindings_container">
        <div className="keybindings_section">
          <div>
            <p className="keybind"><PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"Move in Specific Axis"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">G with optional (X,Y,Z)<small>("Edit Mode" does not move origin point)</small></p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"Scale in Specific Axis"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">S with optional (X,Y,Z) <small>(should be done in "Edit Mode")</small></p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>R with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={RotateXYZ} loop muted playsInline/>} meshOrMenu={true} placerText={"Rotate in Specific Axis"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">R with optional (X,Y,Z)<small>(should be done in "Edit Mode")</small></p>
          </div>
        </div>

        <div className="keybindings_section">
          <div>
            <p className="keybind"><PopupText keybindingText={<span>Shift + D<br/><small>("Edit mode" and "Object Mode" copy differently. Difference is noticable in the top right collections section)</small></span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"Duplicate"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Shift + D <small>("Edit mode" and "Object mode" copy differently. Difference is noticable in the top right collections section)</small></p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>Alt + D<br/></span>} keybindingImgVideo={<video src={LinkedDuplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"Linked Duplicate"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Alt + D</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>Numpad . (View → Frame Selected)</span>} keybindingImgVideo={<video src={CenterOn} loop muted playsInline/>} meshOrMenu={true} placerText={"Center on"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Numpad . (View → Frame Selected)</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>/</span>} keybindingImgVideo={<video src={FocusOn} loop muted playsInline/>} meshOrMenu={true} placerText={"Focus on"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">/</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>Z</span>} keybindingImgVideo={<video src={ChangeRenderView} loop muted playsInline/>} meshOrMenu={true} placerText={"Change Render View"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Z</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>A</span>} keybindingImgVideo={<video src={SelectAll} loop muted playsInline/>} meshOrMenu={true} placerText={"Select All"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">A</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>(hold)Shift + LMB</span>} keybindingImgVideo={<video src={SelectClicked} loop muted playsInline/>} meshOrMenu={true} placerText={"Select Clicked"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">(hold)Shift + LMB</p>
          </div>


          <div>
            <p className="keybind"><PopupText keybindingText={<span>X</span>} keybindingImgVideo={<video src={Delete} loop muted playsInline/>} meshOrMenu={true} placerText={"Delete"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">X</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>F</span>} keybindingImgVideo={<video src={Fill} loop muted playsInline/>} meshOrMenu={true} placerText={"Fill"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">F</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>I</span>} keybindingImgVideo={<video src={Inset} loop muted playsInline/>} meshOrMenu={true} placerText={"Inset"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">I</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>E</span>} keybindingImgVideo={<video src={Extrude} loop muted playsInline/>} meshOrMenu={true} placerText={"Extrude Face"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">E</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>Ctrl + R</span>} keybindingImgVideo={<video src={Cut} loop muted playsInline/>} meshOrMenu={true} placerText={"Add Loop Cut"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Ctrl + R <small>(To increase cuts, use scroll-wheel)</small></p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>G &#215; 2</span>} keybindingImgVideo={<video src={GG} loop muted playsInline/>} meshOrMenu={true} placerText={"Vertex Slider"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">G &#215; 2</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>Ctrl + B</span>} keybindingImgVideo={<video src={edge_bevel_round} loop muted playsInline/>} meshOrMenu={true} placerText={"Bevel Edge"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Ctrl + B <small>(To increase cuts, use scroll-wheel)</small></p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>Ctrl + Shift + B</span>} keybindingImgVideo={<video src={vert_bevel_round} loop muted playsInline/>} meshOrMenu={true} placerText={"Bevel Vertex"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Ctrl + Shift + B <small>(To increase cuts, use scroll-wheel)</small></p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>M</span>} keybindingImgVideo={<video src={Move} loop muted playsInline/>} meshOrMenu={true} placerText={"Move To Collection"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">M</p>
          </div>

        </div>
      </div>
    </div>



      <div className="content_container">      {/* menu-related content */}
        <h2>Menu-Related Selections</h2>
        <small>Same as mesh-related, just by menu click instead</small>
        <div className="keybindings_container">
          <div className="keybindings_section">
            <div>
              <p className="keybind"><PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"New Object"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">create new object</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>New Light Source</span>} keybindingImgVideo={<video src={NewLight} loop muted playsInline/>} meshOrMenu={false} placerText={"New Light Source"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">add a new source of light</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>New Camera</span>} keybindingImgVideo={<video src={NewCamera} loop muted playsInline/>} meshOrMenu={false} placerText={"New Camera"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">add a camera to the scene. Then hit "Render" on the top left followed by "Render Image" to render a frame.</p>
            </div>
          </div>

          <div className="keybindings_section">
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={"Interaction Mode"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">change interaction mode. Can also be done with "Tab" keybind</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Transfer Scale</span>} keybindingImgVideo={<img src={TransferScale}/>} meshOrMenu={false} placerText={"Transfer Scale"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">if you applied <PopupText keybindingText={<span>S with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"scale"}/> or <PopupText keybindingText={<span>R with optional (X,Y,Z)<br/><small>(should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={RotateXYZ} loop muted playsInline/>} meshOrMenu={true} placerText={"rotate"}/> while in "Object Mode", this will transfer it to "Edit Mode". Select your desired object(s) for the fix</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Reset Origin Point</span>} keybindingImgVideo={<img src={ResetGeometry}/>} meshOrMenu={false} placerText={"Reset Origin Point"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">if you <PopupText keybindingText={<span>G with optional (X,Y,Z)<br/><small>("Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"moved an object"}/> in "Edit Mode" (which doesn't move it's origin point) unintentionally, you can reset the origin point like so. Either origin to geometry or geometry to origin</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Join Objects</span>} keybindingImgVideo={<video src={Join} loop muted playsInline/>} meshOrMenu={false} placerText={"Join Objects"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">combines selected objects into one. Same as creating objects "Edit Mode". The object selected first will have it's origin point used</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Rendering Mode</span>} keybindingImgVideo={<img src={RendererMode}/>} meshOrMenu={false} placerText={"Rendering Mode"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">change to "Cycles" for better quality and set Viewport → Max Samples & Render → Max Samples to '128'. Greater values may be overkill for our purposes</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Bisect</span>} keybindingImgVideo={<video src={Bisect} loop muted playsInline/>} meshOrMenu={false} placerText={"Bisect"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">cuts into our object in "Edit Mode"</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Materials Window</span>} keybindingImgVideo={<img src={MaterialWindow}/>} meshOrMenu={false} placerText={"Materials Window"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">select an object first. Used to change the material of our object. The color and texture</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Apply Material to Selected</span>} keybindingImgVideo={<img src={ApplyMat}/>} meshOrMenu={false} placerText={"Apply Material to Selected"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">applies the material to all <PopupText keybindingText={<span>(hold)Shift + LMB</span>} keybindingImgVideo={<video src={SelectClicked} loop muted playsInline/>} meshOrMenu={true} placerText={"objects selected"}/> to the one selected last (orange outline)</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Split Object</span>} keybindingImgVideo={<img src={SplitObj}/>} meshOrMenu={false} placerText={"Split Object"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">Splits the selected faces in "Edit Mode" into its own unique object</p>
            </div>
            <div>
              <p className="keybind"><PopupText keybindingText={<span>Bridge Deleted Faces</span>} keybindingImgVideo={<video src={BridgeObj} loop muted playsInline/>} meshOrMenu={false} placerText={"Bridge Deleted Faces"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">Deletes the selected faces and fills a connection to the other side</p>
            </div>
          </div>
        </div>

      </div>

  </>
  )




}


export default Keybindings