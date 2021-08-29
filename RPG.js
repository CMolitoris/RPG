"use strict"

class stageObject {
    constructor() {
        this.stageOneEnemies = [new character("Bandit Leader","ENEMY"),new character("Bandit Apprentice","ENEMY"),new character("Bandit Apprentice","ENEMY")];
        this.stageTwoEnemies = [new character("Nemean Lion","ENEMY"),new character("Nine-Headed Hydra","ENEMY")];
        this.stageThreeEnemies = [new character("Cerberus","ENEMY")];
    }
}

class character {
    static instance=0;
    constructor(name,classType) {
        this.name = name;
        this.stunned = false;
        this.dead = false;
        this.classType = classType;
        if(classType==="HERO") {
            this.health = 500;
            this.attPower = 40;
            this.attackSet = ["Helm-Splitter","Siesmic Toss","Earthshatter"];
        } else if(classType ==="ALLY") {
            this.health = 100;
            this.attPower = 15;
            this.attackSet = ["Slash","Tackle"];
        } else if(classType==="ENEMY") {
            this.instance++;
            this.health = 100;
            this.attPower = 20;
            this.attackSet = ["Maul","Thrash"];
        } else if(classType==="BOSS") {
            this.health = 250;
            this.attPower = 40;
            this.attackSet = ["Maul","Thrash"];
        }
    }

    helmSplitter(character) {
        console.log("A devastating blow!");
        let dmg = character.attPower + 20;
        let chance = randNum(100);
        if(chance<20) {
            dmg *= 1.5;
            console.log("Critical hit!")
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
        let counter=1;
        while(chance<20) {
            counter++;
            dmg += 12;
            chance = randNum(100);
        }
        console.log("The enemy attacked " + counter + " time(s)!");
        return dmg;
    }
    thrash(character) {
        console.log("The enemy attacks with furry!");
        let dmg = character.attPower + 25;
        return dmg;
    }


}

RunGame();







function RunGame() {
    let gameOver = false;
    let stageOb = new stageObject();
    let hero = new character(prompt("What would you like to name you hero?"),"HERO");
    let choice;
    let confirm = false;
    while(!confirm) {
        choice = prompt("Are you sure? (Y/N)").toUpperCase();
        if(choice==="Y") {
            confirm = true;
        } else {
            hero = new character(prompt("What would you like to name your hero?"),"HERO");
        }
    }
    console.log("System: No audio device connected.\nNarrator: Many years ago there was a time" 
    + " when the world was ruled by the Olympians. One of the greatest was named, Hercules, the"
    + " strongest of those on Mount Olympus. Many times he showed his prowess in battle. \n"
    + "CINEMATIC CUTSCENE: \nBandit Exclaims: 'Your time has come son of Zues!' *3 enemies enter"
    + " field of view*"
    );
    //-- Fight One --//
    hero = battle(hero,stageOb.stageOneEnemies);
    console.log("\n\nText leading to stage 2..");
    hero = battle(hero,stageOb.stageTwoEnemies);
    console.log("\n\nText leading to final stage...");
    hero = battle(hero,stageOb.stageThreeEnemies);
    console.log("\n\nClosing statements");




}   


function battle(hero,stageEnemies) {
    let battleFinished = false;
    let turnCounter = 1;
    while(!battleFinished && !gameOver) {
        for(let i=0;i<stageEnemies.length;i++) {
            console.log((i+1) + ": " + stageEnemies[i].name);
        }
        let choice = prompt("Who would you like to attack?");
        while(choice>stageEnemies.length) {
            choice = console.prompt("Invalid choice, please enter a legal input. (1-" 
            + stageEnemies.length+")");
        }
        switch(choice) {
            case "1":
                if(stageEnemies[choice-1].dead===true) {
                    console.log(stageEnemies[choice-1].name + " is already eliminated!");
                    break;
                }
                stageEnemies[choice-1] = attack(hero,stageEnemies[choice-1]);
                break;
            case "2":
                if(stageEnemies[choice-1].dead===true) {
                    console.log(stageEnemies[choice-1].name + " is already eliminated!");
                    break;
                }
                stageEnemies[choice-1] = attack(hero,stageEnemies[choice-1]);
                break;
            case "3":
                if(stageEnemies[choice-1].dead===true) {
                    console.log(stageEnemies[choice-1].name + " is already eliminated!");
                    break;
                }
                stageEnemies[choice-1] = attack(hero,stageEnemies[choice-1]);
                break;        
        }

        if(hero.dead===true) {
            console.log("GAME OVER");
            gameOver = true;
        }

        for(let i=0;i<stageEnemies.length;i++) {
            if(stageEnemies[i].dead!==true) {
                console.log("The enemy is attacking!");
                hero = attack(stageEnemies[i],hero);
            } if(stageEnemies[i].dead==true) {
                stageEnemies.splice(stageEnemies[i],1);
            }
        }
        console.log("\nTurn " + turnCounter + " has ended.");
        turnCounter++;
        if(stageEnemies.length===0) {
            battleFinished = true;
            console.log("The battle has ended!");
            return hero;
        }

    }
}

function generateEnemyNPC(numGenerated) {
    let newEnemys = [];
    for(let i=0;i<numGenerated;i++) {
        let newEnemy = new character("Enemy"+(i+1),"ENEMY");
        newEnemys.push(newEnemy);
        console.log(newEnemys[i].name + " has entered the battlefield!");
    }
    return newEnemys;
}



function randNum(aMin=0,aMax) {
    let min = aMin;
    let max = aMax;
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
            enemy.health -= dmg;
            console.log(enemy.name + " has " + enemy.health + " health remaining.");
            return enemy;
}

function attack(character, enemy) {
    if(character.classType!=="HERO") {
        let choice = randNum(1,3);
        let damage = selectAttack(character,choice.toString());
        return attacked(enemy,damage);
    } 
    console.log("\nAttacks:");
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