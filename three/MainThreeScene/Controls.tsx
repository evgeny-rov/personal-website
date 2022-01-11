import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const FINAL_CAMERA_POS_VECTOR = new Vector3(-10, 3, 10);
const START_CAMERA_POS_VECTOR = new Vector3(0, 50, 0);
const INITIAL_ZOOM_DIST = 50;
const MIN_ZOOM_DIST = 28;
const SCROLL_TO_ZOOM_RATE = 15;

const Controls = () => {
  useFrame((state) => {
    state.camera.position.lerp(FINAL_CAMERA_POS_VECTOR, 0.01);

    const nextZoomValue = Math.max(
      MIN_ZOOM_DIST,
      INITIAL_ZOOM_DIST - window.scrollY / SCROLL_TO_ZOOM_RATE
    );

    if (nextZoomValue === state.camera.zoom) {
      return;
    } else {
      state.camera.zoom = nextZoomValue;
    }

    state.camera.updateProjectionMatrix();
  });

  return (
    <>
      <OrthographicCamera
        position={START_CAMERA_POS_VECTOR}
        zoom={INITIAL_ZOOM_DIST}
        far={50}
        near={-15}
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
