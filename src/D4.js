import React from 'react';
import * as THREE from 'three';
import { useConvexPolyhedron } from 'use-cannon';
import { Tetrahedron } from 'drei';

  const D4 = (props) => {
    const radius = 1;
    const octahedronGeometry = new THREE.TetrahedronGeometry(radius);
    const [ref, api] = useConvexPolyhedron(() => {
      return {
        args: octahedronGeometry,
        mass: 1,
        ...props,
      };
    });

    return (
      <Tetrahedron
        args={radius}
        ref={ref}
        onClick={() => api.applyImpulse([0, 20, 40], [0, 0, 0])}
        castShadow
        receiveShadow
      >
        <meshNormalMaterial attach="material" />
      </Tetrahedron>
    );
  };

  export default D4;
