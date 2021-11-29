import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AtticModel from "./AtticModel";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import SceneLights from "./SceneLights";

// softShadows();

const MainScene = () => {
  return (
    <Canvas camera={{ position: [-5, 5, 14], fov: 80 }} shadows>
      <OrbitControls makeDefault />ß
      <fog attach="fog" args={["#695d55", 0, 70]} />
      <Sky
        turbidity={8}
        rayleigh={6}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        distance={3000}
        sunPosition={[1, 0.01, -0.6]}
        inclination={0.49}
        azimuth={0.25}
      />
      <SceneLights />
      <Suspense fallback={null}>
        <Environment preset="warehouse" />
        <AtticModel />
      </Suspense>
    </Canvas>
  );
};

export default MainScene;
