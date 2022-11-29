import { ColorFigureEnum } from "../Figure/Figure";
import { Player } from "./Player";

export class Player2 extends Player {
  constructor() {
    super();
    this.setName("Player2");
    this.setColor(ColorFigureEnum.BLACK);
  }
}
