import React, { FC } from "react";
import { Square } from "../model/Square/Square";

type Props = {
  field: Square;
  col: number;
  row: number;
  fieldCallback: (field: Square) => void;
  isMarked: boolean;
};

const SquareComponent: FC<Props> = ({
  field,
  col,
  row,
  fieldCallback,
  isMarked,
}) => {
  const size = field.getSize();
  const figure = field.getFigure();
  const backgroundStyle = (col + row) % 2 === 0 ? "#68341dfa" : "#d79c66f2";

  return (
    <div
      onClick={() => fieldCallback(field)}
      className={["field", field.canCut() ? "promptImage" : ""].join(" ")}
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundStyle,
        border: isMarked ? "2px solid white" : "",
      }}
    >
      {field.getPropmt() && <span className="prompt"></span>}
      {figure?.getImage() && <img src={figure?.getImage()} alt="" />}
    </div>
  );
};

export default SquareComponent;
