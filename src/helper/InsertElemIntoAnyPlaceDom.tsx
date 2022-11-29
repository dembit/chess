// add any component into any place of your project use CreatePortal
// EXAMPLE
// <InsertElemIntoAnyPlaceDom elem={document.getElementById("root")}>
// example
// </InsertElemIntoAnyPlaceDom>
import React, { FC } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
  elem: Element | null;
};
const InsertElemIntoAnyPlaceDom: FC<Props> = ({ children, elem }) => {
  if (!elem) {
    return <></>;
  }
  return ReactDOM.createPortal(children, elem);
};

export default InsertElemIntoAnyPlaceDom;
