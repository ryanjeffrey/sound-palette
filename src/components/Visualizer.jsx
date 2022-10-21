/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { folder, useControls } from 'leva';
import { useContext } from 'react';
import { ColorContext } from '../ColorContext';

import './Visualizer.css';
import { useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';
import { useState } from 'react';

function RotatingTorus(props) {
  const Mesh = React.useRef();
  const { currentBackground } = useContext(ColorContext);

  const { speedX, speedY, speedZ, torusSize, material, wireframe, opacity } = useControls({
    torus: folder({
      speedX: { value: '1.1', min: '0.1', max: '4', step: '0.25', label: 'speedX' },
      speedY: { value: '1.2', min: '0.1', max: '4', step: '0.25', label: 'speedY' },
      speedZ: { value: '1.4', min: '0.1', max: '4', step: '0.25', label: 'speedZ' },
      torusSize: { value: '2', min: '1', max: '4', step: '0.5', label: 'size' },
      opacity: { value: '0.7', min: '0.01', max: '1', step: '0.01', label: 'opacity' },
      material: false,
      wireframe: false,
    }),
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    Mesh.current.rotation.x = a * speedX;
    Mesh.current.rotation.z = a * speedY;
    Mesh.current.rotation.y = a * speedZ;
  });

  return (
    <mesh {...props} ref={Mesh} scale={torusSize}>
      {material ? (
        <meshPhysicalMaterial
          color={currentBackground[0]}
          transparent={true}
          roughness={0.5}
          clearcoat={0.5}
          metalness={0.5}
          shininess={150}
          opacity={opacity}
          wireframe={wireframe}
        />
      ) : (
        <meshPhysicalMaterial
          color={currentBackground[0]}
          roughness={0}
          transparent={true}
          opacity={opacity}
          wireframe={wireframe}
        />
      )}
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

  const [active, setActive] = useState(false);

  const { size, material, wireframe, shape, opacity } = useControls({
    solid: folder({
      shape: {
        options: {
          tetrahedron: 'tetrahedron',
          cube: 'cube',
          octahedron: 'octahedron',
          dodecahedron: 'dodecahedron',
          icosahedron: 'icosahedron',
        },
      },
      size: { value: '1', min: '0.5', max: '3', step: '0.25', label: 'size' },
      opacity: { value: '0.7', min: '0.01', max: '1', step: '0.01', label: 'opacity' },
      material: false,
      wireframe: false,
    }),
  });

  let solid = <boxGeometry />;
  switch (shape) {
    case 'tetrahedron':
      solid = <tetrahedronGeometry />;
      break;
    case 'cube':
      solid = <boxGeometry />;
      break;
    case 'octahedron':
      solid = <octahedronGeometry />;
      break;
    case 'dodecahedron':
      solid = <dodecahedronGeometry />;
      break;
    case 'icosahedron':
      solid = <icosahedronGeometry />;
      break;
  }

  return (
    <mesh {...props} ref={Mesh} scale={size} onClick={() => setActive(!active)}>
      {solid}
      {material ? (
        <meshPhysicalMaterial
          color={currentBackground[1]}
          roughness={0.5}
          clearcoat={0.5}
          metalness={0.5}
          shininess={150}
          transparent={true}
          opacity={opacity}
          wireframe={wireframe}
        />
      ) : (
        <meshPhongMaterial
          color={currentBackground[1]}
          shininess={150}
          transparent={true}
          opacity={opacity}
          wireframe={wireframe}
          roughness={0.05}
        />
      )}
    </mesh>
  );
}

function Planes(props) {
  const Mesh = React.useRef();
  const { currentBackground } = useContext(ColorContext);

  const waterDisp = useTexture('./images/Water_001_DISP.png');
  const waterSpec = useTexture('./images/Water_001_SPEC.jpg');
  const waterOcc = useTexture('./images/Water_001_OCC.jpg');
  const waterNorm = useTexture('./images/Water_001_NORM.jpg');
  const waterColor = useTexture('./images/Water_001_COLOR.jpg');

  const { toggleGrid } = useControls({
    atmosphere: folder({
      toggleGrid: false,
    }),
  });

  return (
    <>
      <mesh {...props} ref={Mesh} receiveShadow rotation={[4.7, 0, 0]} position={[0, 4, 0]}>
        {toggleGrid ? true : <planeGeometry args={[70, 40, 25, 25]} />}
        <meshLambertMaterial
          color={currentBackground[1]}
          displacementMap={waterDisp}
          displacementScale={currentBackground.length}
          specularMap={waterSpec}
          normalMap={waterNorm}
          aoMap={waterOcc}
          side={DoubleSide}
          wireframe={true}
        />
      </mesh>

      <mesh {...props} ref={Mesh} receiveShadow rotation={[4.7, 0, 0]} position={[0, -4, 0]}>
        {toggleGrid ? true : <planeGeometry args={[70, 40, 40, 40]} />}
        <meshLambertMaterial
          color={currentBackground[1]}
          displacementMap={waterDisp}
          map={waterColor}
          displacementScale={currentBackground.length}
          specularMap={waterSpec}
          normalMap={waterNorm}
          aoMap={waterOcc}
          side={DoubleSide}
          wireframe={true}
        />
      </mesh>
    </>
  );
}

export default function Visualizer() {
  const { bg, shadows } = useControls({
    atmosphere: folder({
      bg: { value: '#fff', label: 'lightColor' },
      shadows: { value: false, label: 'shadows' },
    }),
  });
  return (
    <div className="visualizer">
      <Canvas>
        <RotatingTorus />
        <RotatingIcosahedron />
        {shadows ? false : <ambientLight color={bg} />}
        <directionalLight />
        <Planes />
      </Canvas>
    </div>
  );
}
