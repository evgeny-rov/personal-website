import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const FINAL_CAMERA_POS_VECTOR = new Vector3(-10, 3, 10);

const Controls = () => {
  useFrame((state) => {
    state.camera.position.lerp(FINAL_CAMERA_POS_VECTOR, 0.01);
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

export default Controls;
