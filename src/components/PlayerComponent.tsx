import React from "react";

type Props = {
  name: string;
  step: number;
};

const PlayerComponent = ({ name, step }: Props) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <span>{`Step: ${step}`}</span>
      </div>
    </div>
  );
};

export default PlayerComponent;
