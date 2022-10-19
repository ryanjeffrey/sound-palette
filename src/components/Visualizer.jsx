/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useContext } from 'react';
import { ColorContext } from '../ColorContext';

import './Visualizer.css';

function RotatingTorus(props) {
  const Mesh = React.useRef();
  const { currentBackground } = useContext(ColorContext);

  const { speedX, speedY, speedZ } = useControls({
    speedX: { value: '1.1', min: '0.1', max: '4', step: '0.25', label: 'torusSpeedX' },
    speedY: { value: '1.2', min: '0.1', max: '4', step: '0.25', label: 'torusSpeedY' },
    speedZ: { value: '1.4', min: '0.1', max: '4', step: '0.25', label: 'torusSpeedZ' },
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    Mesh.current.rotation.x = a * speedX;
    Mesh.current.rotation.z = a * speedY;
    Mesh.current.rotation.y = a * speedZ;
  });

  const { torusSize } = useControls({
    torusSize: { value: '2', min: '1', max: '4', step: '0.5', label: 'torusSize' },
  });

  const { wireframe } = useControls({ wireframe: false, });

  return (
    <mesh {...props} ref={Mesh} scale={torusSize}>
      <meshPhysicalMaterial
        color={currentBackground[0]}
        roughness={0}
        transparent={true}
        opacity={0.7}
        wireframe={wireframe}
      />
      <torusGeometry args={[1, 0.2, 48, 120]} />
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

  const { icosahedronSize } = useControls({
    icosahedronSize: { value: '1', min: '0.5', max: '3', step: '0.25', label: 'icosahedronSize' },
  });
  return (
    <mesh
      {...props}
      ref={Mesh}
      scale={icosahedronSize}
      // onClick={() => setActive(!active)}
      // onPointerOver={() => setHover(true)}
      // onPointerOut={() => setHover(false)}
    >
      <icosahedronGeometry />
      <meshPhysicalMaterial color={currentBackground[1]} roughness={0.1} />
    </mesh>
  );
}

export default function Visualizer() {
  const { currentBackground } = useContext(ColorContext);
  const { bg } = useControls({ bg: { value: '#fff', label: 'ambientLightColor' } });
  return (
    <div className="visualizer">
      <Canvas>
        <RotatingTorus />
        <RotatingIcosahedron />
        <ambientLight color={bg} />
        <directionalLight />
      </Canvas>
    </div>
  );
}
