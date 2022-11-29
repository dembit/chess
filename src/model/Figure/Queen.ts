import QueenWhite from "../../assets/white-queen.png";
import QueenBlack from "../../assets/black-queen.png";
import { ColorFigureEnum, Figure } from "./Figure";
import { FiguresEnum } from "../Chess/ChessFactory";
import { moveTypeEnum, MoveFactory } from "./FiguresFactory";
import { Square } from "../Square/Square";
import Board from "../Board/Board";

export class whiteQueen extends Figure {
  constructor() {
    super(QueenWhite, FiguresEnum.QUEEN, ColorFigureEnum.WHITE);
  }
  move(square: Square, board: Board) {
    new MoveFactory(square, board, null, true).type(moveTypeEnum.ALL);
  }
}

export class blackQueen extends Figure {
  constructor() {
    super(QueenBlack, FiguresEnum.QUEEN, ColorFigureEnum.BLACK);
  }
  move(square: Square, board: Board) {
    new MoveFactory(square, board, null, true).type(moveTypeEnum.ALL);
  }
}
