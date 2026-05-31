import { OrbitControls, Text } from "@react-three/drei"
import { canvas_example, fibre_syntax, gsap, light_example, meshBasic_flat, meshBasic_withoutFlat, meshStandard_flat, meshStandard_withoutFlat, object_example, r3f, threejs_syntax } from "../constants"

import { Canvas } from '@react-three/fiber'



function ThreeJS(){
  return(
  <>
    <div className="titleSection_container">
      <h1>ThreeJS usage</h1>
    </div>
  

    <div className="content_container">
      <h2>Goal</h2>
      <small>ThreeJS in practice</small>
      <p>
        The best way to learn ThreeJS is to see it in practice. To that end, the focus will be on:
      </p>


      <ul className="unordered_list">
        <li><p>Syntax structure</p></li>
        <li><p>Object rendering</p></li>
        <li><p>Object animation</p></li>
        <li><p>Camera animation</p></li>
        <li><p>Performance considerations and tactics</p></li>
      </ul>


      <p>
        Hence we will learn how this was made: <a target="_blank" href="https://nimashariatz.github.io/threejs_example/">https://nimashariatz.github.io/threejs_example/</a>
      </p>
      
      <div className="media_item_container">
        <iframe src="https://nimashariatz.github.io/threejs_example/"/>
      </div>

      <p>
        But first, lets talk about the various library installations and what they do.
      </p>


    </div>




      <div className="content_container">
        <h2>Libraries</h2>
        <small>Used in the demo</small>
        <p>
          <a target="_blank" href="https://threejs.org/docs/#BoxGeometry">[core] yarn add three@0.169.0</a> - The core JavaScript ThreeJS library. 0.169.0 was installed to avoid a 
          warning for THREE.Clock being depracted (browser console warning). This warning appears when React Fibre is also installed. This is because the React Fibre 
          library was not updated to accommodate this depracation by the ThreeJS team.
          <br/>
          <br/>
          <a target="_blank" href="https://github.com/three-types/three-ts-types">[if using TypeScript] yarn add -D @types/three</a> - Optional but highly recommended since you are using TypeScript in your Vite project. TypeScript definitions for Three.js. The "-D" means its a dev dependency.
          In your case, @types/three just provides TypeScript definitions. It gives you autocomplete, hover documentation, and error checking in VS Code while you write your code. However, the browser doesn't understand TypeScript, so these types are stripped away during the build process and aren't included in the final application bundle that your users download.
          <br/>
          <br/>
          <a target="_blank" href="https://r3f.docs.pmnd.rs/getting-started/introduction">[if using ReactJS] yarn add @react-three/fiber</a> - Optional but highly recommended if you are doing this with ReactJS. 
          The React library that allows you to use ThreeJS via React Components which cuts down on syntax.
          <br/>
          <br/>
          <a target="_blank" href="https://gsap.com/docs/v3/Eases/">[animation] yarn add gsap</a> - Optional but highly recommended if you intend to animate the camera or 
          any objects in your scene. For Choreographed sequences, intro camera sweeps, UI-triggered animations. GSAP is not a ThreeJS library, rather a general animation library whose functons happen to work on ThreeJS as well.
          <br/>
          <br/>
          <a target="_blank" href="https://drei.docs.pmnd.rs/getting-started/introduction">[helpers & effects] yarn add @react-three/drei</a> - Optional but highly recommended to make the 
          development experience easier and potentially use some of the effects. Does need React Fibre. A useful collection of abstractions and helpers for React Three Fiber. Helpers with regards to lights 
          and some special effects.
          <br/>
          <br/>
          <a target="_blank" href="https://github.com/pmndrs/react-postprocessing">[effects] yarn add @react-three/postprocessing</a> - Optional. Has some special effects. Unlikely to be useful, but hey it exists.
          see <a target="_blank" href="https://pmndrs.github.io/postprocessing/public/demo/#antialiasing">this demo</a> for examples.
          <br/>
          <br/>
          <a target="_blank" href="https://github.com/utsuboco/r3f-perf">[performance tracking] yarn add r3f-perf</a> - Optional but highly recommended for keeping track 
          of performance mentrics during the development process. Does require Fibre to function.
        </p>

      </div>

      <div className="content_container">
        <h2>Libraries - Some Chit-Chat</h2>
        <small>Usage</small>
        <p>
          The core library which needs to be installed is Three. This is technically the only library we need and is a JavaScript library. ThreeJS syntax looks like this.
        </p>

        <div className="media_item_container">
          <img src={threejs_syntax}/>
        </div>

        <p>
          There is alot of "default" syntax where sometimes order matters and sometimes it does not. Because it is a JavaScript framework, 
          you can install ThreeJS on many other framework (Django, .NET, Angular, etc...). However since we are using ReactJS, we should install Fibre which heavily 
          cuts down on syntax by using React components as a medium. React Fibre still requires Three to function. This is what it looks like.
        </p>

        <div className="media_item_container">
          <img src={fibre_syntax}/>
        </div>

        <p>
          You can tell without actually understanding the code that the syntax with Fibre is far simpler. The next library worth mentiong is React Perf which 
          lets us track performance metrics during development. Performance is fundamental to development for ThreeJS so that your application is accessable to all and you can't always tell whether a particular 
          series of object or effects is causing large performance drops by simply "eyeballing" it. It looks something like this.
        </p>


        <div className="media_item_container">
          <img src={r3f}/>
        </div>

        <p>
          Various metrics are provided to give an idea of the performance impact your scene or a particular action is having. Generally have the CPUms less than 4 ms
          and the GPUms less than 5ms. Greater values are acceptable but also more dangerous in terms of accessability. The numbers you get for CPUms and GPUms is 
          specific the performance of to your device, so keep in mind devices with lower specs than yours. In addition, mobile devices will always have worse performance. 
          Because it takes greater computational power to render 3D objects than 2D markup, you'll see greater battery drain and the fan on laptops kick in as well. So 
          Keep your performance in mind throughout the process. You will also notice a "Triangles" section. In reality, all objects are made of triangles. This 
          displays the amount being rendered.
        </p>

        <p>
          Next is GSAP. GSAP is not a ThreeJS library, but a general animation whose functions also work in the 3D environment. The syntax looks like this.
        </p>

        <div className="media_item_container">
          <img src={gsap}/>
        </div>

        <p>
          The logic is simple. You can change the color, position or size of an object. Add a duration or delay. Place it in an "if" statement if you wish. 
          And finally add a ease of your choice from . That's it.
        </p>

        <p>
          Next is Drei which has various helpers and functions to use. Using Drei you can import <a target="_blank" href="https://sbcode.net/react-three-fiber/orbit-controls/">{`<OrbitControls/>`}</a>, <a target="_blank" href="https://drei.docs.pmnd.rs/misc/html">{`<Html/>`}</a>, <a target="_blank" href="https://drei.docs.pmnd.rs/abstractions/trail">{`<Trail/>`}</a>, and more. 
          It also has <a target="_blank" href="https://drei.docs.pmnd.rs/gizmos/helper-use-helper">helpers</a> for light positioning. Overall, Drei is recommended.
        </p>

        <p>
          Finally I'll briefly mention the post-processing library which applies <a target="_blank" href="https://pmndrs.github.io/postprocessing/public/demo/#bloom">visual effects</a> to everything. I used it in the code  
          example, but generally it won't be useful to you given it's niche nature, and for the igem wiki we should be conservative with performance.
        </p>

        <p>
          There are a lot more optional libraries that can be installed for different purposes. From Physics to VR control. It's up to you on what you want to use. 
          Just note that heavy libraries like postprocessing does have negative performance consequences. And how you use it 
          will also effect the depth of that performance hit.
        </p>
      </div>





      <div className="content_container">
        <h2><span className="component_syntax">{"<Canvas/>"}</span> - ThreeJS Fibre Syntax</h2>
        <small>Fibre usage</small>

        <p>
          Firstly for Blender you have been used to the x and y planes being horizontal and the z plane being vertical. In ThreeJS this is not the case as the x and z planes are horizontal and the y plane 
          is vertical.
        </p>

        <div className="threejs_container_div">
          <div>
            <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 10 }} >
              <OrbitControls/> {/* Drei */}
            
              <axesHelper args={[4]} />
              
              <Text position={[2, 0, 0]} color="red" fontSize={1}>X</Text>{/* Drei */}
              <Text position={[0, 2, 0]} color="green" fontSize={1}>Y</Text>{/* Drei */}
              <Text position={[0, 0, 2]} color="blue" fontSize={1}>Z</Text>{/* Drei */}

            </Canvas>
          </div>
        </div>

        <p>
          The parent container for ThreeJS is a <span className="component_syntax">{"<Canvas/>"}</span> tag. All ThreeJS content goes inside it. This image
          is the code from the above example.
        </p>

        <div className="media_item_container">
          <img src={canvas_example}/>
        </div>

        <p>
          The Canvas tag can take several variables as input. First, the camera values which define the starting position, rotation, field of view (shoud be between 35° and 75°), and the near and far values 
          which define at what distances objects should be rendered and unrendered (pick your own). Not rendering objects past a certain distance does 
          save on performance. Objects that are not seen through the camera are also not rendered until they come into view so to further save performance. This is a 
          default behaviour.
          <br/>
          <br/>
          You can also define whether your camera is "orthoraphic", so objects that are farther away are not smaller. This is the 
          perspective used on top-down RTS games. Finally, we can apply the "flat" variable which changes color application in scenes.
          This makes <span className="threejs_material_basic">meshBasic</span> and <span className="threejs_material_toon">meshToon</span> objects "pop" more in color, but also makes the color of 
          other materials like <span className="threejs_material_standard">meshStandard</span> more flat.
        </p>

        <p>
          <b><span className="threejs_material_basic">meshBasic</span> with and without flat:</b>
        </p>

        <div className="media_item_container_splitImgs">
          <img src={meshBasic_flat}/>
          <img src={meshBasic_withoutFlat}/>
        </div>

        <p>
          <b><span className="threejs_material_standard">meshStandard</span> with and without flat:</b>
        </p>

        <div className="media_item_container_splitImgs">
          <img src={meshStandard_flat}/>
          <img src={meshStandard_withoutFlat}/>
        </div>
      
      </div>



      <div className="content_container">
        <h2><span className="component_syntax">{"<mesh/>"}</span> - ThreeJS Fibre Syntax</h2>
        <small>Fibre usage</small>

        <p>
          In ThreeJS you can create basic shapes. <a target="_blank" href="https://threejs.org/docs/#BoxGeometry">Cubes</a>, <a target="_blank" href="https://threejs.org/docs/#PlaneGeometry">planes</a>, <a target="_blank" href="https://threejs.org/docs/#TorusKnotGeometry">torus knots</a>, and so much more. 
          Each object has variables specific to it such as size, segments, etc... When an object is created, its material can also  
          be defined. Below is an example and the code used to make it.
        </p>

        <div className="threejs_container_div">
          <div>
            <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 10 }} >
              <OrbitControls/> {/* Drei */}
            
              <mesh>
                <boxGeometry args={[2,2,2]}/>
                <meshBasicMaterial color={"#7bc1ed"} />
              </mesh>

            </Canvas>
          </div>
        </div>

        <div className="media_item_container">
          <img src={object_example}/>
        </div>

        <p>
          Inside a <span className="component_syntax">{"<mesh/>"}</span> tag we declare the type of object and its relevant parameters, as well as 
          what material it is comprised of. In this case it's a cube with input provided for width, height and depth. It is rendered in <span className="threejs_material_basic">meshBasic</span> with a hex of #7bc1ed.
        </p>

      </div>





      <div className="content_container">
        <h2>Lighting - ThreeJS Fibre Syntax</h2>
        <small>Fibre usage</small>

        <p>
          ThreeJS has several types of light you can create. The example below is using a <a target="_blank" href="https://threejs.org/docs/#PointLight">point light</a> with an assigned intensity and color to illuminate a 
          cube rendred in <span className="threejs_material_toon">meshToon</span>. Below is the code used for the demonstration.
        </p>

        <div className="threejs_container_div">
          <div>
            <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 10 }} >
              <OrbitControls/> {/* Drei */}
              <pointLight position={[0, 2, 0]} color={"#fff"} intensity={5}/>
            
              <mesh>
                <boxGeometry args={[2,2,2]}/>
                <meshToonMaterial color={"#7bc1ed"} />
              </mesh>

            </Canvas>
          </div>
        </div>

        <div className="media_item_container">
          <img src={light_example}/>
        </div>

      </div>

      {/* primitive, group, useFrame and GSAP, performance */}
      

  </>
  )

  
}

export default ThreeJS