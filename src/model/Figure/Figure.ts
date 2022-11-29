import Board from "../Board/Board";
import { FiguresEnum } from "../Chess/ChessFactory";
import { Square } from "../Square/Square";

export enum ColorFigureEnum {
  BLACK = "black",
  WHITE = "white",
}

export class Figure {
  private image: string;
  private name: FiguresEnum;
  private color: ColorFigureEnum;
  constructor(image: string, name: FiguresEnum, color: ColorFigureEnum) {
    this.image = image;
    this.name = name;
    this.color = color;
  }

  getColor() {
    return this.color;
  }
  getImage() {
    return this.image;
  }

  getName() {
    return this.name;
  }
  move(square: Square, board: Board) {}
}
