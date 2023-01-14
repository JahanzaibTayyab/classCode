class Character {
    name;
    damage;
    attackSpeed;
    constructor(name, damage, speed) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }
    print() {
        console.log("I am console form abstract");
    }
}
//const abs= new Character()
class Goblin extends Character {
    constructor(name, damage, speed) {
        super(name, damage, speed);
    }
    damagePerSecond() {
        return this.damage * this.attackSpeed;
    }
}
const goblin = new Goblin("Metaverse", 2, 5);
goblin.damagePerSecond();
goblin.print();
export {};
