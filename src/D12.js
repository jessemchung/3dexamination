import React from 'react';
import * as THREE from 'three';
import { useConvexPolyhedron } from 'use-cannon';
import { Dodecahedron } from 'drei';

  const D12 = (props) => {
    const radius = 1;
    const octahedronGeometry = new THREE.DodecahedronGeometry(radius);
    const [ref, api] = useConvexPolyhedron(() => {
      return {
        args: octahedronGeometry,
        mass: 1,
        ...props,
      };
    });

    return (
      <Dodecahedron
        args={radius}
        ref={ref}
        onClick={() => api.applyImpulse([0, 20, 40], [0, 0, 0])}
        castShadow
        receiveShadow
      >
        <meshNormalMaterial attach="material" />
      </Dodecahedron>
    );
  };

  export default D12;
