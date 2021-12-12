import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Loader,
  OrbitControls,
  OrthographicCamera,
  Stats,
} from "@react-three/drei";
import { Vector3 } from "three";

import DunesModel from "./DunesModel";
import Effects from "./Effects";

const finalCameraPos = [-10, 3, 10];

const Controls = () => {
  useFrame((state, delta) => {
    const pos = new Vector3();
    pos.set(finalCameraPos[0], finalCameraPos[1], finalCameraPos[2]);
    state.camera.position.lerp(pos, 0.01);
  });

  return (
    <>
      <OrthographicCamera
        position={[0, 50, 0]}
        zoom={50}
        far={200}
        near={-100}
        makeDefault
      />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        // enableZoom={false}
        // enablePan={false}
        // enableRotate={false}
      />
    </>
  );
};

const lightsColor = "#00c3ff";
const lightsColor2 = "#9fb0ff";

const MainScene = () => {
  return (
    <>
      <Canvas dpr={[1, 2]} shadows>
        <color attach="background" args={["black"]} />
        <fog attach="fog" args={["#000000", 10, 35]} />
        <Stats />
        <Controls />
        <pointLight position={[50, -5, 0]} intensity={5} color={lightsColor2} />
        <pointLight position={[-50, 5, 0]} intensity={2} color={lightsColor2} />
        <Suspense fallback={null}>
          <DunesModel position={[0, -5, 0]} />
          <Effects />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default MainScene;
