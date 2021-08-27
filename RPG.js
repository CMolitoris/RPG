"use strict"

class character {
    constructor(name,health,attPower,classType) {
        this.name = name;
        this.health = health;
        this.attPower = attPower;
        this.dead = false;
        if(classType==="HERO") {
            this.attackSet = ["Helm-Splitter","Siesmic Toss","Earthshatter"];
        } else if(classType ==="ALLY") {
            this.attackSet = ["Slash","Tackle"];
        } else {
            this.attackSet = ["Maul","Thrash"];
        }
    }

    helmSplitter(enemy) {
        console.log("A devastating blow!");
        let dmg = this.attPower + 30;
        if(dmg >= enemy.health) {
            enemy.dead = true;
            return enemy;
        }
        enemy.health - dmg;
        return enemy;

    }
    seisToss() {

    }
    earthShat() {

    }


}

let turnCounter;




































function randNum(max) {
    let min = 0;
    let max = max;
    return Math.floor(Math.random() * (max - min) + min);
}