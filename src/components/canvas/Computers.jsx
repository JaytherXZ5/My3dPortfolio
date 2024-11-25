import React, {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import {Float, OrbitControls, Preload, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <Float speed = {1.75} rotationIntensity ={.3} floatIntensity>
    <ambientLight intensity={0.25} />
    <directionalLight position={[0,0,0.05]} />
    <mesh>
      <hemisphereLight 
        intensity={3}
        decay={0}
        groundColor="black"
        />
      <pointLight intensity={Math.PI}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
      <primitive object={computer.scene}
        scale={isMobile? 0.7 : 0.75}
        position ={isMobile? [0,-3,-2.2] : [0,-3.25, -1.5]}
        rotation={[-0.01, -0.8, -0.1]} 
        />
    </mesh>
    </Float>
  )
}

const ComputersCanvas = ()=>{

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    //lets add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    //Set initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);
    
    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    //Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);
  
    //Remove the Listener when the component os unmounted
    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{position: [20, 3, 5], fov:25}}
      gl={{preserveDrawingBuffer:true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls 
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all/>
      
    </Canvas>
  )
}


export default ComputersCanvas