import { Square } from "../Square/Square";
import { Figure } from "../Figure/Figure";

export default class Board {
  private squares = [] as Square[][];
  private current = null as null | Square;
  private listRemovedFigures = [] as Figure[];
  getSquare(row: number, col: number) {
    return (this?.squares[row] || [])[col];
  }

  getSquares() {
    return this.squares;
  }
  addSquares(squares: Square[][]) {
    this.squares = squares;
  }

  addCurrentSquare(square: Square | null) {
    this.current = square;
  }

  getCurrentSquare() {
    return this.current;
  }

  delCurrentSquare() {
    this.current = null;
  }

  addFigure(figure: Figure, row: number, col: number) {
    const square = this.getSquare(row, col);
    square.addFigure(figure);
  }
  deleteFigure(figure: Figure, row: number, col: number) {
    const square = this.getSquare(row, col);
    square?.deleteFigure();
  }

  getSizeSquare() {
    return this.getSquare(0, 0)?.getSize();
  }
  getCountSquaresRow() {
    return this.squares.length;
  }

  delAllPrompt() {
    this.squares.forEach((row) => {
      row.forEach((square) => {
        square.delPrompt();
        square.notCut();
      });
    });
  }

  addRemovedFigure(figure: Figure | null) {
    if (!figure) return;
    this.listRemovedFigures.push(figure);
  }

  addRemovedFigures(figures: Figure[]) {
    this.listRemovedFigures = figures;
  }
  getRemovedFigure() {
    return this.listRemovedFigures;
  }

  createCopy() {
    const board = new Board();
    board.addSquares(this.squares);
    board.addCurrentSquare(this.current);
    board.addRemovedFigures(this.listRemovedFigures);

    return board;
  }
}
