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

  const { speedX, speedY, speedZ, torusSize, material, wireframe } = useControls({
    torus: folder({
      speedX: { value: '1.1', min: '0.1', max: '4', step: '0.25', label: 'torusSpeedX' },
      speedY: { value: '1.2', min: '0.1', max: '4', step: '0.25', label: 'torusSpeedY' },
      speedZ: { value: '1.4', min: '0.1', max: '4', step: '0.25', label: 'torusSpeedZ' },
      torusSize: { value: '2', min: '1', max: '4', step: '0.5', label: 'torusSize' },
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
          transparent={false}
          roughness={0.5}
          clearcoat={0.5}
          metalness={0.5}
          shininess={150}
          wireframe={wireframe}
        />
      ) : (
        <meshPhysicalMaterial
          color={currentBackground[0]}
          roughness={0}
          transparent={true}
          opacity={0.7}
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

  const { icosahedronSize, material, wireframe, shape } = useControls({
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
      icosahedronSize: { value: '1', min: '0.5', max: '3', step: '0.25', label: 'icosahedronSize' },
      material: false,
      wireframe: false,
    }),
  });

  // tetrahedron, cube, octahedron, dodecahedron, icosahedron;

  //   const solid = () => {
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

  console.log('solid', solid);
  console.log('dodecahedron geometry', <dodecahedronGeometry />);
  //   };

  return (
    <mesh {...props} ref={Mesh} scale={icosahedronSize} onClick={() => setActive(!active)}>
      {/* {geometry ? <boxGeometry /> : <icosahedronGeometry />} */}

      {solid}
      {material ? (
        <meshPhysicalMaterial
          color={currentBackground[1]}
          roughness={0.5}
          clearcoat={0.5}
          metalness={0.5}
          shininess={150}
          wireframe={wireframe}
        />
      ) : (
        <meshPhongMaterial
          color={currentBackground[1]}
          shininess={150}
          wireframe={wireframe}
          roughness={0.05}
        />
      )}
    </mesh>
  );
}

function BottomPlane(props) {
  const Mesh = React.useRef();
  const { currentBackground } = useContext(ColorContext);

  const waterDisp = useTexture('./images/Water_001_DISP.png');
  const waterSpec = useTexture('./images/Water_001_SPEC.jpg');
  const waterOcc = useTexture('./images/Water_001_OCC.jpg');
  const waterNorm = useTexture('./images/Water_001_NORM.jpg');
  const waterColor = useTexture('./images/Water_001_COLOR.jpg');

  return (
    <mesh
      {...props}
      ref={Mesh}
      receiveShadow
      rotation={[4.7, 0, 0]}
      position={[0, -4, 0]}
      // onClick={() => setActive(!active)}
      // onPointerOver={() => setHover(true)}
      // onPointerOut={() => setHover(false)}
    >
      <planeGeometry args={[70, 40, 40, 40]} />
      <meshLambertMaterial
        color={currentBackground[1]}
        displacementMap={waterDisp}
        displacementScale={currentBackground.length}
        specularMap={waterSpec}
        normalMap={waterNorm}
        aoMap={waterOcc}
        side={DoubleSide}
        map={waterColor}
        wireframe={true}
      />
    </mesh>
  );
}

function TopPlane(props) {
  const Mesh = React.useRef();
  const { currentBackground } = useContext(ColorContext);

  const waterDisp = useTexture('./images/Water_001_DISP.png');
  const waterSpec = useTexture('./images/Water_001_SPEC.jpg');
  const waterOcc = useTexture('./images/Water_001_OCC.jpg');
  const waterNorm = useTexture('./images/Water_001_NORM.jpg');

  return (
    <mesh
      {...props}
      ref={Mesh}
      receiveShadow
      rotation={[4.7, 0, 0]}
      position={[0, 4, 0]}
      // onClick={() => setActive(!active)}
      // onPointerOver={() => setHover(true)}
      // onPointerOut={() => setHover(false)}
    >
      <planeGeometry args={[70, 40, 25, 25]} />
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
  );
}

export default function Visualizer() {
  const { bg, shadows } = useControls({
    atmosphere: folder({
      bg: { value: '#fff', label: 'ambientLightColor' },
      shadows: { value: false, label: 'shadows' },
    }),
  });
  return (
    <div className="visualizer">
      <Canvas>
        <BottomPlane />
        <RotatingTorus />
        <RotatingIcosahedron />
        {shadows ? false : <ambientLight color={bg} />}
        <directionalLight />
        <TopPlane />
      </Canvas>
    </div>
  );
}
