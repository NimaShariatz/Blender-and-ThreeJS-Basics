import { OrbitControls, Text, useGLTF } from "@react-three/drei"
import { canvas_example, code_carKnots, code_carLights, code_conditionalRender, code_moonReturn, code_mountReturn, code_stateTracker, conditionalRender_example, example_filestructure, fibre_syntax, glsl_example, group_example, gsap, gsap_example, light_example, meshBasic_flat, meshBasic_withoutFlat, meshStandard_flat, meshStandard_withoutFlat, object_example, primitive_example, primitive_model, primitive_model2, r3f, threejs_syntax, useframe_1, useframe_2 } from "../constants"

import { Canvas, useFrame } from '@react-three/fiber'
import {useRef}  from "react";
import * as THREE from 'three'


function RotatingCity({ model }: { model: THREE.Object3D }) {// just to make input object rotate using useFrame()
  const primitive_group = useRef<THREE.Group>(null);
  
  useFrame((_state, delta) => {
    if(primitive_group.current){
      primitive_group.current.rotation.y += delta * 0.2
    }
  });

  return (
    <group ref={primitive_group} position={[0, 0, 0]}>
      <primitive
        object={model}
        scale={0.6}
      />
    </group>
  );
}




function ThreeJS(){
  
  const city_model = useGLTF(primitive_model)
  const city_model2 = useGLTF(primitive_model2)

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
        And finally add a ease of your choice from <a target="_blank" href="https://gsap.com/docs/v3/Eases/">GSAP's selection</a>.
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
        The parent container for ThreeJS is a <span className="component_syntax">{"<Canvas/>"}</span> tag. All ThreeJS content goes inside it. The image
        below is the code from the above example. Note the use of <span className="component_syntax">{"<OrbitContros/>"}</span> from Drei which allows 
        us to rotate the camera. The way this works is that the camera can be moved by the user and will always look at position (0, 0, 0) which is where our object happens to be.
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
        This makes <span className="threejs_material_basic">meshBasic</span> objects "pop" more in color, but also makes the colors of 
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
        ThreeJS has several types of light you can create. The example below is using a <a target="_blank" href="https://threejs.org/docs/#PointLight">point light</a> with an assigned "intensity" and "color" to illuminate a 
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

    
    <div className="content_container">
      <h2><span className="component_syntax">{"<primitive/>"}</span> - ThreeJS Fibre Syntax</h2>
      <small>Fibre usage</small>

      <p>
        A <span className="component_syntax">{"<primitive/>"}</span> is what is used for rendering .glb files. In a <span className="component_syntax">{"<primitive/>"}</span> we 
        attack the model, define the scale (a multiplier), and position. The default material is <span className="threejs_material_standard">meshStandard</span>. If we want 
        to change the material to anything else, it is done by TypeScript logic (to be seen later). You can also set the 
        background color of the <span className="component_syntax">{"<Canvas/>"}</span> with <span className="component_syntax">{"<color/>"}</span>. Otherwise 
        the default is transparent (as evident in previous examples).
      </p>

      <div className="threejs_container_div">
        <div>
          <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 50 }} >
            <OrbitControls/> {/* Drei */}
            <pointLight position={[0, 4, 0]} color={"#fff"} intensity={50}/>
          
            <color args={ [ '#1E88E5' ] } attach="background" /> {/* sets background color */}

            <primitive
              object={city_model.scene}
              scale={0.6}
              position={[0, 0, 0]}
            />

          </Canvas>
        </div>
      </div>


      <div className="media_item_container">
        <img src={primitive_example}/>
      </div>

      <p>
        Sidenote: You can use scale for setting the size of <span className="component_syntax">{"<mesh/>"}</span> objects as well, 
        but it's considered best practice to use args for setting the size of a <span className="component_syntax">{"<mesh/>"}</span> and reserve scale for size changes made by animation.
      </p>
    
    </div>


    <div className="content_container">
      <h2><span className="component_syntax">{"<group/>"}</span> - ThreeJS Fibre Syntax</h2>
      <small>Fibre usage</small>

      <p>
        <span className="component_syntax">{"<group/>"}</span> exists as an organizational tool. within the <span className="component_syntax">{"<group/>"}</span> tags you can 
        place <span className="component_syntax">{"<mesh/>"}</span> objects, lights, and <span className="component_syntax">{"<primitive/>"}</span> objects. You can then move all of the objects together
        by changing the position of the <span className="component_syntax">{"<group/>"}</span> itself.
      </p>


      <div className="threejs_container_div">
        <div>
          <Canvas camera={{ position: [0, 0, 4], fov: 75, near: 0.1, far: 50 }} >
            <color args={ [ '#1E88E5' ] } attach="background" />

            <group position={[0, -0.2, 0]}> {/* a container which holds all the stuff below */}
              <pointLight position={[0, 4, 0]} color={"#fff"} intensity={50}/>
            

              <mesh position={[1, 1, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={"#7bed9f"} />
              </mesh>

              <mesh position={[0, -1, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={"#7bc1ed"} />
              </mesh>

              <mesh position={[-1, 1, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={"#ed907b"} />
              </mesh>
            </group>

          </Canvas>
        </div>
      </div>


      <div className="media_item_container">
        <img src={group_example}/>
      </div>

      <p>
        Overall, containers are a tool of convenience.
      </p>



    </div>





    
    <div className="content_container">
      <h2>UseFrame() and GSAP - ThreeJS Fibre Syntax</h2>
      <small>Fibre usage</small>
      <p>
      UseFrame() is a function from fibre which fires on every frame render. So if your computer is rendering the scene in 60fps, then it is firing 60 times a second. Or less 
      if your device is struggling and getting lower fps. UseFrame() is useful for moving or rotating objects constantly. You can move <span className="component_syntax">{"<mesh/>"}</span>, 
      <span className="component_syntax">{"<primitive/>"}</span>, lights, or a <span className="component_syntax">{"<group/>"}</span> itself. 
      </p>


      <div className="threejs_container_div">
        <div>
          <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 50 }} >
            <OrbitControls/> {/* Drei */}
            <pointLight position={[0, 4, 0]} color={"#fff"} intensity={50}/>
          
            <color args={ [ '#1E88E5' ] } attach="background" /> {/* sets background color */}

            <RotatingCity model={city_model2.scene} /> {/* RotatingCity() */}

          </Canvas>
        </div>
      </div>

      <div className="media_item_container_splitImgs">
        <img src={useframe_2}/>
        <img src={useframe_1}/>
      </div>

      <p>
        Unlike useFrame(), GSAP is triggered on command. GSAP performs a similar function to useFrame(), but allows you to include an ease transition from <a target="_blank" href="https://gsap.com/docs/v3/Eases/">GSAP's selection</a>. The 
        syntax is very simple and works on both tranditional markup and ThreeJS objects. You can animate any object (camera included) and parameter: position, rotation, color, scale, etc... The following is 
        a snippet that shows the structure. The "OnComplete()" is optional.
      </p>

      <div className="media_item_container">
        <img src={gsap_example}/>
      </div>

      <p>
        Use useFrame() for: continuous environmental effects (e.g., spinning a planet infinitely), or having an object instantly follow the mouse cursor dynamically.
        <br/>
        <br/>
        Use GSAP for: choreographed sequences, intro camera sweeps, UI-triggered animations, and scrollytelling.

      </p>

    </div>



    <div className="content_container">
      <h2>ThreeJS Performance</h2>
      <small>Things to keep in mind</small>

      <p>
        What material you choose to render your objects and how many objects you have can hit performance. Light sources (and any shadows if you choose to include them) also hurt performance, hence 
        why <span className="threejs_material_basic">meshBasic</span> is the best in terms of performance. However, there are some common practices you should be aware of.
        <br/>
        <br/>
        <b>1 - Do not recklessly destroy light sources and objects</b> 
        <br/>
        Destroying or adding existing objects and light sources frees up RAM/VRAM and performance. But it also forces a recompile of a whole scene. This 
        is an expensive operation on the CPU and results in a noticeable stutter or frame drop (a "hiccup" or freeze). If you want to make a light source go away, set the "intensity" to 0 or "visible" to false. This still saves on performance 
        as it no longer contributes to the lighting caculations, thereby saving CPU performance, just not VRAM/RAM. As for objects like <span className="component_syntax">{"<mesh/>"}</span> and 
        <span className="component_syntax">{"<primitive/>"}</span>, setting the "visible" prop to false will also save on performance, just not VRAM/RAM. It is worth mentioning 
        we are working with small low-poly models so whatever RAM/VRAM that is being taken up is not large.
        <br/>
        <br/>
        <b>2 - Be careful with conditional rendering</b>
        <br/>
        Conditional rendering is when a component or markup is rendered when a condition is true.
        <br/>
        <br/>
      </p>

      <div className="media_item_container">
        <img src={conditionalRender_example}/>
      </div>

      <p>
        Conditionally rendering your content does save on both performance and RAM/VRAM. Even if we do not see the objects being conditionally rendered, removing 
        them saves resources by not running the TypeScript logic related to the scene such as the useFrame()'s and not having the objects take up RAM/VRAM storage. 
        This is unlike setting the "visible" prop to false or setting the light source "intensity" to 0 which just saves performance by not rendering it. 
        <br/>
        <br/>
        However, by using conditional rendering we are destroying lights and objects. This will cause a noticeable stutter or frame drop (a "hiccup" or freeze). 
        So conditional rendering should be used carfully, where it is pertinent.
        <br/>
        <br/>
        <b>Summary</b>
        <br/>
      </p>

      <ul className="unordered_list">
        <li><p>Objects not seen by the camera are not rendered, thereby saving FPS</p></li>
        <li><p>Destroying or suddenly adding lights and objects is expensive on the CPU and causes major sudden FPS drops</p></li>
        <li><p>{"visible={false}"}<sub>(objects and lights)</sub> - saves FPS - no lag on change</p></li>
        <li><p>{"Intensity={0}"}<sub>(light sources only)</sub> - saves FPS - no lag on change</p></li>
        <li><p>Conditional Rendering - saves FPS, any useFrame()'s removed, and saves RAM/VRAM - can cause a stutter as models, light sources are destroyed and added</p></li>
      </ul>

    </div>

    <div className="content_container">
      <h2> File Structure - ThreeJS Example</h2>
      <small>The general layout</small>

      <p>
        To run the example locally, do "git clone https://github.com/NimaShariatz/threejs_example.git" followed by "cd threejs_example" then "yarn install" and "yarn run dev".
      </p>

      <div className="content_container_divide">
        <p>
          To the right is the file structure of the project. Scenes were split up to better organize the code, and to make use of conditional rendering. useFrame() is used for 
          moonScene.tsx, starStreak.tsx, and carScene.tsx. GSAP is used in nearly all files for camera animation, color animation, and scale. 
        </p>
        <img src={example_filestructure} />
      </div>

    </div>


    <div className="content_container">
      <h2> App.tsx - ThreeJS Example</h2>
      <small>The parent</small>

      <div className="content_container_divide">
        <p>
          App.tsx has a hook called sectionTracker used for internal state tracking. Specifically firing GSAP animations in sequence, and conditionally rendering components.
        </p>

        <img src={code_stateTracker} />
      </div>

      <div className="content_container_divide">
        <p>
          Each component is rendered when it's boolean statement is activated. When a component is removed or added, all it's <span className="component_syntax">{"<mesh/>"}</span>, <span className="component_syntax">{"<primitive/>"}</span>, 
          and lights are destroyed or created. As expected, there is a noticable stutter that occurs when this happens. But it is mitigated by transitions that 
          somewhat masks the stutter.

          <br/>
          <br/>

          When a component is removed, objects are removed from the render saving performance. Any TypeScript logic inside them such as useFrame()'s are removed 
          thereby saving a bit more performance. And finally RAM/VRAM is saved as well.
        </p>
        <img src={code_conditionalRender} />
      </div>
    </div>


    <div className="content_container">
      <h2> mountainScene.tsx - ThreeJS Example</h2>
      <small>Animating colors and camera</small>
      
      <div className="content_container_divide">
        <p>
          A <span className="component_syntax">{"<group/>"}</span> holds both the <span className="component_syntax">{"<primitive/>"}</span> and a <span className="component_syntax">{"</Html>"}</span>. The <span className="component_syntax">{"<primitive/>"}</span> is for the mountain .glb file.
          The <span className="component_syntax">{"</Html>"}</span> is an import from Drei which allows you to place markup in a container within a container. You 
          declare the position, size, classNamme, and behind what objects the container should dissappear behind.
        </p>

        <img src={code_mountReturn} />
      </div>

      <p>
        Above is a useEffect() that is triggered by any changes to sectionTracker. Inside is a series of 'if' statements that set the color for the mountains and 
        the background. At the start, the color of the mountains is set by code to a series of yellows by a 'for' loop. It finds each object in mountains.glb 
        and assigns it a color. It also sets the material of each object as <span className="threejs_material_basic">meshBasic</span>. Remember the default is always <span className="threejs_material_standard">meshStandard</span>.
        The animation work on both the camera and color change to the background and mountain objects is all done by GSAP. 
      </p>

      <p>
        The star of the show here is the 'for' statements that assign colors and GSAP that turns it into an animated transition. It's also by a 'for' statement that you can assign 
        other values like opacity, or whatever else relevant to that particular material (e.g, <span className="threejs_material_standard">meshStandard</span> has metallic and roughness as well).
      </p>
  
    </div>

    <div className="content_container">
      <h2> moonScene.tsx - ThreeJS Example</h2>
      <small>Making use of useFrame()</small>

      <div className="content_container_divide">
        <p>
          The content is in a <span className="component_syntax">{"<group/>"}</span> container. No .glb models are are used, just basic shapes from ThreeJS 
          and Drei. The moon is a sphere that makes use of <span className="component_syntax">{"<EffectComposer/>"}</span> from the postprocessing library for giving that glow effect. 
          <span className="component_syntax">{"<Sparkles/>"}</span> from Drei is used for the stars. As for the streaks, each is a sphere 
          that makes use of a <span className="component_syntax">{"<Trail/>"}</span> from Drei. Finally <span className="component_syntax">{"<StarStreak/>"}</span> 
          is starStreak.tsx which is effectively the same as the single instance of a star we have here. The star streaks were componentized for organizational purposes.
        </p>

        <img src={code_moonReturn} />
      </div>

      <p>
        Once again, a useEffect() has a series of 'if' statements that trigger GSAP transitions. From camera, to background to color and scale. This is our 
        first instance of useFrame(), a function that triggers on every frame render. This instance is used explicity for animating the star that comes towards and past the camera. Note that delta is used 
        in the movement calculations. This is to account for the fact that objects would travel at different speeds based on the FPS of the device. E.g, 
        without delta, the stars at an FPS of say 165 would travel faster than at 60FPS.
        <br/>
        <br/>
        The movement of the other stars is also by useFrame(), rather the code for each is stored inside their relative component (starStreak.tsx).
      </p>
    </div>

    <div className="content_container">
      <h2> carScene.tsx - ThreeJS Example</h2>
      <small><span className="component_syntax">{"<OrbitControls/>"}</span>, lights, and more of the same</small>
      <p>
        carScene.tsx has two .glb models being rendered in their default <span className="threejs_material_standard">meshStandard</span> material. Structurally carScene is the same as the other components, a useEffect() with a series of 'if' statements that trigger GSAP animations.
        The differences being <span className="component_syntax">{"<OrbitControls/>"}</span> from Drei which focuses the camera to the position (0, 0, 0) and allows the user 
        to rotate and zoom the camera by mouse. It's worth mentioning it forces the camera to look this position, not any particular object. Our objects are placed 
        at a location of (0, 0, 0) which is where mountains used to be but is no longer rendered thanks to componentization in app.tsx. 
        <br/>
        <br/>
        The starting opacity effect comes from a 'for' statement that triggers a GSAP opacity effect to each object in "./carscene_Dracco.glb". A useFrame() is used 
        to make the <span className="component_syntax">{"<primitive/>"}</span> rotate infinitely. 
      </p>



      <div className="content_container_divide">
        <p>
          This is the first instance of lights being used. You several different types to choose from. Each needs a position, intensity and color. Some have more props. 
          Just like objects, you can animate their values with GSAP. Notably useHelper() from Drei was used to give an outline for <span className="component_syntax">{"<pointLight/>"}</span> and 
          <span className="component_syntax">{"<spotLight/>"}</span>
        </p>

        <img src={code_carLights} />
      </div>


      <div className="content_container_divide">
        <p>
          Next are the <span className="component_syntax">{"<torusKnotGeometry/>"}</span> ThreeJS <span className="component_syntax">{"<mesh/>"}</span> objects which are being rendered in a 'for' statement from a list.
          The takeaways from this is that you can render objects through a list, and you can turn on the wireframe for an object as well. There is little 
          practical use for this, rather it can be used stylistically. The knots are rotating thanks to the useFrame() rotating the <span className="component_syntax">{"<group/>"}</span> 
          that they are in. They also float up and down thanks to <span className="component_syntax">{"<Float/>"}</span> which comes from Drei.
          <br/>
          <br/>
          The <span className="component_syntax">{"<mesh/>"}</span> spheres are also being rendered in a 'for' statement from a list. The only unique aspect with them is that they are <span className="threejs_material_toon">meshToon</span>.
        </p>

        <img src={code_carKnots} />
      </div>

      <p>
        A <span className="component_syntax">{"<mesh/>"}</span> cube is rendered in <span className="threejs_material_toon">meshToon</span> as well. What makes it unique is that it has a pointerEvent() attached to it. if 
        you click on it, it randomly changes color. The takeway is that you can attach various pointer events to 3D objects and trigger effects.
        <br/>
        <br/>
        Finally, note the use of the "visible" prop which can be used on any object or light source. In this case it was used to hide or reveal various 
        objects, and the <span className="component_syntax">{"<spotLight/>"}</span>. Using "visible" does save performance on the basis that the object 
        is not being rendered. Though behind the scenes the useFrame() in carScene.tsx is still firing and RAM/VRAM is still being taken up (unlike conditional rendering).
      </p>

    </div>


    <div className="content_container">
      <h2>What Was Not Seen</h2>
      <small>Shadows and Shaders</small>
      <p>
        By now you have a fair feeling on how ThreeJS with Fibre works and how helpful GSAP and Drei are. Postprocessing was included in moonScene.tsx just to show that many other libraries exist. 
        We looked:
      </p>

      <ul className="unordered_list">
        <li>Rendering <span className="component_syntax">{"<mesh/>"}</span> and <span className="component_syntax">{"<primitive/>"}</span> objects</li>
        <li>Creating lights</li>
        <li>useFrame() and GSAP for animation of objects, lights, and camera</li>
        <li>Performance considerations: rendering conditionally, material and light destruction, unseen objects not being rendered </li>
      </ul>

      <p>
        It's safe to say you are not comfortable with them as this is not a code-along tutorial. However, you can agree that thanks to Fibre, GSAP, and Drei, it's now 
        a question of time than feasibility. It's worth mentioning that chatbots are very helpful for development because the syntax is now so simple. Don't be afraid to use them as now 
        you can understand their output and the context.
        <br/>
        <br/>
        We did not touch on everything. There are two ThreeJS topics you have yet to see an example of.
        <br/>
        <br/>
        <b>1 - Shadows</b>
        <br/>
          You did not see any implimentation of shadows in carScene.tsx. Just like lights, shadows are another source of performance degradation. They are 
          also not a requirement to making a good scene. We have a sound reason to skip them.
        <br/>
        <br/>
        <b>2 - Shaders</b>
        <br/>
        
        A cup of coffee is hot. How do you show it's hot? Condensation rising is the solution. So how do you make that coffee smoke effect? How do you create pulse wave? How 
        do you create a raging sea or fireworks? A shader is a main component of WebGL (what ThreeJS is an abstraction of). A shader is a program written in GLSL that is sent to the GPU. They are used to position each vertex of a geometry and to colorize each visible pixel of that geometry. 
        This is very handy but the issue is that the code is very low-level. It looks like this.
      </p>


      <div className="media_item_container">
        <img src={glsl_example}/>
      </div>

      <p>
        It's not easy to learn as you are writing code that directly speaks to the GPU. For our use-case of ThreeJS, it's not feasible. Though it is very performant.
        <br/>
        <br/>
        By now you have a reasonable grasp of the 3D world for web development. Next is the hardest part: what can I make with it? As a 
        final source of example code, this is my personal profile page and its repo. It uses everything mentioned in this tutorial except for condtional rendering as there 
        was no use-case for it.
        <br/>
        Live instance: <a target="_blank" href="https://nimashariatz.github.io/portfolio-page/">https://nimashariatz.github.io/portfolio-page/</a>
        <br/>
        Repo: <a target="_blank" href="https://github.com/NimaShariatz/portfolio-page">https://github.com/NimaShariatz/portfolio-page</a> 

      </p>

    </div>


  </>
  )

  
}

export default ThreeJS