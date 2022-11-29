import Board from "../Board/Board";
import { blackBishop, whiteBishop } from "../Figure/Bishop";
import { blackKing, whiteKing } from "../Figure/King";
import { blackKnight, whiteKnight } from "../Figure/Knight";
import { blackPawn, whitePawn } from "../Figure/Pawn";
import { blackQueen, whiteQueen } from "../Figure/Queen";
import { blackRook, whiteRook } from "../Figure/Rook";

export enum FiguresEnum {
  PAWN = "pawn",
  KNIGHT = "knight",
  BISHOP = "bishop",
  ROOK = "rook",
  KING = "king",
  QUEEN = "queen",
}

export class ChessFactory {
  private board: Board;
  constructor(board: Board) {
    this.board = board;
  }
  addFigure(type: FiguresEnum) {
    if (type === FiguresEnum.PAWN) {
      for (let i = 0; i < 8; i++) {
        this.board.addFigure(new blackPawn(), 6, i);
        this.board.addFigure(new whitePawn(), 1, i);
      }
    }
    if (type === FiguresEnum.KNIGHT) {
      this.board.addFigure(new whiteKnight(), 0, 1);
      this.board.addFigure(new whiteKnight(), 0, 6);
      this.board.addFigure(new blackKnight(), 7, 1);
      this.board.addFigure(new blackKnight(), 7, 6);
    }
    if (type === FiguresEnum.BISHOP) {
      this.board.addFigure(new whiteBishop(), 0, 2);
      this.board.addFigure(new whiteBishop(), 0, 5);
      this.board.addFigure(new blackBishop(), 7, 2);
      this.board.addFigure(new blackBishop(), 7, 5);
    }
    if (type === FiguresEnum.ROOK) {
      this.board.addFigure(new whiteRook(), 0, 0);
      this.board.addFigure(new whiteRook(), 0, 7);
      this.board.addFigure(new blackRook(), 7, 0);
      this.board.addFigure(new blackRook(), 7, 7);
    }
    if (type === FiguresEnum.KING) {
      this.board.addFigure(new whiteKing(), 0, 3);
      this.board.addFigure(new blackKing(), 7, 3);
    }
    if (type === FiguresEnum.QUEEN) {
      this.board.addFigure(new whiteQueen(), 0, 4);
      this.board.addFigure(new blackQueen(), 7, 4);
    }
    return this.board;
  }
}
