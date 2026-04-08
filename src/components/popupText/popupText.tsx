

import "./popupText.css"






interface PopupTextProps{
  placerText: string;
  keybindingText: React.ReactNode;
  meshOrMenu: boolean;
}



function PopupText({placerText, keybindingText, meshOrMenu}: PopupTextProps) {
  return(
    <>
      <span className="tooltip_container" style={{backgroundColor: meshOrMenu ? "var(--meshRelated)" : "var(--menuRelated)" }}>
        {placerText}
        <span className="tooltip_text">
          {keybindingText}
        </span>
      </span>
    
    
    </>    
  )
}

export default PopupText