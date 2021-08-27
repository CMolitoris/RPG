"use strict"

class character {
    constructor(name,classType) {
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









function RunGame() {
    let confirm = false;
    let hero = new character(prompt("What would you like to name your hero?"),"HERO");
    let choice;
    while(!confirm) {
        choice = prompt("Are you sure? (Y/N)").toUpperCase();
        if(choice==="Y") {
            confirm = true;
        }    
    }
    console.log("System: No audio device connected.\n Narrator: Many years ago there was a time" 
    + " when the world was ruled by the Olympians. One of the greatest was named, Hercules, the"
    + " strongest of those on Mount Olympus. Many times he showed his prowess in battle. \n"
    + "CINEMATIC CUTSCENE:"
    )












}













function randNum(max) {
    let min = 0;
    let max = max;
    return Math.floor(Math.random() * (max - min) + min);
}

function selectAttack(character, choice) {
    if(character.classType==="HERO") {
        switch(choice) {
            case "1":
               return character.helmSplitter(character);
            case "2":
                return character.seisToss(character);
            case "3":
                return character.earthShat(character);         
        }
    } else if(character.classType==="ALLY") {
        switch(choice) {
            case "1":
                return character.slash(character);
            case "2":
                return character.tackle(character);    
        }
    } else {
        switch(choice) {
            case "1":
                return character.maul(character);
            case "2":
                return character.thrash(character);    
        }
    }
}

function attacked(enemy,damage) {
    let dmg = damage;
            if(enemy.health <= dmg) {
                enemy.dead = true;
                console.log(enemy.name + " has been defeated!");
                return enemy;
            }
            enemy.health - dmg;
            return enemy;
}

function attack(character, enemy) {
    for(let i=0;i<character.attackSet.length;i++) {
        console.log((i+1) + ": " + character.attackSet[i] + "\n");
    }
    let choice = prompt("Which attack would you like to use?");
    let doesNotHaveAttack = character.attackSet.length<choice;
    while(doesNotHaveAttack) {
        let choice = prompt("Which attack would you like to use?");
        doesNotHaveAttack = character.attackSet.length<choice;
    }
    let damage = selectAttack(character,choice);
    return attacked(enemy,damage);
        
    
}