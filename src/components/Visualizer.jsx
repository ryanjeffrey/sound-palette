import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useContext } from 'react';
import { ColorContext } from '../ColorContext';

import './Visualizer.css';

function RotatingTorus(props) {
  const Mesh = React.useRef();
  const { currentBackground } = useContext(ColorContext);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    Mesh.current.rotation.x = a * 1.1;
    Mesh.current.rotation.z = a * 1.1;
  });

  return (
    <mesh
      {...props}
      ref={Mesh}
      scale={2}
    >
      <meshPhysicalMaterial color={currentBackground[0]} />
      <torusGeometry />
    </mesh>
  );
}

function RotatingIcosahedron(props) {
  const Mesh = React.useRef();
  const { currentBackground } = useContext(ColorContext);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    Mesh.current.rotation.y = (a * Math.PI) / 2;
    Mesh.current.rotation.z = a * Math.PI;
  });

  return (
    <mesh
      {...props}
      ref={Mesh}
      scale={1}
      // onClick={() => setActive(!active)}
      // onPointerOver={() => setHover(true)}
      // onPointerOut={() => setHover(false)}
    >
      <icosahedronGeometry />
      <meshToonMaterial color={currentBackground[1]} />
    </mesh>
  );
}

export default function Visualizer() {
  const { currentBackground } = useContext(ColorContext);
  const { color } = useControls('meshPhysicalMaterial', { color: '#000' });

  // eslint-disable-next-line no-console
  console.log(color);
  return (
    <div className="visualizer">
      <Canvas>
        <RotatingTorus />
        <RotatingIcosahedron />
        <ambientLight color={currentBackground[2]} />
        <directionalLight />
      </Canvas>
    </div>
  );
}
