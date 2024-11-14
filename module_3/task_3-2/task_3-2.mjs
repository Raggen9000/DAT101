"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = "";
for (let i = 1; i < 11; i++){
    r += i + ","
}
printOut(r.toString());

let s = "";
for (let t = 10; t > 0; t--){
    s += t + ","
}
printOut(s.toString());

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const tall = 10;
let tall_maskin;

while (tall_maskin != tall){
    tall_maskin = Math.ceil((Math.random()*60)); 
}
printOut(tall_maskin.toString())

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const tall2 = 4000;
let tall_maskin2;
let timer1 = Date.now();
let kvasomhelst = 0;

while (tall_maskin2 != tall2){
    tall_maskin2 = Math.floor(Math.random()*1000000)+1;
    kvasomhelst ++;
}printOut(tall_maskin2.toString());
let timer2 = Date.now();

let tid = timer2 - timer1;
printOut("Datamaskinen brukte "+kvasomhelst.toString()+" runder")
printOut("Det tar "+tid.toString()+" milisekunder");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



/*for (let primtall = 1; primtall <= 200; primtall++) {
    while(primtall % 2 !== 0)
        printOut(primtall.toString());
        break;
}  */
let tomstr = "";
for (let primtall = 2; primtall <= 200; primtall++) {
     while (primtall % 2 !== 0) {
        tomstr += primtall.toString() + " ";
        break; 

    }
}
printOut(tomstr.trim());

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



for(let rows = 1;rows<=7;rows++){
    let rowtext ="";
    for(let kolums =1;kolums <=9;kolums++){
        rowtext += "K" + kolums + "R" + rows + " ";
    }
    printOut(rowtext);
}
//Finn ut hva som skjer her, dette frustrerer meg. Må jobbe meir med nested loops  






printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const MaxProsent = 236;

let student1 = Math.ceil(Math.random()*MaxProsent);
let student2 = Math.ceil(Math.random()*MaxProsent);
let student3 = Math.ceil(Math.random()*MaxProsent);
let student4 = Math.ceil(Math.random()*MaxProsent);
let student5 = Math.ceil(Math.random()*MaxProsent);

let studentPoeng = [student1,student2,student3,student4,student5];

let student1Prosent = (student1/MaxProsent)*100;
let student2Prosent = (student2/MaxProsent)*100;
let student3Prosent = (student3/MaxProsent)*100;
let student4Prosent = (student4/MaxProsent)*100;
let student5Prosent = (student5/MaxProsent)*100;

let studentProsent = [student1Prosent, student2Prosent, student3Prosent, student4Prosent, student5Prosent];


for (let i = 0; i < studentProsent.length; i++) {

    let grade;
    let poeng;
    let prosent; 
    
    if (studentProsent[i] >= 88.5) {
            grade = "A";
            poeng = studentPoeng[i];
            prosent = studentProsent[i];
        
    } else if (studentProsent[i] >= 76.5) {
            grade = "B";
            poeng = studentPoeng[i];
            prosent = studentProsent[i];
    } else if (studentProsent[i] >= 64.5) {
            grade = "C";
            poeng = studentPoeng[i];
            prosent = studentProsent[i];
    } else if (studentProsent[i] >= 52.5) {
            grade = "D";
            poeng = studentPoeng[i];
            prosent = studentProsent[i];
    } else if (studentProsent[i] >= 40.5){
            grade = "E";
            poeng = studentPoeng[i];
            prosent = studentProsent[i];
    }else {
            grade = "F";
            poeng = studentPoeng[i];
            prosent = studentProsent[i];
    } 
    //Må ha .5 på tallene fordi avrundingen av prosenten skjer til slutt.
    prosent = Math.round(prosent);
    printOut("Kandidaten fikk "+poeng.toString()+" poeng."+"Som er "+prosent.toString()+"%, og gir karakteren: "+grade.toString());
    
    }   
    

//Finn ut meir om arrays, do loop og for loop inni
let student1Del2 = {karakter:Math.ceil(Math.random()*236), nr:1}
let student2Del2 = {karakter:Math.ceil(Math.random()*236), nr:2}
let student3Del2 = {karakter:Math.ceil(Math.random()*236), nr:3}
let student4Del2 = {karakter:Math.ceil(Math.random()*236), nr:4}
let student5Del2 = {karakter:Math.ceil(Math.random()*236), nr:5}


do{
    let Eshhh = true
    for(let i =0;i<4;i++){
        let tempPoeng;
        let tempKar;
        let studentA, studentB;
        //switch
        switch(student1Del2.nr, student2Del2.nr){
            case 1:
                studentA = student1Del2;
                studentB = student2Del2;
            case 2:
                studentA = student2Del2;
                studentB = student3Del2;
            case 3:
                studentA = student3Del2;
                studentB = student4Del2;
            case 4:
                studentA = student4Del2;
                studentB = student5Del2;
        }
        if(studentA < studentB)
            tempKar = studentA
            studentA = studentB
            studentB = tempKar
            
        //bruk case
      
        //if statement
        //bytt om info med =
        //mellom lagre info
    
}
}while(Eshhh == false)
 
 printOut(student1Del2.karakter.toString())
    //print ut alt
// student1 = {karakter, nr}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/





function rollDice() {
    let dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push(Math.ceil(Math.random() * 6));
    }
    return dice;
}

function checkFullStraight(dice) {
    const uniqueDice = new Set(dice);
    return uniqueDice.size === 6 && [...uniqueDice].every(num => num >= 1 && num <= 6);
}

function checkThreePairs(dice) {
    const counts = dice.reduce((acc, die) => {
        acc[die] = (acc[die] || 0) + 1;
        return acc;
    }, {});
    
    const pairCounts = Object.values(counts).filter(count => count === 2);
    return pairCounts.length === 3;
}

function checkTwoAndFour(dice) {
    const counts = dice.reduce((acc, die) => {
        acc[die] = (acc[die] || 0) + 1;
        return acc;
    }, {});
    
    const values = Object.values(counts);
    return values.includes(2) && values.includes(4);
}

function checkYahtzee(dice) {
    const uniqueDice = new Set(dice);
    return uniqueDice.size === 1; // All numbers are the same
}

function simulate() {
    let fullStraightThrows = 0;
    let threePairsThrows = 0;
    let twoAndFourThrows = 0;
    let yahtzeeThrows = 0;

    // Full Straight
    while (true) {
        fullStraightThrows++;
        const dice = rollDice();
        if (checkFullStraight(dice)) {
            printOut(`Full Straight achieved in ${fullStraightThrows.toString()} throws.`);
            break;
        }
    }

    // Three Pairs
    while (true) {
        threePairsThrows++;
        const dice = rollDice();
        if (checkThreePairs(dice)) {
            printOut(`Three Pairs achieved in ${threePairsThrows.toString()} throws.`);
            break;
        }
    }

    // Two of a Kind and Four of a Kind (Tower)
    while (true) {
        twoAndFourThrows++;
        const dice = rollDice();
        if (checkTwoAndFour(dice)) {
            printOut(`2 of a Kind and 4 of a Kind (Tower) achieved in ${twoAndFourThrows} throws.`);
            break;
        }
    }

    // Yahtzee (All the Same)
    while (true) {
        yahtzeeThrows++;
        const dice = rollDice();
        if (checkYahtzee(dice)) {
            printOut(`Yahtzee achieved in ${yahtzeeThrows} throws.`);
            break;
        }
    }
}

simulate();



printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
