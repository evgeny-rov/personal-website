import React from "react";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Noise,
  Glitch,
  SMAA,
} from "@react-three/postprocessing";

const Effects = () => {
  return (
    <EffectComposer multisampling={8}>
      <Noise opacity={0.2} />
    </EffectComposer>
  );
};

export default Effects;
