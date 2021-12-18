import { useRef, useEffect, MutableRefObject } from "react";

const createController = (requestRef: MutableRefObject<number | null>) => ({
  update: (animate: (time: number) => void) => {
    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current);
    }
    requestRef.current = requestAnimationFrame(animate);
  },
  stop: () => {
    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current);
    }

    return;
  },
});

const useAnimationFrame = () => {
  const requestRef = useRef<number | null>(null);

  const controller = {
    update: (animate: (time: number) => void) => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
      requestRef.current = requestAnimationFrame(animate);
    },
    stop: () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }

      return;
    },
  };

  useEffect(() => {
    return () => controller.stop();
  }, []);

  return controller;
};

export default useAnimationFrame;
