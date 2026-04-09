import "./tutorial_page.css"
import { useState } from "react";

//import {tempooo, tempVid} from "../../static/constants"


import Navbar from "../components/navbar/navbar";
import Keybindings from "../components/keybindings/keybindings";
import Day1 from "./day_1/day1";
//import PopupText from "../components/popupText/popupText";




function TutorialPage() {
  
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
        <Day1/>
      }


    </div>


    </>
  )
}

export default TutorialPage;