import Board from "../Board/Board";
import { Square } from "../Square/Square";

export class Move {
  protected step: number | null;
  protected square: Square;
  protected board: Board;
  protected cut: boolean;
  constructor(square: Square, board: Board, step: number | null, cut = false) {
    this.step = step;
    this.square = square;
    this.board = board;
    this.cut = cut;
  }

  observerSquareCanCut(square: Square) {
    if (
      square?.getFigure() &&
      this.square.getFigure()?.getColor() !== square.getFigure()?.getColor()
    ) {
      square.addCut();
    }
  }

  protected setPromtSquare(square: Square) {
    if (square && !square.getFigure()) {
      square.setPrompt(true);
    }
    this.cut && this.observerSquareCanCut(square);
  }

  // ищет доступные поля для перемещения в зависимости от направления
  // который задается в callback
  protected canMoveTo(callback: (i: number) => Square) {
    const max = this.step !== null ? this.step : 7;
    for (let i = 1; i <= max; i++) {
      const current = callback(i);
      this.setPromtSquare(current);
      if (!current || current.getFigure()) break;
    }
  }

  set() {
    return this;
  }
}
