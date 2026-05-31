import "./tutorial_page.css"
import { useState } from "react";



import Navbar from "../components/navbar/navbar";
import Keybindings from "../components/keybindings/keybindings";
import Blender from "./blender";
import ThreeJS from "./threejs";




function PrimaryContainer() {
  
  const [daySelect, setDaySelect] = useState(2);


  const changeDay = (input: number) => {
    setDaySelect(input)
  }

  
  return (
    <>


    <Navbar daySelect={daySelect} daySelectFunction={changeDay}/>

    <div className="contentSection_container">

      {daySelect === 1 &&
        <Keybindings/>
      }

      {daySelect === 1 &&
        <Blender/>
      }

      {daySelect === 2 &&
        <ThreeJS/>
      }
      






    </div>


    </>
  )
}

export default PrimaryContainer;