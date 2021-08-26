import React from 'react';
import * as THREE from 'three';
import { useConvexPolyhedron } from 'use-cannon';
import { Box } from 'drei';

  const D6 = (props) => {
    const radius = 1;
    const octahedronGeometry = new THREE.BoxGeometry(radius);
    const [ref, api] = useConvexPolyhedron(() => {
      return {
        args: octahedronGeometry,
        mass: 1,
        ...props,
      };
    });

    return (
      <Box
        args={radius}
        ref={ref}
        onClick={() => api.applyImpulse([0, 20, 40], [0, 0, 0])}
        castShadow
        receiveShadow
      >
        <meshNormalMaterial attach="material" />
      </Box>
    );
  };

  export default D6;
