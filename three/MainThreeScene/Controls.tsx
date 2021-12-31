import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const FINAL_CAMERA_POS_VECTOR = new Vector3(-10, 3, 10);
const START_CAMERA_POS_VECTOR = new Vector3(0, 50, 0);

const getRandomUpDirection = () => {
  const result = new Vector3(0, 1, 0);
  const side = Math.random() < 0.5 ? "x" : "z";
  const direction = Math.random() < 0.5 ? 1 : -1;

  result[side] = direction;

  return result;
};

const Controls = () => {
  useFrame((state) => {
    state.camera.position.lerp(FINAL_CAMERA_POS_VECTOR, 0.01);
  });

  return (
    <>
      <OrthographicCamera
        position={START_CAMERA_POS_VECTOR}
        zoom={50}
        far={500}
        near={-100}
        up={[0, 1, 0]}
        makeDefault
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
};

export default Controls;
