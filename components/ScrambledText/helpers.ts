import getRandomCharFromString from "../../utils/getRandomCharFromString";

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

type OutputConfig = {
  variability: number;
  fillerChars: string;
};

type Output = Array<{
  type: "filler" | "real";
  value: string;
}>;

const getChar = (
  currentChar: string,
  fillerChars: string,
  variability: number
) => {
  return Math.random() < variability
    ? getRandomCharFromString(fillerChars)
    : currentChar;
};

const createTimeline = (
  originalText: string,
  targetText: string,
  duration: number
): TimelineType => {
  const maxLength = Math.max(originalText.length, targetText.length);
  const values: TimelineEntry[] = [];

  let lastFrame = 0;

  for (let i = 0; i < maxLength; i++) {
    const prevChar = originalText[i] || "";
    const targetChar = targetText[i] || "";

    const activeKeyframe = Math.floor(Math.random() * duration);
    const settledKeyframe =
      activeKeyframe + Math.floor(Math.random() * duration);
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

const calcOutput = (
  frame: number,
  timeline: TimelineType,
  prevOutput: Output,
  config: OutputConfig
) => {
  const output: Output = [];

  for (let i = 0; i < timeline.values.length; i++) {
    const { prevChar, targetChar, activeKeyframe, settledKeyframe } =
      timeline.values[i];

    const isSettled = frame >= settledKeyframe;
    const isActive = !isSettled && frame >= activeKeyframe;

    if (isSettled) {
      output.push({ type: "real", value: targetChar });
    } else if (isActive) {
      output.push({
        type: "filler",
        value: getChar(
          prevOutput[i]?.value ?? "",
          config.fillerChars,
          config.variability
        ),
      });
    } else {
      output.push({ type: "real", value: prevChar });
    }
  }

  return output;
};

function* createOutputGenerator(timeline: TimelineType, config: OutputConfig) {
  let prevOutput: Output = [];

  for (let i = 0; i <= timeline.lastFrame; i++) {
    const nextOutput = calcOutput(i, timeline, prevOutput, config);
    yield nextOutput;
    prevOutput = nextOutput;
  }
}

export type { TimelineEntry, TimelineType, Output };
export { createTimeline, calcOutput, createOutputGenerator };
