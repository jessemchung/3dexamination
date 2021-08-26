import React from 'react';
import * as THREE from 'three';
import { useConvexPolyhedron } from 'use-cannon';
import { Icosahedron } from 'drei';

  const D20 = (props) => {
    const radius = 1;
    const octahedronGeometry = new THREE.IcosahedronGeometry(radius);
    const [ref, api] = useConvexPolyhedron(() => {
      return {
        args: octahedronGeometry,
        mass: 1,
        ...props,
      };
    });

    return (
      <Icosahedron
        args={radius}
        ref={ref}
        onClick={() => api.applyImpulse([0, 20, 40], [0, 0, 0])}
        castShadow
        receiveShadow
      >
        <meshNormalMaterial attach="material" />
      </Icosahedron>
    );
  };

  export default D20;
