import "./tutorial_page.css"
import { useState } from "react";



import Navbar from "../components/navbar/navbar";
import Keybindings from "../components/keybindings/keybindings";
import Blender from "./blender";




function PrimaryContainer() {
  
  const [daySelect, setDaySelect] = useState(1);


  const changeDay = (input: number) => {
    setDaySelect(input)
  }

  
  return (
    <>


    <Navbar daySelect={daySelect} daySelectFunction={changeDay}/>

    <div className="contentSection_container">

      <div className="titleSection_container">
        <h1>Blender Usage</h1>
      </div>
      <Keybindings/>


      {daySelect === 1 &&
        <Blender/>
      }


    </div>


    </>
  )
}

export default PrimaryContainer;