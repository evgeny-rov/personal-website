import { SpotLight, useHelper } from "@react-three/drei";
import { PointLightProps } from "@react-three/fiber";
import { useRef } from "react";
import { PointLightHelper } from "three";

const PointLight = (props: PointLightProps) => {
  const lightRef = useRef(null!);

  useHelper(lightRef, PointLightHelper, 2, "red");

  return (
    <pointLight
      ref={lightRef}
      castShadow
      color={props.color}
      shadowBias={-0.001}
      position={props.position}
      intensity={props.intensity}
      distance={props.distance}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={100}
      shadow-camera-left={-40}
      shadow-camera-right={40}
      shadow-camera-top={20}
      shadow-camera-bottom={-10}
    />
  );
};

const SceneLights = () => {
  return (
    <>
      <PointLight
        color={"#d8ac73"}
        position={[11, 5, -12]}
        intensity={0.1}
        distance={15}
      />
      <PointLight
        color={"#d8ac73"}
        position={[10, 5, 10]}
        distance={15}
        intensity={0.1}
      />
      <SpotLight
        color={"#fce9c4"}
        position={[0, 6, -32]}
        distance={60}
        castShadow
        shadowBias={-0.00001}
        angle={4}
        anglePower={1}
        penumbra={1}
      />
      {/* <ambientLight intensity={0.01} /> */}
      <PointLight color="white" position={[38, 30, -10]} intensity={0.2} />
    </>
  );
};

export default SceneLights;
