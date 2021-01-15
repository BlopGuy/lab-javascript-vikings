// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";

    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }


}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }



    addViking(newViking) {
        this.vikingArmy.push(newViking);
    }

    addSaxon(newSaxon) {
        this.saxonArmy.push(newSaxon);
    }

    executeAttack(soldierType) {
        let rndmSaxon = this.saxonArmy[Number(Math.floor(Math.random() * this.saxonArmy.length))];
        let rndmViking = this.vikingArmy[Number(Math.floor(Math.random() * this.vikingArmy.length))];

        let battleResult = "";

        
        if (soldierType === "viking") {
            let soldierIndex = this.vikingArmy.indexOf(rndmViking);
            battleResult = rndmSaxon.receiveDamage(rndmViking.strength);

            if (battleResult === `A Saxon has died in combat`) {
                this.saxonArmy.splice(soldierIndex, 1);
            }

        } else {
            let soldierIndex = this.saxonArmy.indexOf(rndmSaxon);
            battleResult = rndmViking.receiveDamage(rndmSaxon.strength);

            if (battleResult === `${rndmViking.name} has died in act of combat`) {
                this.vikingArmy.splice(soldierIndex, 1);
            }
    
        }

        return battleResult;
    }

    vikingAttack() {
        return this.executeAttack("viking");
    }
    saxonAttack() {
        return this.executeAttack("saxton");
    }
    showStatus() {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }
}
