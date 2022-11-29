import Board from "../Board/Board";
import { Down } from "../Move/Down";
import { Left } from "../Move/Left";
import { LeftDown } from "../Move/LeftDown";
import { LeftTop } from "../Move/leftTop";
import { Right } from "../Move/Right";
import { RightDown } from "../Move/RightDown";
import { RightTop } from "../Move/RightTop";
import { Up } from "../Move/Up";
import { Square } from "../Square/Square";

export enum moveTypeEnum {
  ALL = "all",
  ALL_DIOGONALS = "all_diogonals",
  VERTICAL_HORIZONTAL = "vertical_horizontal",
}

export class MoveFactory {
  private square: Square;
  private board: Board;
  private step: number | null;
  private cut: boolean;
  constructor(square: Square, board: Board, step: number | null, cut = false) {
    this.square = square;
    this.board = board;
    this.step = step;
    this.cut = cut;
  }
  type(name: moveTypeEnum) {
    if (name === moveTypeEnum.ALL) {
      new LeftTop(this.square, this.board, this.step, this.cut).set();
      new LeftDown(this.square, this.board, this.step, this.cut).set();
      new RightTop(this.square, this.board, this.step, this.cut).set();
      new RightDown(this.square, this.board, this.step, this.cut).set();
      new Up(this.square, this.board, this.step, this.cut).set();
      new Down(this.square, this.board, this.step, this.cut).set();
      new Right(this.square, this.board, this.step, this.cut).set();
      new Left(this.square, this.board, this.step, this.cut).set();
    }
    if (name === moveTypeEnum.ALL_DIOGONALS) {
      new LeftTop(this.square, this.board, this.step, this.cut).set();
      new LeftDown(this.square, this.board, this.step, this.cut).set();
      new RightTop(this.square, this.board, this.step, this.cut).set();
      new RightDown(this.square, this.board, this.step, this.cut).set();
    }
    if (name === moveTypeEnum.VERTICAL_HORIZONTAL) {
      new Up(this.square, this.board, this.step, this.cut).set();
      new Down(this.square, this.board, this.step, this.cut).set();
      new Right(this.square, this.board, this.step, this.cut).set();
      new Left(this.square, this.board, this.step, this.cut).set();
    }
  }
}
