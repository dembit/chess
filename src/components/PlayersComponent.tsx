import React from "react";
import { Player1 } from "../model/Player/Player1";
import { Player2 } from "../model/Player/Player2";
import PlayerComponent from "./PlayerComponent";

type Props = {
  player1: Player1;
  player2: Player2;
};

const PlayersComponent = ({ player1, player2 }: Props) => {
  return (
    <div>
      <div className="player1">
        <PlayerComponent name={player1.getName()} step={player1.getSteps()} />
      </div>
      <div className="player2">
        <PlayerComponent name={player2.getName()} step={player2.getSteps()} />
      </div>
    </div>
  );
};

export default PlayersComponent;
