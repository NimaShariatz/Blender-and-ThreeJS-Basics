
Deployment:
yarn add gh-pages

then added `"homepage":"https://nimashariatz.github.io/Blender-and-ThreeJS-Basics/",` to package.json
as well as 
    "predeploy": "yarn run build", <--------------- I AM USING YARN! SWITCH TO "npm" if desired
    "deploy": "gh-pages -d dist"

Then changes vite.config to be this(note: may notice this is different from henning. Henning uses react-router-dom which uses
BrowserRouter in main.tsx...):
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use the repo name for GitHub Pages build, but use '/' for local development
  base: command === 'build' ? '/Blender-and-ThreeJS-Basics/' : '/',
  build: {
    outDir: 'dist'
  }
}))

Then added "<BrowserRouter basename={import.meta.env.BASE_URL}>" to main.tsx

then did yarn run deploy

Note: moved constants within src/ folder and had to re-do constants so that the assets would show on gh-pages version.
Could have just moved assets to public folder if need be, like Henning currently is.


------------------------------------------------------------------------------------------------------




Yhaving multiple <Canvas> tags will significantly hurt performance.

Here is why:

WebGL Contexts: Each <Canvas> component creates its own separate WebGL rendering context. WebGL contexts are heavy and use a considerable amount of memory and GPU resources.

Browser Limits: Browsers have a hard limit on how many active WebGL contexts can exist on a single page at the same time (often around 8 to 16). If you exceed this limit, older contexts will forcefully drop, causing those canvases to go blank.

Multiple Render Loops: Each <Canvas> runs its own internal requestAnimationFrame loop, competing for CPU time.

The Solution:
If you need to display multiple 3D scenes on the same scrollable page (like in a tutorial or product showcase), you should use the <View> component from @react-three/drei.

<View> allows you to render multiple different 3D scenes using only one single underlying <Canvas> and one WebGL context, making it extremely performant.

Here is a basic example of how it works:






import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'

function App() {
  return (
    <main>
      {/* These act as HTML placeholders for your 3D scenes */}
      <div className="view-container-1">
        <View>
          <mesh><boxGeometry /></mesh>
        </View>
      </div>

      <div className="view-container-2">
        <View>
          <mesh><sphereGeometry /></mesh>
        </View>
      </div>

      {/* A single Canvas rendered absolutely over the page handles all Views */}
      <Canvas eventSource={document.getElementById('root')} className="fixed-canvas">
        <View.Port />
      </Canvas>
    </main>
  )
}

