import "./helix.css"
import { useRef, useEffect } from "react"
import gsap from 'gsap'
import * as THREE from 'three'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useHelper } from "@react-three/drei"


const DEG_STEP = 5 //makes life easier

const rodList = [
  // Segment 1: #5500BB (deep purple) → #E02870 (hot pink)
  { id: 1,  position: [-7,    0, 0], rotation: [THREE.MathUtils.degToRad(90 -  0 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#5500BB" },
  { id: 2,  position: [-6.73, 0, 0], rotation: [THREE.MathUtils.degToRad(90 -  1 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#6404B3" },
  { id: 3,  position: [-6.46, 0, 0], rotation: [THREE.MathUtils.degToRad(90 -  2 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#7409AA" },
  { id: 4,  position: [-6.19, 0, 0], rotation: [THREE.MathUtils.degToRad(90 -  3 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#830DA2" },
  { id: 5,  position: [-5.92, 0, 0], rotation: [THREE.MathUtils.degToRad(90 -  4 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#93129A" },
  { id: 6,  position: [-5.65, 0, 0], rotation: [THREE.MathUtils.degToRad(90 -  5 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#A21691" },
  { id: 7,  position: [-5.38, 0, 0], rotation: [THREE.MathUtils.degToRad(90 -  6 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#B21B89" },
  { id: 8,  position: [-5.11, 0, 0], rotation: [THREE.MathUtils.degToRad(90 -  7 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C11F81" },
  { id: 9,  position: [-4.84, 0, 0], rotation: [THREE.MathUtils.degToRad(90 -  8 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D12478" },
  { id: 10, position: [-4.57, 0, 0], rotation: [THREE.MathUtils.degToRad(90 -  9 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#E02870" },
  // Segment 2: #E02870 (hot pink) → #D83820 (orange-red)
  { id: 11, position: [-4.30, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 10 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#E02870" },
  { id: 12, position: [-4.03, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 11 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DF2A67" },
  { id: 13, position: [-3.76, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 12 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DE2C5E" },
  { id: 14, position: [-3.49, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 13 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DD2D55" },
  { id: 15, position: [-3.22, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 14 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DC2F4C" },
  { id: 16, position: [-2.95, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 15 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DC3144" },
  { id: 17, position: [-2.68, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 16 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DB333B" },
  { id: 18, position: [-2.41, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 17 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DA3432" },
  { id: 19, position: [-2.14, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 18 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D93629" },
  { id: 20, position: [-1.87, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 19 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D83820" },
  // Segment 3: #C22724 → #E28143
  { id: 21, position: [-1.60, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 20 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C22724" },
  { id: 22, position: [-1.33, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 21 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C63127" },
  { id: 23, position: [-1.06, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 22 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C93B2B" },
  { id: 24, position: [-0.79, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 23 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#CD452E" },
  { id: 25, position: [-0.52, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 24 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D04F32" },
  { id: 26, position: [-0.25, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 25 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D45935" },
  { id: 27, position: [ 0.02, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 26 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D76339" },
  { id: 28, position: [ 0.29, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 27 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DB6D3C" },
  { id: 29, position: [ 0.56, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 28 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DE7740" },
  { id: 30, position: [ 0.83, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 29 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#E28143" },
  // Segment 4: #E28143 → #DE9F79
  { id: 31, position: [ 1.10, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 30 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#E28143" },
  { id: 32, position: [ 1.37, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 31 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#E28449" },
  { id: 33, position: [ 1.64, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 32 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#E1884F" },
  { id: 34, position: [ 1.91, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 33 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#E18B55" },
  { id: 35, position: [ 2.18, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 34 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#E08E5B" },
  { id: 36, position: [ 2.45, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 35 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#E09261" },
  { id: 37, position: [ 2.72, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 36 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DF9567" },
  { id: 38, position: [ 2.99, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 37 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DF986D" },
  { id: 39, position: [ 3.26, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 38 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DE9C73" },
  { id: 40, position: [ 3.53, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 39 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DE9F79" },
  // Segment 5: #DE9F79 → #D3B9A9
  { id: 41, position: [ 3.80, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 40 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DE9F79" },
  { id: 42, position: [ 4.07, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 41 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DDA27E" },
  { id: 43, position: [ 4.34, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 42 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DCA584" },
  { id: 44, position: [ 4.61, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 43 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#DAA889" },
  { id: 45, position: [ 4.88, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 44 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D9AB8E" },
  { id: 46, position: [ 5.15, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 45 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D8AD94" },
  { id: 47, position: [ 5.42, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 46 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D7B099" },
  { id: 48, position: [ 5.69, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 47 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D5B39E" },
  { id: 49, position: [ 5.96, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 48 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D4B6A4" },
  { id: 50, position: [ 6.23, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 49 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D3B9A9" },
  // Segment 6: #D3B9A9 → #C8B6B0
  { id: 51, position: [ 6.50, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 50 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D3B9A9" },
  { id: 52, position: [ 6.77, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 51 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D2B9AA" },
  { id: 53, position: [ 7.04, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 52 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#D1B8AB" },
  { id: 54, position: [ 7.31, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 53 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#CFB8AB" },
  { id: 55, position: [ 7.58, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 54 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#CEB8AC" },
  { id: 56, position: [ 7.85, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 55 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#CDB7AD" },
  { id: 57, position: [ 8.12, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 56 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#CCB7AE" },
  { id: 58, position: [ 8.39, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 57 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#CAB7AE" },
  { id: 59, position: [ 8.66, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 58 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C9B6AF" },
  { id: 60, position: [ 8.93, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 59 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C8B6B0" },
  // Segment 7: #C8B6B0 → #BEB4B2
  { id: 61, position: [ 9.20, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 60 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C8B6B0" },
  { id: 62, position: [ 9.47, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 61 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C7B6B0" },
  { id: 63, position: [ 9.74, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 62 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C6B6B0" },
  { id: 64, position: [10.01, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 63 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C5B5B1" },
  { id: 65, position: [10.28, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 64 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C4B5B1" },
  { id: 66, position: [10.55, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 65 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C2B5B1" },
  { id: 67, position: [10.82, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 66 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C1B5B1" },
  { id: 68, position: [11.09, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 67 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#C0B4B2" },
  { id: 69, position: [11.36, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 68 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#BFB4B2" },
  { id: 70, position: [11.63, 0, 0], rotation: [THREE.MathUtils.degToRad(90 - 69 * DEG_STEP), 0, 0], arg_values: [0.13, 0.13, 3], color: "#BEB4B2" },
]



function Helix() {
  return (
    <div className="helix_div">
      <Canvas camera={{ position: [-0.3, 0, 3], rotation: [0, 0, THREE.MathUtils.degToRad(45)], fov: 50, near: 0.1, far: 10 }}>
        <Scene />
      </Canvas>
    </div>
  )
}


function Scene() {
  const pointLightHelper = useRef<THREE.PointLight>(null!);
  useHelper(pointLightHelper, THREE.PointLightHelper, 0.2, 'teal');
  

  const rodGroup = useRef<THREE.Group>(null);

  const {camera} = useThree()

    useEffect(() => {
      gsap.to(camera.position, {
        x:-0.3,
        y:0,
        z:6,
        duration: 5,
        delay: 1,
        ease: "power1.inOut",
      })

      gsap.to(camera.rotation, {
        x:0,
        y:0,
        z:0,
        duration: 3,
        delay: 1,
        ease: "power1.inOut",
      })
    },[camera.position, camera.rotation])//useEffect - fires on startup

   useFrame((_state, delta) => {
    if(rodGroup.current){
      rodGroup.current.rotation.x += delta * 0.3
    }
   })//useFrame

  return (
    <>
      {/*<OrbitControls/>*/}
      <color args={['#C9BEBE']} attach="background" />

      <ambientLight intensity={2} color={"#fff"}/>
      <pointLight ref={pointLightHelper} color={"#ffffff"} intensity={5} position={[-2, 0, 5]}/>

      <group ref={rodGroup} position={[0, 0, 0]}>
        {rodList.map((rod) => (
          <mesh key={rod.id} rotation={rod.rotation as [number, number, number]} position={rod.position as [number, number, number]}>
            <cylinderGeometry args={rod.arg_values as [number, number, number]}/>
            <meshPhongMaterial color={rod.color} shininess={20} specular={"#ffffff"} />
          </mesh>
        ))}
      </group>
    </>
  )
}




export default Helix