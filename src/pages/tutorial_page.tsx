import "./tutorial_page.css"
import { useState } from "react";


import Navbar from "../components/navbar/navbar";
import Keybindings from "../components/keybindings/keybindings";

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
      



    </div>


    </>
  )
}

export default TutorialPage;