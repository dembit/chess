import { Move } from "./Move";

export class Up extends Move {
  set() {
    this.canMoveTo((i) =>
      this.board.getSquare(this.square.getRow() - i, this.square.getCol())
    );
    return this;
  }
}
