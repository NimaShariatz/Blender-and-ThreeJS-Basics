import { useEffect } from "react";
import { Routes, Route } from "react-router";
import TutorialPage from "./pages/primaryContainer"
import Helix from "./pages/helix";

function App() {
  useEffect(() => {
    document.title = "Blender and ThreeJS";
  }, []);

  return (
    <>
      {/* Define where your components should render based on the URL */}
      <main>
        <Routes>
          <Route path="/" element={<TutorialPage />} />
          <Route path="/Helix" element={<Helix/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App;