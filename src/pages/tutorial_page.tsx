import "./tutorial_page.css"
import { useState } from "react";

//import {tempooo, tempVid} from "../../static/constants"


import Navbar from "../components/navbar/navbar";
import Keybindings from "../components/keybindings/keybindings";
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
          <br/>
          <br/>
          Below you will find various keybinds and menu commands. All keybinds can also be selected via a menu or icon somewhere, and most menu options
          have an equivalent keybinding attached to them. I chose which ones are more convient by bind or by menu click below. Though there is a bit of preference in there.
        </p>
      </div>

      <div className="titleSection_container">
        <h1>Blender Tools</h1>
      </div>
      <Keybindings/>

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
      </div>
      



    </div>


    </>
  )
}

export default TutorialPage;