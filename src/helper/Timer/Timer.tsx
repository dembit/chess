import React, { useEffect, useState } from "react";
import { getFormatTime } from "../helper";

type Props = {
  time?: number;
  style?: React.CSSProperties;
};

const Timer = ({ style, time }: Props) => {
  const [millis, setTime] = useState(0);
  useEffect(() => {
    if (!time) return;
    const count = setInterval(() => {
      setTime(Date.now() - time);
    }, 1000);
    return () => clearInterval(count);
  }, [time]);
  return <div style={style}>{getFormatTime(millis, "HH:MM:SS")}</div>;
};

export default Timer;
