import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AtticModel from "./AtticModel";
import { Environment, OrbitControls, Sky, Stats } from "@react-three/drei";
import SceneLights from "./SceneLights";
import {
  ChromaticAberration,
  EffectComposer,
  Noise,
  SSAO,
} from "@react-three/postprocessing";

// softShadows();

const MainScene = () => {
  return (
    <Canvas camera={{ position: [-5, 5, 14], fov: 80 }} shadows>
      <Stats />
      <OrbitControls makeDefault />
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
      <EffectComposer multisampling={0}>
        <ChromaticAberration
          offset={[0.002, 0]} // color offset
        />
        <Noise opacity={0.03} />
        <SSAO
          samples={30}
          radius={5}
          intensity={30}
          // bias={0.15}
          // luminanceInfluence={0.1}
          color="black"
        />
      </EffectComposer>
    </Canvas>
  );
};

export default MainScene;
