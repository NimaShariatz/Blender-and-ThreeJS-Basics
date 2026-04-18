
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

Lighting:
meshBasic has its place: https://unseen-music.com/yume/ https://www.pola.co.jp/special/o/wecaremore/mothersday/ https://chartogne-taillet.com/en tree bit
we can do meshbasic + baking: [localhost with baked scene]
we can do lighting based materials, meshstandard with light and shadows: https://bilal.show/ 
we can do lighting based materials, meshstandard, but without shadows. just for gradience: https://tympanus.net/Tutorials/TheAviator/ [does have shadows on planet, but the rest is fair game]

Our Usage:
meshbbasic [best performance, low complexity] -> https://unseen-music.com/yume/ https://www.pola.co.jp/special/o/wecaremore/mothersday/ https://chartogne-taillet.com/en tree bit
meshstandard almost none/without shadows [meh performance, meh complexity] -> https://tympanus.net/Tutorials/TheAviator/ https://paperplanes.world/ 
worst case can do meshstandard with shadows for moving objects and baking for all the background objects... [meshstandard + meshbasic baking. performance varies, but extreme complexity] -> https://bruno-simon.com/ 


------------------------------------------------------------------------------------------------------


For home page idea: have a character. a girl named suzie. *waves at the viewer*. She went to the doctor and had trouble x,y,z.
maybe a doctor scene?
then comes our solution to the problem
then suzie happy. seeing the outdoors? hiking?

idea is that we have a story, a character reflective of why our project exists.





