import React, { useCallback, useEffect, useState } from "react";
import "./counterAnimation.css";

type Props = {
  count: number;
  duration: number;
};

const CounterAnimation = ({ count, duration }: Props) => {
  const [value, setValue] = useState<null | number>(null);
  const setValueWithDelay = useCallback(
    (value: number | null, delay: number) => {
      setTimeout(() => setValue(value), delay);
    },
    []
  );
  useEffect(() => {
    for (let i = count; i >= 0; i--) {
      setValueWithDelay(i, (count - i) * duration * 1000);
    }
    // это нужно для того чтобы когда счет закончился
    // т.е установленно последнее значение с delay в цикле
    // модальное окно скрывалось и не мешало дальнейшей работе приложения
    setValueWithDelay(null, (count + 1) * 1000);
  }, [count, duration, setValueWithDelay]);
  if (value === null) {
    return <></>;
  }
  return (
    <div
      className="counter"
      style={{
        animationDuration: `${duration}s`,
        animationIterationCount: count + 1,
      }}
    >
      <div>{value}</div>
    </div>
  );
};

export default CounterAnimation;
