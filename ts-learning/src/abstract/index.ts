abstract class Character {
  public name: string;
  public damage: number;
  public attackSpeed: number;

  constructor(name: string, damage: number, speed: number) {
    this.name = name;
    this.damage = damage;
    this.attackSpeed = speed;
  }
  public abstract damagePerSecond(): number;
  print() {
    console.log("I am console form abstract");
  }
}

//const abs= new Character()

class Goblin extends Character {
  constructor(name: string, damage: number, speed: number) {
    super(name, damage, speed);
  }
  public damagePerSecond(): number {
    return this.damage * this.attackSpeed;
  }
}

const goblin = new Goblin("Metaverse", 2, 5);
goblin.damagePerSecond();
goblin.print();
