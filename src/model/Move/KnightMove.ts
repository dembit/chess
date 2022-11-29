import { Move } from "./Move";

export class KnightMove extends Move {
  set() {
    const col = this.square.getCol();
    const row = this.square.getRow();
    this.setPromtSquare(this.board.getSquare(row + 1, col - 2));
    this.setPromtSquare(this.board.getSquare(row + 1, col + 2));
    this.setPromtSquare(this.board.getSquare(row - 1, col - 2));
    this.setPromtSquare(this.board.getSquare(row - 1, col + 2));

    this.setPromtSquare(this.board.getSquare(row - 2, col + 1));
    this.setPromtSquare(this.board.getSquare(row + 2, col + 1));
    this.setPromtSquare(this.board.getSquare(row - 2, col - 1));
    this.setPromtSquare(this.board.getSquare(row + 2, col - 1));
    return this;
  }
}
