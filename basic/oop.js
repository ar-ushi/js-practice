class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.health;
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    attack(){
       return super.attack();
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        return this.health > 0
        ? `${this.name} has received ${damage} points of damage`
        : `${this.name} has died in an act of combat`;
    }
    
    battlecry(){
        return 'Odin owns you all!';
    }
}

person = new Soldier(100,  100);
Viking1 = new Viking('Odin', person.health, person.strength);
console.log(Viking1.receiveDamage(10))

class Saxon extends Soldier {
    attack(){
        return super.attack();
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        return this.health > 0 ? `A Saxon has recieved ${damage} points of damage` : `Saxon has died in act of combat`;
    }
}

class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addToArmy(Soldier, Flag){
        if (Flag == 'V'){
        this.vikingArmy.push(Soldier);
        } else {
            this.saxonArmy.push(Soldier);
        }
    }

    genericAttack(Flag){
        const randomSaxon = this.saxonArmy[0];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        if (Flag = 'V'){
            const result = randomSaxon.receiveDamage(randomViking.strength);
            if (randomSaxon.health <= 0){
                this.saxonArmy.splice(randomSaxon)
            }
            return result;
        } else {
           const  result = randomViking.receiveDamage(randomSaxon.strength);
            if (randomViking.health <= 0){
                this.vikingArmyArmy.splice(randomViking)
            }
            return result;
        }
    }

    vikingAttack() {
        return this.genericAttack("V");
    }

    showStatus(){
        return this.saxonArmy.length == 0 ? `Vikings have won` : (this.vikingArmy.length == 0 ? 'Saxons have won' : 'Vikings and Sazons are battling')
    }

}

viking1 = new Viking('John', 85, 90);
savon1 = new Saxon(100,50);
worldwar = new War();

worldwar.addToArmy(viking1, 'V');
worldwar.addToArmy(savon1, 'S');
worldwar.vikingAttack();
console.log(worldwar.showStatus());


