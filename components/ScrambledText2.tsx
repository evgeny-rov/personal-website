import { useState, useRef, useEffect, useCallback } from "react";
import useAnimationFrame from "../hooks/useAnimationFrame";
import getRandomChar from "../utils/getRandomCharFromString";

const FILLER_CHARS = "!<>-_\\/[]{}—=+*^?#________";

type TimelineEntry = {
  prevChar: string;
  targetChar: string;
  activeKeyframe: number;
  settledKeyframe: number;
};

type TimelineType = {
  values: TimelineEntry[];
  originalText: string;
  targetText: string;
  lastFrame: number;
};

const createTimeline = (
  originalText: string,
  targetText: string,
  seekingFactor: number
): TimelineType => {
  // get max possible length of animated text
  const maxLength = Math.max(originalText.length, targetText.length);

  // keyframes timeline  variable
  const values: TimelineEntry[] = [];

  let lastFrame = 0;

  // create timeline for target sentence
  for (let i = 0; i < maxLength; i++) {
    const prevChar = originalText[i] || "";
    const targetChar = targetText[i] || "";

    const activeKeyframe = Math.floor(Math.random() * seekingFactor);
    const settledKeyframe =
      activeKeyframe + Math.floor(Math.random() * seekingFactor);
    values.push({ prevChar, targetChar, activeKeyframe, settledKeyframe });

    lastFrame = Math.max(settledKeyframe, lastFrame);
  }

  return {
    values,
    originalText,
    targetText,
    lastFrame,
  };
};

type Output = Array<{
  isFiller: boolean;
  value: string;
}>;

const getChar = (currentChar: string, variability = 0.28) => {
  return Math.random() < variability
    ? getRandomChar(FILLER_CHARS)
    : currentChar;
};

const calcOutput = (
  frame: number,
  timeline: TimelineType,
  prevOutput: Output
) => {
  const output: Output = [];

  for (let i = 0; i < timeline.values.length; i++) {
    const { prevChar, targetChar, activeKeyframe, settledKeyframe } =
      timeline.values[i];

    const isSettled = frame >= settledKeyframe;
    const isActive = !isSettled && frame >= activeKeyframe;

    if (isSettled) {
      output.push({ isFiller: false, value: targetChar });
    } else if (isActive) {
      output.push({
        isFiller: true,
        value: getChar(prevOutput[i]?.value ?? "", 0.05),
      });
    } else {
      output.push({ isFiller: false, value: prevChar });
    }
  }

  return output;
};

function* createOutputGenerator(timeline: TimelineType) {
  let prevOutput: Output = [];

  for (let i = 0; i <= timeline.lastFrame; i++) {
    const nextOutput = calcOutput(i, timeline, prevOutput);
    yield nextOutput;
    prevOutput = nextOutput;
  }
}

const defaultStyles = {
  filler: {
    color: "gray",
    fontSize: "2rem",
  },
  real: {
    color: "#FAFAFA",
    fontSize: "2rem",
  },
};

const ScrambledPT = (props: { sentences: string[] }) => {
  const [nextSentenceIndex, setNextSentenceIndex] = useState(0);
  const [output, setOutput] = useState<Output>([]);
  const animationController = useAnimationFrame();
  const timelineRef = useRef<TimelineType>();

  const tick = (outputGenerator: Generator<Output, void, unknown>) => {
    if (timelineRef.current === undefined) return;

    const nextOutput = outputGenerator.next();

    if (nextOutput.done) {
      animationController.stop();
    } else {
      animationController.update(() => tick(outputGenerator));
      setOutput(nextOutput.value);
    }
  };

  const animate = () => {
    console.log({ nextSentenceIndex });
    const currentTimeline = timelineRef.current;
    const timeline = createTimeline(
      currentTimeline?.targetText ?? "",
      props.sentences[nextSentenceIndex],
      40
    );

    timelineRef.current = timeline;

    const outputGenerator = createOutputGenerator(timeline);
    animationController.update(() => tick(outputGenerator));
  };

  useEffect(() => {
    animate();
    let timerId: NodeJS.Timeout;

    //should repeat
    if (true) {
      timerId = setTimeout(() => {
        setNextSentenceIndex((nextSentenceIndex + 1) % props.sentences.length);
      }, 4000);
    }

    return () => clearTimeout(timerId);
  }, [nextSentenceIndex]);

  return (
    <>
      {output.map(({ isFiller, value }, idx: number) => {
        const style = isFiller ? defaultStyles.filler : defaultStyles.real;
        return (
          <span key={idx} {...{ style }}>
            {value}
          </span>
        );
      })}
    </>
  );
};

export default ScrambledPT;
