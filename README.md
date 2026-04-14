
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






For home page idea: have a character. a girl named suzie. *waves at the viewer*. She went to the doctor and had trouble x,y,z.
maybe a doctor scene?
then comes our solution to the problem
then suzie happy. seeing the outdoors? hiking?

idea is that we have a story, a character reflective of why our project exists.