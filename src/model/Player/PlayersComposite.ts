import { Player } from "./Player";

export class PlayersComposite extends Player {
  private players = [] as Player[];
  add(player: Player) {
    this.players.push(player);
  }
  getSteps() {
    return this.players.reduce((prev, current) => prev + current.getSteps(), 0);
  }
  // получаем игрока который может ходить с помощью подсчетов общих ходов двух игроков
  // если четное то первый игрок или не четное то второй игрок
  getPlayerWhoCanPlay() {
    if (this.getSteps() % 2 === 0) {
      return this.getFirstPlayer();
    }
    return this.getSecondPlayer();
  }
  getFirstPlayer() {
    return this.players[0];
  }
  getSecondPlayer() {
    return this.players[1];
  }
}
