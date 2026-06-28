import {useRef}  from "react";
import * as THREE from 'three'
import {useFrame} from '@react-three/fiber'




function RotatingCity({ model }: { model: THREE.Object3D }) {// input object rotates using useFrame()
  //const primitive_group = useRef<THREE.Group>(null); //useRef for a <group/> if you are curious.

  const primitive = useRef<THREE.Object3D>(null);
  
  useFrame((_state, delta) => {
    if(primitive.current){
      primitive.current.rotation.y += delta * 0.2
    }
  });

  return (
    <primitive
      object={model}
      scale={0.6}
    />
  );
  
}

export default RotatingCity