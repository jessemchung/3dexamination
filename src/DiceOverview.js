import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { Physics, useBox, usePlane, useSphere } from 'use-cannon'
import niceColors from 'nice-color-palettes'
import './styles.css'
import { useConvexPolyhedron } from 'use-cannon';
import { Octahedron } from 'drei';
import D8 from './D8.js'



const DiceOverview = (props) => {
  var cheese;
  console.log('trigger check');
  const [dice, setDice] = useState([0]);
  console.log(dice, 'something odd');
  //radius and the rest are all passed in so likely radius adjusts these values.

  useEffect(() => {
    console.log('adskfhalkfhw');
  }, [dice]);


  function Plane({ color, ...props }) {
    const [ref] = usePlane(() => ({ ...props }))
    return (
      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color={color} />
      </mesh>
    )
  }


  function Box() {
    const [ref, api] = useBox(() => ({ mass: 1, args: [4, 4, 4], isKinematic: true }))
    useFrame(state => {
      const t = state.clock.getElapsedTime()
      api.position.set(Math.sin(t * 2) * 5, Math.cos(t * 2) * 5, 3)
      api.rotation.set(Math.sin(t * 6), Math.cos(t * 6), 0)
    })
    return (
      <mesh ref={ref} castShadow receiveShadow>
        <boxBufferGeometry attach="geometry" args={[4, 4, 4]} />
        <meshLambertMaterial attach="material" color="white" side={THREE.DoubleSide} />
      </mesh>
    )
  }

  const addDice = () => {

    // console.log(dice, 'what the');
    // let newDice = dice;
    // newDice.push(3);
    // console.log(newDice);
    // console.log(promise);
    // promise.push(<D8 position={[2, 2, 10]} rotation={[0, 1, 0]} />)
    // console.log(promise, 'new promise')
    // setDice(newDice);


  }

  //   useEffect(() => {
  //     var scene = new THREE.Scene();
  //     var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  //     var renderer = new THREE.WebGLRenderer();
  //     renderer.setSize( window.innerWidth, window.innerHeight );
  //     // document.body.appendChild( renderer.domElement );
  //     // use ref as a mount point of the Three.js scene instead of the document.body
  //     cheese.appendChild( renderer.domElement );
  //     var geometry = new THREE.OctahedronGeometry( 1 );
  //     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //     var cube = new THREE.Mesh( geometry, material );
  //     scene.add( cube );
  //     camera.position.z = 5;
  //     var animate = function () {
  //       requestAnimationFrame( animate );
  //       cube.rotation.x += 0.01;
  //       cube.rotation.y += 0.01;
  //       renderer.render( scene, camera );
  //     };
  //     animate();


  // }, []);
  const glProps = { alpha: false };
  const cameraProps = { position: [0, -12, 16] };


  return (
    <>
      <button onClick={() => { addDice() }}>button</button>
      <button>toss</button>
      <div style={{ position: "relative", width: 300, height: 300 }}>
        <Canvas concurrent shadowMap sRGB gl={glProps} camera={cameraProps} width={100}>
          <hemisphereLight intensity={0.35} />
          <spotLight position={[30, 0, 30]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
          <pointLight position={[-30, 0, -30]} intensity={0.5} />

          <Physics className='physics' gravity={[0, 0, -60]}>
            <Plane color={niceColors[10][4]} />
            <Plane color={niceColors[10][1]} position={[-6, 0, 0]} rotation={[0, 0.9, 0]} />
            <Plane color={niceColors[10][2]} position={[6, 0, 0]} rotation={[0, -0.9, 0]} />
            <Plane color={niceColors[10][3]} position={[0, 6, 0]} rotation={[0.9, 0, 0]} />
            <Plane color={niceColors[10][0]} position={[0, -6, 0]} rotation={[-0.9, 0, 0]} />
            <D8 position={[4, 2, 10]} rotation={[0, 1, 0]} />
            <D8 position={[0, 0, 4]} rotation={[0, 1, 0]} />
            <Box />
          </Physics>
        </Canvas>
    </div>
    </>
      );
};

      export default DiceOverview;

