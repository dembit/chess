import React from "react";
import { Figure } from "../model/Figure/Figure";

type Props = {
  figures: Figure[];
};

const RemovedFigures = ({ figures }: Props) => {
  return (
    <div className="remove">
      {figures.map((figure, i) => (
        <div key={i}>
          <img src={figure.getImage()} alt="" />
        </div>
      ))}
    </div>
  );
};

export default RemovedFigures;
