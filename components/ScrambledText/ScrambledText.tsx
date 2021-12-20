import {
  useState,
  useRef,
  useEffect,
  HTMLAttributes,
  useCallback,
} from "react";
import { createTimeline, createOutputGenerator } from "./helpers";
import type { TimelineType, Output } from "./helpers";

type OutputProps<T> = {
  filler: T;
  real: T;
};

type ClassNamesType = OutputProps<string>;
type StylesType = OutputProps<HTMLAttributes<HTMLSpanElement>["style"]>;

type ScrambledTextProps = {
  sentences: string[];
  classNames?: ClassNamesType;
  styles?: StylesType;
  variability?: number;
  fillerChars?: string;
  duration?: number;
  shouldRepeat?: boolean;
  interval?: number;
};

const DEFAULT_STYLES: StylesType = {
  filler: {
    color: "gray",
  },
  real: {
    color: "#FAFAFA",
  },
};

const DEFAULT_CLASSNAMES: ClassNamesType = {
  filler: "",
  real: "",
};

const DEFAULT_DURATION = 40;
const DEFAULT_INTERVAL = 5000;
const DEFAULT_CHAR_VARIABILITY = 0.28;
const DEFAULT_FILLER_CHARS = "!<>-_\\/[]{}—=+*^?#________";

const ScrambledText = ({
  sentences,
  classNames = DEFAULT_CLASSNAMES,
  styles = DEFAULT_STYLES,
  variability = DEFAULT_CHAR_VARIABILITY,
  fillerChars = DEFAULT_FILLER_CHARS,
  duration = DEFAULT_DURATION,
  shouldRepeat = false,
  interval = DEFAULT_INTERVAL,
}: ScrambledTextProps) => {
  const [nextSentenceIndex, setNextSentenceIndex] = useState(0);
  const [output, setOutput] = useState<Output>([]);
  const timelineRef = useRef<TimelineType>();

  const animationTick = useCallback(
    (outputGenerator: Generator<Output, void, unknown>) => {
      const nextOutput = outputGenerator.next();

      if (nextOutput.done) {
        return;
      } else {
        setOutput(nextOutput.value);
        requestAnimationFrame(() => animationTick(outputGenerator));
      }
    },
    []
  );

  const initAnimation = useCallback(() => {
    const currentTimeline = timelineRef.current;
    const timeline = createTimeline(
      currentTimeline?.targetText ?? "",
      sentences[nextSentenceIndex],
      duration
    );

    timelineRef.current = timeline;

    const outputGenerator = createOutputGenerator(timeline, {
      variability: variability,
      fillerChars: fillerChars,
    });

    animationTick(outputGenerator);
  }, [
    duration,
    fillerChars,
    sentences,
    variability,
    nextSentenceIndex,
    animationTick,
  ]);

  useEffect(() => {
    if (sentences.length < 1) return;

    initAnimation();
    let timerId: NodeJS.Timeout;

    const shouldPlayNext =
      shouldRepeat || nextSentenceIndex < sentences.length - 1;

    if (shouldPlayNext) {
      timerId = setTimeout(() => {
        setNextSentenceIndex((nextSentenceIndex + 1) % sentences.length);
      }, interval);
    }

    return () => clearTimeout(timerId);
  }, [
    initAnimation,
    interval,
    shouldRepeat,
    sentences.length,
    nextSentenceIndex,
  ]);

  return (
    <>
      {output.map(({ type, value }, idx: number) => {
        const style = styles[type];
        const className = classNames[type];
        return (
          <span key={idx} {...{ style, className }}>
            {value}
          </span>
        );
      })}
    </>
  );
};

export default ScrambledText;
