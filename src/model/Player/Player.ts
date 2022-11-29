import { ColorFigureEnum, Figure } from "../Figure/Figure";

export class Player {
  private name = "";
  private steps = 0;
  private color = null as ColorFigureEnum | null;
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  getSteps() {
    return this.steps;
  }
  setSteps() {
    this.steps += 1;
  }
  getColor() {
    return this.color;
  }
  setColor(color: ColorFigureEnum) {
    this.color = color;
  }
  canTakeFigure(figure: Figure | null) {
    return !figure || (figure && figure?.getColor() === this.color);
  }
}
