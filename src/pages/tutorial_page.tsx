import "./tutorial_page.css"
import { useState } from "react";

import {zyx_axis} from "../../static/constants"


import Navbar from "../components/navbar/navbar";
import Keybindings from "../components/keybindings/keybindings";
import PopupText from "../components/popupText/popupText";

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
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ipsa, mollitia corporis dolorum sequi molestias accusamus rem vitae cumque nostrum eius qui. Ullam in nihil hic quos distinctio. Ullam, est.</p>
      </div>

      <div className="titleSection_container">
        <h1>Key Bindings</h1>
      </div>
      <Keybindings/>


      <div className="content_container">
        <h2>tempo</h2>
        <small>Manipulating our Objects</small>
        <p>Lorem ipsum, <PopupText meshOrMenu={true} placerText={"dolor"} keybindingText={<span>Numpad . (View → Frame Selected)</span>}/> sit amet <PopupText meshOrMenu={false} placerText={"consectetur"} keybindingText={<img src={zyx_axis}/>}/> adipisicing elit. Ab esse omnis officiis quis aliquid. Corporis earum ab voluptate assumenda minima quibusdam unde tempora quaerat harum id illum placeat, mollitia culpa?</p>
      </div>
      



    </div>


    </>
  )
}

export default TutorialPage;