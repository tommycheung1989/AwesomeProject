import { makeAutoObservable, observable } from "mobx";

type Player = {
  name: string;
  score: number;
};
type Players = {
  player1: Player;
  player2: Player;
  player3: Player;
  player4: Player;
};
type GamePlayerStateType = {
  players: Players;
};
class GamePlayerStore {
  @observable state: GamePlayerStateType;
  constructor() {
    this.state = {} as GamePlayerStateType;
    makeAutoObservable(this);
  }
}

export default GamePlayerStore;
