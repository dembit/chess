import React from "react";
import "./startWithButton.css";
import InsertElemIntoAnyPlaceDom from "../InsertElemIntoAnyPlaceDom";

type Props = {
  callback: () => void;
};

const StartWithButton = ({ callback }: Props) => {
  return (
    <InsertElemIntoAnyPlaceDom elem={document.getElementsByTagName("body")[0]}>
      <div className="startState">
        <button onClick={callback}>START CHESS</button>
      </div>
    </InsertElemIntoAnyPlaceDom>
  );
};

export default StartWithButton;
