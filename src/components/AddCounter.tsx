import React from "react";
import CounterAnimation from "../helper/CounterAnimation/CounterAnimation";
import InsertElemIntoAnyPlaceDom from "../helper/InsertElemIntoAnyPlaceDom";

type Props = {};

const AddCounter = (props: Props) => {
  return (
    <InsertElemIntoAnyPlaceDom elem={document.getElementsByTagName("body")[0]}>
      <CounterAnimation count={3} duration={1} />
    </InsertElemIntoAnyPlaceDom>
  );
};

export default AddCounter;
