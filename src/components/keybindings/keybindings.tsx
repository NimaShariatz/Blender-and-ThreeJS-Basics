
import "./keybindings.css"
import {zyx_axis} from "../../../static/constants"
import PopupText from "../popupText/popupText"
import {Grab, GrabAxis, Scale, ScaleAxis, Duplicate, LinkedDuplicate, CenterOn, FocusOn, ChangeRenderView, SelectAll, SelectClicked
  , Delete, InteractionMode, NewObject
} from "../../../static/constants"


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
        </div>
      </div>
    </div>


    <div className="content_container">      {/* mesh-related Keybindings */}
      <h2>Mesh-Related Keybinds</h2>
      <small>Manipulating our objects</small>

      <div className="keybindings_container">
        <div className="keybindings_section">
          <div>
            <p className="keybind"><PopupText keybindingText={<span>G<br/><small>(Warning: "Edit Mode" does not move origin point)</small></span>} keybindingImgVideo={<video src={Grab} loop muted playsInline/>} meshOrMenu={true} placerText={"Grab"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">G <small>(Warning: "Edit Mode" does not move origin point)</small></p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>G followed by (X,Y,Z)</span>} keybindingImgVideo={<video src={GrabAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"Move in Specific Axis"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">G followed by (X,Y,Z)</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>S<br/><small>(Note: Should be done in "Edit Mode")</small></span>} keybindingImgVideo={<video src={Scale} loop muted playsInline/>} meshOrMenu={true} placerText={"Scale"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">S <small>(note: should be done in "Edit Mode")</small></p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>S followed by (X,Y,Z)</span>} keybindingImgVideo={<video src={ScaleAxis} loop muted playsInline/>} meshOrMenu={true} placerText={"Scale in Specific Axis"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">S followed by (X,Y,Z)</p>
          </div>

        </div>

        <div className="keybindings_section">
          <div>
            <p className="keybind"><PopupText keybindingText={<span>Shift + D</span>} keybindingImgVideo={<video src={Duplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"Duplicate"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Shift + D</p>
          </div>
          <div>
            <p className="keybind"><PopupText keybindingText={<span>Alt + D<br/><small>(should be done in "Object Mode")</small></span>} keybindingImgVideo={<video src={LinkedDuplicate} loop muted playsInline/>} meshOrMenu={true} placerText={"Linked Duplicate"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Alt + D <small>(should be done in "Object Mode")</small></p>
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
            <p className="keybind"><PopupText keybindingText={<span>Ctrl + LMB</span>} keybindingImgVideo={<video src={SelectClicked} loop muted playsInline/>} meshOrMenu={true} placerText={"Select Clicked"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Ctrl + LMB</p>
          </div>


          <div>
            <p className="keybind"><PopupText keybindingText={<span>X</span>} keybindingImgVideo={<video src={Delete} loop muted playsInline/>} meshOrMenu={true} placerText={"Delete"}/></p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">X</p>
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
              <p className="keybind"><PopupText keybindingText={<span>Interaction Mode</span>} keybindingImgVideo={<video src={InteractionMode} loop muted playsInline/>} meshOrMenu={false} placerText={"Interaction Mode"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">change editing node</p>
            </div>
          </div>

          <div className="keybindings_section">
            <div>
              <p className="keybind"><PopupText keybindingText={<span>New Object</span>} keybindingImgVideo={<img src={NewObject}/>} meshOrMenu={false} placerText={"New Object"}/></p>
              <p className="keybind_-">-</p>
              <p className="keybind_desc">create new object</p>
            </div>
          </div>
        </div>

      </div>

  </>
  )




}


export default Keybindings