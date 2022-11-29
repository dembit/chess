import React, { useMemo, useState } from "react";
import { BoardBuilder } from "../model/BoardBuilder";
import { ColorFigureEnum } from "../model/Figure/Figure";
import { Player1 } from "../model/Player/Player1";
import { Player2 } from "../model/Player/Player2";
import { PlayersComposite } from "../model/Player/PlayersComposite";
import { Square } from "../model/Square/Square";
import PlayersComponent from "./PlayersComponent";
import RemovedFigures from "./RemovedFigures";
import SquareComponent from "./SquareComponent";

enum StateOfSquareEnum {
  EMPTY = "empty",
  FROM = "from",
  TO = "to",
}

// при клике на любое поле оно может быть одним из трех состояний
// empty, from, to
const getNameStateOfSquare = (square: Square) => {
  if (!square.getFigure() && !square.getPropmt()) {
    return StateOfSquareEnum.EMPTY;
  }
  if (square.getFigure() && !square.getPropmt() && !square.canCut()) {
    return StateOfSquareEnum.FROM;
  }
  return StateOfSquareEnum.TO;
};

type Props = {};

const BoardComponent = (props: Props) => {
  const [board, setBoard] = useState(
    new BoardBuilder().addTemplate(8).addFigures().build()
  );

  // добавляем компоновщик чтобы работать сразу с двумя игроками
  const [playersComposite] = useState(() => {
    const playersComposite = new PlayersComposite();
    playersComposite.add(new Player1());
    playersComposite.add(new Player2());
    return playersComposite;
  });

  // в зависимости от состояния поля применяются различные шаги и в разном порядке
  const setStepsOfNameStateSquare = useMemo(
    () => ({
      [StateOfSquareEnum.EMPTY]: (square: Square) => {
        board.addCurrentSquare(square);
        board.delAllPrompt();
      },
      [StateOfSquareEnum.FROM]: (square: Square) => {
        const player = playersComposite.getPlayerWhoCanPlay();
        if (!player.canTakeFigure(square.getFigure())) return;
        board.delAllPrompt();
        board.addCurrentSquare(square);
        square.getFigure()?.move(square, board);
      },
      [StateOfSquareEnum.TO]: (square: Square) => {
        const player = playersComposite.getPlayerWhoCanPlay();
        const from = board.getCurrentSquare();
        player.setSteps();
        if (square.canCut()) {
          board.addRemovedFigure(square.getFigure());
        }
        from && from.moveTo(square);
        board.addCurrentSquare(square);
        board.delAllPrompt();
      },
    }),
    [board, playersComposite]
  );

  return (
    <div
      style={{
        width: `calc(${board.getSizeSquare()}px * ${board.getCountSquaresRow()})`,
      }}
    >
      <div className="title">
        <div>Common Steps: {playersComposite.getSteps()}</div>
        <div>
          Player turn: {playersComposite.getPlayerWhoCanPlay().getName()}
        </div>
      </div>
      <PlayersComponent
        player1={playersComposite.getFirstPlayer()}
        player2={playersComposite.getSecondPlayer()}
      />
      <RemovedFigures
        figures={board
          .getRemovedFigure()
          .filter((figure) => figure.getColor() === ColorFigureEnum.BLACK)}
      />
      <div className="board">
        {board.getSquares().map((row, i) =>
          row.map((field, j) => (
            <SquareComponent
              isMarked={board.getCurrentSquare() === field}
              fieldCallback={(nextSquare) => {
                const state = getNameStateOfSquare(nextSquare);
                setStepsOfNameStateSquare[state](nextSquare);

                setBoard(board.createCopy());
              }}
              key={i + j}
              field={field}
              row={i}
              col={j}
            />
          ))
        )}
      </div>
      <RemovedFigures
        figures={board
          .getRemovedFigure()
          .filter((figure) => figure.getColor() === ColorFigureEnum.WHITE)}
      />
    </div>
  );
};

export default BoardComponent;
