"use strict"

class character {
    constructor(name,health,attPower,classType) {
        this.name = name;
        this.stunned = false;
        this.dead = false;
        if(classType==="HERO") {
            this.health = 200;
            this.attPower = 40;
            this.attackSet = ["Helm-Splitter","Siesmic Toss","Earthshatter"];
        } else if(classType ==="ALLY") {
            this.health = 100;
            this.attPower = 15;
            this.attackSet = ["Slash","Tackle"];
        } else {
            this.health = 100;
            this.attPower = 20;
            this.attackSet = ["Maul","Thrash"];
        }
    }

    helmSplitter(character) {
        console.log("A devastating blow!");
        let dmg = character.attPower + 20;
        let chance = randNum(100);
        if(chance<10) {
            dmg *= 1.5;
        }
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
        let dmg = character.attPower + 12;
        let chance = randNum(100);
        let counter;
        while(chance<20) {
            counter++;
            dmg += 12;
            chance = randNum(100);
        }
        console.log("The enemy attacked " + counter + " times!");
        return dmg;
    }
    thrash(character) {
        console.log("The enemy attacks with furry!");
        let dmg = character.attPower + 25;
        return dmg;
    }


}

let turnCounter;























function randNum(max) {
    let min = 0;
    let max = max;
    return Math.floor(Math.random() * (max - min) + min);
}

function attack(character) {
    for(let i=0;i<character.attackSet.lenght;i++) {
        console.log((i+1) + ": " + character.attackSet[i] + "\n");
    }
    let choice = prompt("Which attack would you like to use?");  //"Helm-Splitter","Siesmic Toss","Earthshatter"
    if(character.classType==="HERO") {
        switch(choice) {
            case "1":
            character.helmSplitter
        }
    }
    
}