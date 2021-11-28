import React, { Suspense, useRef, useState } from "react";
import { Canvas, SpotLightProps } from "@react-three/fiber";
import AtticModel from "./AtticModel";
import { OrbitControls, softShadows, useHelper } from "@react-three/drei";
import { BoxHelper, PointLightHelper, SpotLightHelper } from "three";

// softShadows();

const SpotLightCS = (props: SpotLightProps) => {
  const lightRef = useRef(null!);

  useHelper(lightRef, SpotLightHelper, 2, "red");

  return (
    <spotLight
      ref={lightRef}
      castShadow
      shadowBias={-0.01}
      position={props.position}
      intensity={props.intensity}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={100}
      shadow-camera-left={-30}
      shadow-camera-right={30}
      shadow-camera-top={20}
      shadow-camera-bottom={-10}
    />
  );
};

const Lights = () => {
  const lightRef = useRef(null!);
  const lightRef2 = useRef(null!);
  const lightRef3 = useRef(null!);

  useHelper(lightRef, PointLightHelper, 2, "red");
  useHelper(lightRef2, PointLightHelper, 2, "red");
  useHelper(lightRef3, BoxHelper, 2, "red");

  return (
    <>
      <rectAreaLight
        width={10}
        height={10}
        position={[0, 5, 30]}
        intensity={10}
      />
      <pointLight
        ref={lightRef}
        castShadow
        color={"#fbeebe"}
        shadowBias={-0.05}
        position={[13, 5, -12]}
        intensity={0.05}
        distance={30}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={100}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={20}
        shadow-camera-bottom={-10}
      />
      <pointLight
        ref={lightRef2}
        castShadow
        color={"#fbeebe"}
        shadowBias={-0.05}
        position={[13, 5, 9]}
        distance={30}
        intensity={0.05}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={100}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={20}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

const MainScene = () => {
  return (
    <Canvas camera={{ position: [-5, 5, 14], fov: 90 }} shadows>
      <color attach="background" args={["#f6c962"]} />
      <OrbitControls />
      <fog attach="fog" args={["white", 0, 60]} />
      <ambientLight intensity={0.02} />
      <Lights />
      <Suspense fallback={null}>
        <AtticModel />
      </Suspense>
    </Canvas>
  );
};

export default MainScene;
