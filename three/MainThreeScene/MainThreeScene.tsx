import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import DunesModel from "./DunesModel";
import Effects from "./Effects";
import Controls from "./Controls";

const LIGHTS_COLOR = "#9fb0ff";

const MainScene = () => {
  return (
    <>
      <Canvas dpr={1}>
        <fog attach="fog" args={["#000000", 10, 35]} />
        <pointLight position={[50, -5, 0]} intensity={5} color={LIGHTS_COLOR} />
        <pointLight position={[-50, 5, 0]} intensity={2} color={LIGHTS_COLOR} />
        <Suspense fallback={null}>
          <Controls />
          <DunesModel position={[0, -5, 0]} />
          <Effects />
        </Suspense>
      </Canvas>
    </>
  );
};

export default MainScene;
