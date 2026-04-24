
Deployment:
yarn add gh-pages

then added `"homepage":"https://nimashariatz.github.io/Blender-and-ThreeJS-Basics/",` to package.json
as well as 
    "predeploy": "npm run build",
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

then did yarn run deploy

Note: moved constants within src/ folder and had to re-do constants so that the assets would show on gh-pages version.
Could have just moved assets to public folder if need be, like Henning currently is.


------------------------------------------------------------------------------------------------------


For home page idea: have a character. a girl named suzie. *waves at the viewer*. She went to the doctor and had trouble x,y,z.
maybe a doctor scene?
then comes our solution to the problem
then suzie happy. seeing the outdoors? hiking?

idea is that we have a story, a character reflective of why our project exists.


------------------------------------------------------------------------------------------------------
Game Idea:

Idea: make a 3d model of eye and iris ring included. Must be highly reflective. Start screen a view of black part of eye and iris ring but angled. Press start and a camera gets back and sees eye flat. some movement from the iris and black bit. zoom into the black bit. camera shifts to a side view. left should have an ambient light that follows us. represents light coming into eye. as we traverse level, ambient intensity reduces. should make use of glow since the level will be black. background items should glow in linear sequence on infinite. very swanky. likely meshPhong!

