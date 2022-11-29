import { Move } from "./Move";

export class Right extends Move {
  set() {
    this.canMoveTo((i) =>
      this.board.getSquare(this.square.getRow(), this.square.getCol() + i)
    );
    return this;
  }
}
