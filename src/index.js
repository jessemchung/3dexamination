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
import DiceOverview from './DiceOverview.js'




ReactDOM.render(
  <>
  <DiceOverview />
  </>,
  document.getElementById('root')
);


// <button onClick = {()=>{console.log('hello')}}>button</button>
// <button>toss</button>
// <div style={{ position: "relative", width: 300, height: 300 }}>
// <Canvas concurrent shadowMap sRGB gl={glProps} camera={cameraProps} width={100}>
//   {/* Add lights here */}
//   <hemisphereLight intensity={0.35} />
//   <spotLight position={[30, 0, 30]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
//   <pointLight position={[-30, 0, -30]} intensity={0.5} />

//   <Physics gravity={[0, 0, -60]}>
//     {/* Add floor and walls here */}
//     <Plane color={niceColors[10][4]} />
//     <Plane color={niceColors[10][1]} position={[-6, 0, 0]} rotation={[0, 0.9, 0]} />
//     <Plane color={niceColors[10][2]} position={[6, 0, 0]} rotation={[0, -0.9, 0]} />
//     <Plane color={niceColors[10][3]} position={[0, 6, 0]} rotation={[0.9, 0, 0]} />
//     <Plane color={niceColors[10][0]} position={[0, -6, 0]} rotation={[-0.9, 0, 0]} />
//     {/* <D8 position={[4, 2, 10]} rotation={[0, 1, 0]} /> */}
//     {promise}
//     <Box />
//   </Physics>
// </Canvas>
// </div>