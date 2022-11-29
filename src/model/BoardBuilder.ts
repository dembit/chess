import Board from "./Board/Board";
import { ChessFactory, FiguresEnum } from "./Chess/ChessFactory";
import { Square } from "./Square/Square";

export class BoardBuilder {
  private board: Board;
  constructor() {
    this.board = new Board();
  }
  addTemplate(count: number) {
    const fields = [] as Square[][];
    for (let i = 0; i < count; i++) {
      fields.push([]);
      for (let j = 0; j < count; j++) {
        fields[i].push(new Square(i, j));
      }
    }
    this.board.addSquares(fields);
    return this;
  }
  addFigures() {
    const chess = new ChessFactory(this.board);
    chess.addFigure(FiguresEnum.PAWN);
    chess.addFigure(FiguresEnum.KNIGHT);
    chess.addFigure(FiguresEnum.BISHOP);
    chess.addFigure(FiguresEnum.ROOK);
    chess.addFigure(FiguresEnum.KING);
    chess.addFigure(FiguresEnum.QUEEN);
    return this;
  }
  build() {
    return this.board;
  }
}
