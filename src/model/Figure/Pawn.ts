import PawnWhite from "../../assets/white-pawn.png";
import PawnBlack from "../../assets/black-pawn.png";
import { ColorFigureEnum, Figure } from "./Figure";
import { FiguresEnum } from "../Chess/ChessFactory";
import { Square } from "../Square/Square";
import Board from "../Board/Board";
import { Up } from "../Move/Up";
import { Down } from "../Move/Down";

export class whitePawn extends Figure {
  constructor() {
    super(PawnWhite, FiguresEnum.PAWN, ColorFigureEnum.WHITE);
  }
  move(square: Square, board: Board) {
    const move = new Down(square, board, square.getRow() === 1 ? 2 : 1).set();

    move.observerSquareCanCut(
      board.getSquare(square.getRow() + 1, square.getCol() - 1)
    );
    move.observerSquareCanCut(
      board.getSquare(square.getRow() + 1, square.getCol() + 1)
    );
  }
}

export class blackPawn extends Figure {
  constructor() {
    super(PawnBlack, FiguresEnum.PAWN, ColorFigureEnum.BLACK);
  }
  move(square: Square, board: Board) {
    const move = new Up(square, board, square.getRow() === 6 ? 2 : 1).set();

    move.observerSquareCanCut(
      board.getSquare(square.getRow() - 1, square.getCol() - 1)
    );

    move.observerSquareCanCut(
      board.getSquare(square.getRow() - 1, square.getCol() + 1)
    );
  }
}
