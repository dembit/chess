import BishopWhite from "../../assets/white-bishop.png";
import BishopBlack from "../../assets/black-bishop.png";
import { ColorFigureEnum, Figure } from "./Figure";
import { FiguresEnum } from "../Chess/ChessFactory";
import { Square } from "../Square/Square";
import Board from "../Board/Board";
import { MoveFactory, moveTypeEnum } from "./FiguresFactory";

export class whiteBishop extends Figure {
  constructor() {
    super(BishopWhite, FiguresEnum.BISHOP, ColorFigureEnum.WHITE);
  }
  move(square: Square, board: Board) {
    new MoveFactory(square, board, null, true).type(moveTypeEnum.ALL_DIOGONALS);
  }
}

export class blackBishop extends Figure {
  constructor() {
    super(BishopBlack, FiguresEnum.BISHOP, ColorFigureEnum.BLACK);
  }
  move(square: Square, board: Board) {
    new MoveFactory(square, board, null, true).type(moveTypeEnum.ALL_DIOGONALS);
  }
}
