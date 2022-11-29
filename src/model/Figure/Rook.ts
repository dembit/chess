import RookWhite from "../../assets/white-rook.png";
import RookBlack from "../../assets/black-rook.png";
import { ColorFigureEnum, Figure } from "./Figure";
import { FiguresEnum } from "../Chess/ChessFactory";
import { Square } from "../Square/Square";
import Board from "../Board/Board";
import { MoveFactory, moveTypeEnum } from "./FiguresFactory";

export class whiteRook extends Figure {
  constructor() {
    super(RookWhite, FiguresEnum.ROOK, ColorFigureEnum.WHITE);
  }
  move(square: Square, board: Board) {
    new MoveFactory(square, board, null, true).type(
      moveTypeEnum.VERTICAL_HORIZONTAL
    );
  }
}

export class blackRook extends Figure {
  constructor() {
    super(RookBlack, FiguresEnum.ROOK, ColorFigureEnum.BLACK);
  }
  move(square: Square, board: Board) {
    new MoveFactory(square, board, null, true).type(
      moveTypeEnum.VERTICAL_HORIZONTAL
    );
  }
}
