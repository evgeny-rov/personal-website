import React from "react";
import { EffectComposer, Noise } from "@react-three/postprocessing";

const Effects = () => {
  return (
    <EffectComposer multisampling={8}>
      <Noise opacity={0.2} />
    </EffectComposer>
  );
};

export default Effects;
