
import "./keybindings.css"
import {zyx_axis} from "../../../static/constants"




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
      <small className="mesh_related">Manipulating our Objects</small>

      <div className="keybindings_container">
        <div className="keybindings_section">
          <div>
            <p className="keybind">Move</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">G <small>("Edit Mode" does not move origin point)</small></p>
          </div>
          <div>
            <p className="keybind">Move in Specific Axis</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">G + (X,Y,Z)</p>
          </div>
          <div>
            <p className="keybind">Scale</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">S <small>("Edit Mode" does not move origin point)</small></p>
          </div>
          <div>
            <p className="keybind">Scale in Specific Axis</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">S + (X,Y,Z) <small>(should be in "Edit Mode")</small></p>
          </div>

        </div>

        <div className="keybindings_section">
          <div>
            <p className="keybind">Duplicate</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Shift + D</p>
          </div>
          <div>
            <p className="keybind">Linked Duplicate</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Alt + D <small>(should be in "Object Mode")</small></p>
          </div>
          <div>
            <p className="keybind">Center on</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Numpad . (View → Frame Selected)</p>
          </div>
          <div>
            <p className="keybind">Focus on</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">/</p>
          </div>
          <div>
            <p className="keybind">Change Render</p>
            <p className="keybind_-">-</p>
            <p className="keybind_desc">Z</p>
          </div>
        </div>
      </div>
    </div>



      <div className="content_container">      {/* menu-related content */}
        <h2>Menu-Related Selections</h2>
        <small className="menu_related">Same as mesh-related, just by menu click instead</small>

        <div className="keybindings_container">

        </div>
      </div>

  </>
  )




}


export default Keybindings