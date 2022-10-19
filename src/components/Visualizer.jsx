import React, { useState } from 'react';
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.module.js';
import { Canvas, useFrame } from '@react-three/fiber';
import SoundfontProvider from './SoundfontProvider';
import DatGui from 'react-dat-gui';
import {
  ArcballControls,
  FirstPersonControls,
  FlyControls,
  OrbitControls,
  PointerLockControls,
  TrackballControls,
  TransformControls,
} from '@react-three/drei';
import { HemisphereLight } from 'three';

function RotatingTorus(props) {
  const Mesh = React.useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    Mesh.current.rotation.x = a * 1.1;
    Mesh.current.rotation.z = a * 1.1;
  });

  return (
    <mesh
      {...props}
      ref={Mesh}
      scale={active ? 2.5 : 2}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {hovered ? <meshPhysicalMaterial color={active ? 'black' : 'red'} /> : <meshNormalMaterial />}
      <torusGeometry />
    </mesh>
  );
}

function RotatingIcosahedron(props) {
  const Mesh = React.useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    Mesh.current.rotation.y = (a * Math.PI) / 2;
    Mesh.current.rotation.z = a * Math.PI;
  });

  return (
    <mesh
      {...props}
      ref={Mesh}
      scale={active ? 0.75 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <icosahedronGeometry />
      {hovered ? (
        <meshToonMaterial color={active ? 'green' : 'orangered'} />
      ) : (
        <meshLambertMaterial />
      )}
    </mesh>
  );
}

export default function Visualizer() {
  return (
    <div className="App">
      <Canvas>
        <TrackballControls />
        <RotatingTorus />
        <RotatingIcosahedron />
        <ambientLight />
        <directionalLight />
      </Canvas>
    </div>
  );
}
