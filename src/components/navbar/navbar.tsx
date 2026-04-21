import "./navbar.css"


interface NavbarProps{
  daySelect: number;
  daySelectFunction: (input: number) => void;
}



function Navbar({daySelect, daySelectFunction}: NavbarProps) {
  

  
  return (
    <div className="dayPicker_container">

      <button onClick={ ()=> daySelectFunction(1)} style={{ backgroundColor: (daySelect==1) ? "var(--yellow)" : "transparent", opacity: (daySelect!=1) ? "0.35" : "1" }}>
        Blender Model
      </button>
      <button onClick={ ()=> daySelectFunction(2)} style={{ backgroundColor: (daySelect==2) ? "var(--yellow)" : "transparent", opacity: (daySelect!=2) ? "0.35" : "1" }}>
        ThreeJS Setup
      </button>



    </div>
  )
}

export default Navbar;