import KnightWhite from "../../assets/white-knight.png";
import KnightBlack from "../../assets/black-knight.png";
import { ColorFigureEnum, Figure } from "./Figure";
import { FiguresEnum } from "../Chess/ChessFactory";
import { Square } from "../Square/Square";
import Board from "../Board/Board";
import { KnightMove } from "../Move/KnightMove";

export class whiteKnight extends Figure {
  constructor() {
    super(KnightWhite, FiguresEnum.KNIGHT, ColorFigureEnum.WHITE);
  }
  move(square: Square, board: Board) {
    new KnightMove(square, board, null, true).set();
  }
}

export class blackKnight extends Figure {
  constructor() {
    super(KnightBlack, FiguresEnum.KNIGHT, ColorFigureEnum.BLACK);
  }
  move(square: Square, board: Board) {
    new KnightMove(square, board, null, true).set();
  }
}
