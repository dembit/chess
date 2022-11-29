import { ColorFigureEnum } from "../Figure/Figure";
import { Player } from "./Player";

export class Player1 extends Player {
  constructor() {
    super();
    this.setName("Player1");
    this.setColor(ColorFigureEnum.WHITE);
  }
}
