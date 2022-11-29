import KingWhite from "../../assets/white-king.png";
import KingBlack from "../../assets/black-king.png";
import { ColorFigureEnum, Figure } from "./Figure";
import { FiguresEnum } from "../Chess/ChessFactory";
import Board from "../Board/Board";
import { Square } from "../Square/Square";
import { moveTypeEnum, MoveFactory } from "./FiguresFactory";

export class whiteKing extends Figure {
  constructor() {
    super(KingWhite, FiguresEnum.KING, ColorFigureEnum.WHITE);
  }
  move(square: Square, board: Board) {
    new MoveFactory(square, board, 1, true).type(moveTypeEnum.ALL);
  }
}

export class blackKing extends Figure {
  constructor() {
    super(KingBlack, FiguresEnum.KING, ColorFigureEnum.BLACK);
  }
  move(square: Square, board: Board) {
    new MoveFactory(square, board, 1, true).type(moveTypeEnum.ALL);
  }
}
