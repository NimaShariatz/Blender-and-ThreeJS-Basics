
Deployment:
yarn add gh-pages
then added `"homepage":"https://nimashariatz.github.io/Blender-and-ThreeJS-Basics/",` to package.json
as well as 
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
Then changes vite.config to be this:
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist'
  }
})
then did yarn run deploy





For home page idea: have a character. a girl named suzie. *waves at the viewer*. She went to the doctor and had trouble x,y,z.
maybe a doctor scene?
then comes our solution to the problem
then suzie happy. seeing the outdoors? hiking?

idea is that we have a story, a character reflective of why our project exists.