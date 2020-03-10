import Character from "./char";

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defence = 10;
  }
}