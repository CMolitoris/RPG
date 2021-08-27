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

    helmSplitter(character) {
        console.log("A devastating blow!");
        let dmg = character.attPower + 30;
        return dmg;
    }
    seisToss(character) {
        console.log("A powerful toss!");
        let dmg = character.attPower + 20;
        return dmg;
    }
    earthShat(character) {
        console.log("The enemy trembles at your strength!");
        let dmg = character.attPower + 40;
        return dmg;
    }
    slash(character) {
        console.log("SHINNNGGGGG");
        let dmg = character.attPower + 10;
        return dmg;
    }
    tackle(character) {
        console.log("Takedown!");
        let dmg = character.attPower + 20;
        return dmg;
    }
    maul(character) {
        console.log("An onslaught!");
        let dmg = character.attPower + 20;
        return dmg;
    }
    thrash(character) {
        console.log("The enemy attacks with furry!");
        let dmg = character.attPower + 15;
        return dmg;
    }


}

let turnCounter;




































function randNum(max) {
    let min = 0;
    let max = max;
    return Math.floor(Math.random() * (max - min) + min);
}