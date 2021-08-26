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

import { DiceManager, DiceD20 } from "threejs-dice/lib/dice";


const DiceSelection = (props) => {
  const [diceObject, setDiceObject] = useState(false);
  const [d4, setd4] = useState(0);
  const [d6, setd6] = useState(0);
  const [d8, setd8] = useState(0);
  const [d10, setd10] = useState(0);
  const [d12, setd12] = useState(0);
  const [d20, setd20] = useState(0);

  //should be reset
  console.log(diceObject);
  // useEffect(() => {
  //   console.log('adskfhalkfhw');
  // }, [dice]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit')
  }

  const handleChanged4 = (event, setDiceNumber) => {
    console.log(event.target.value);
    setd4(parseInt(event.target.value));

  }

  const handleChanged6 = (event, setDiceNumber) => {
    console.log(event.target.value);
    setd6(parseInt(event.target.value));

  }

  const handleChanged8 = (event, setDiceNumber) => {
    console.log(event.target.value);
    setd8(parseInt(event.target.value));

  }

  const handleChanged10 = (event, setDiceNumber) => {
    console.log(event.target.value);
    setd10(parseInt(event.target.value));

  }

  const handleChanged12 = (event, setDiceNumber) => {
    console.log(event.target.value);
    setd12(parseInt(event.target.value));
  }

  const handleChanged20 = (event, setDiceNumber) => {
    console.log(event.target.value);
    setd20(parseInt(event.target.value));
  }

  const sendBack = (event) => {
    setd4(0);
    setd6(0);
    setd12(0);
    setd20(0);
    setd8(0);
    setDiceObject(false);

  }

  if (diceObject === false) {
    return (
      <>
        <div>this should work</div>

        <div>choose dice</div>
        <form onSubmit={(event) => { handleSubmit(event) }}>

          <label>
            How many d4:
            <select value={d4} onChange={handleChanged4}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </label>
          <br />
          <label>
            How many d6:
            <select value={d6} onChange={handleChanged6}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </label>

          <br />
          <label>
            How many d8:
            <select value={d8} onChange={handleChanged8}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </label>

          <br />
          <label>
            How many d10:
            <select value={d10} onChange={handleChanged10}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </label>

          <br />
          <label>
            How many d12:
            <select value={d12} onChange={handleChanged12}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </label>

          <br />
          <label>
            How many d20:
            <select value={d20} onChange={handleChanged20}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </label>
          <input type="submit" value="Submit" />

        </form>




        <button onClick={() => { setDiceObject(true) }}>hello</button>
      </>
    );
  } else {
    return (
      <>
        <div>submitted</div>
        <DiceOverview setDiceObject={setDiceObject} diceObject={diceObject} d4={d4} d6={d6} d8={d8} d10={d10} d12={d12} d20={d20} />
        <button onClick={()=>{sendBack()}}>back</button>
      </>
    )

  }
};

export default DiceSelection;

