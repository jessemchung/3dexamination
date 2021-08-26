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
import D4 from './D4.js'
import D6 from './D6.js'
import D10 from './D10.js'
import D12 from './D12.js'
import D20 from './D20.js'
import {TestDice} from './TestDice.js'


import CANNON from "cannon";


import { DiceManager, DiceD20, DiceD6 } from "threejs-dice/lib/dice";


const DiceOverview = (props) => {
  const {setDiceObject, diceObject} = props;
  console.log(diceObject, 'this should be functional')
  console.log(props, 'these are props');
  var cheese;
  // console.log('trigger check');
  const [dice, setDice] = useState([0]);
  // console.log(dice, 'something odd');
  //radius and the rest are all passed in so likely radius adjusts these values.

  useEffect(() => {
    console.log('adskfhalkfhw');
  }, [dice]);


  function Plane({ color, ...props }) {
    const [ref, api] = usePlane(() => ({ ...props }))
    console.log(api, 'this should be the api in the plane')
    return (
      <mesh ref={ref} receiveShadow onClick={() => console.log('hello')} >
        <planeBufferGeometry onClick={() => api.applyImpulse([0, 20, 0], [0, 0, 0])} attach="geometry" args={[1000, 1000]} />
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

  let dice4 = []
  for (var i = 0; i<props.d4; i++) {
    dice4.push(<D4 position={[2, 2, (5*(i+1))]} rotation={[0, 1, 0]} />)
  }


  let dice6 = []
  for (var i = 0; i<props.d6; i++) {
    dice6.push(<D6 position={[3, 3, (5*(i+1))]} rotation={[0, 1, 0]} />)
  }


  let dice8 = []
  for (var i = 0; i<props.d8; i++) {
    dice8.push(<D8 position={[1, 1, (5*(i+1))]} rotation={[0, 1, 0]} />)
  }

  let dice10 = []
  for (var i = 0; i<props.d10; i++) {
    console.log('pus')
    dice10.push(<D10 position={[5, 5, (5*(i+1))]} rotation={[0, 1, 0]} />)
  }

  let dice12 = []
  for (var i = 0; i<props.d12; i++) {
    dice12.push(<D12 position={[6, 6, (5*(i+1))]} rotation={[0, 1, 0]} />)
  }

  let dice20 = []
  for (var i = 0; i<props.d20; i++) {
    dice20.push(<D20 position={[7, 7, (5*(i+1))]} rotation={[0, 1, 0]} />)
  }


  const glProps = { alpha: false };
  const cameraProps = { position: [0, -12, 16] };
  // let keys = Object.keys(props)


  return (
    <>
      <button onClick={() => { console.log('click') }}>button</button>
      <button>toss</button>
      <TestDice />
      <div style={{ position: "relative", width: 500, height: 500 }}>
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
            {dice4}
            {dice6}
            {dice8}
            {dice10}
            {dice12}
            {dice20}


            {/* {promise} */}
            <Box />
          </Physics>
        </Canvas>
    </div>
    </>
      );
};

      export default DiceOverview;

