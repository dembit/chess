import { Figure } from "../Figure/Figure";

export class Square {
  private size = 64;
  private figure = null as Figure | null;
  private col: number;
  private row: number;
  private isPrompt = false;
  private cut = false;
  constructor(row: number, col: number) {
    this.col = col;
    this.row = row;
  }
  getCol() {
    return this.col;
  }
  getRow() {
    return this.row;
  }
  getSize() {
    return this.size;
  }
  getFigure() {
    return this.figure;
  }
  addFigure(figure: Figure | null) {
    this.figure = figure;
  }
  deleteFigure() {
    this.figure = null;
  }

  addCut() {
    this.cut = true;
  }

  notCut() {
    this.cut = false;
  }

  canCut() {
    return this.cut;
  }

  setPrompt(propmt: boolean) {
    this.isPrompt = propmt;
  }

  delPrompt() {
    this.isPrompt = false;
  }

  moveTo(square: Square) {
    if (square.getPropmt() || square.canCut()) {
      square.addFigure(this.getFigure());
      this.deleteFigure();
    }
  }

  getPropmt() {
    return this.isPrompt;
  }
}
