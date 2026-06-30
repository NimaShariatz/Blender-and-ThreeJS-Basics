import { useEffect } from "react";
import { Routes, Route } from "react-router";
import TutorialPage from "./pages/primaryContainer"
import HelixOne from "./pages/helixOne";

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
          <Route path="/HelixOne" element={<HelixOne/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App;