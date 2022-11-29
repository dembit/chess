import { Move } from "./Move";

export class RightTop extends Move {
  set() {
    this.canMoveTo((i) =>
      this.board.getSquare(this.square.getRow() - i, this.square.getCol() + i)
    );
    return this;
  }
}
