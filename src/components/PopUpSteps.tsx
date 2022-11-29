import React, { useMemo } from "react";
import StartWithButton from "../helper/StartWithButton/StartWithButton";
import AddCounter from "./AddCounter";

export type StateGameType = "start" | "counter" | null;

type Props = {
  state: StateGameType;
  callback?: (current: StateGameType) => void;
};

const PopUpSteps = ({ state, callback }: Props) => {
  const step = useMemo(() => {
    switch (state) {
      case "start":
        return (
          <StartWithButton
            callback={() => {
              callback && callback(state);
            }}
          />
        );
      case "counter":
        return <AddCounter />;
      default:
        return <></>;
    }
  }, [state, callback]);
  return step;
};

export default PopUpSteps;
