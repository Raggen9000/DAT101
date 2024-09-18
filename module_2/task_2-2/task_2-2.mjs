"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let res = 2 + 3 * (2 - 4) * 6;
printOut("Resultat: 2 + 3 * 2 - 4 * 6")
printOut("Resultat: 2 + 3 *(2 - 4) * 6")
printOut(res.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 let meter = 25.34;
let inches = meter * 39.37;
let svar = inches.toFixed(2);
printOut("25m og 34cm er "+svar.toString()+"inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let day = 3;
let hours = 12;
let min = 14;
let sec = 45;
let svar2 = (day*1440)+(hours*60)+(min)+(sec/60);
let svar3 = Math.floor(svar2);
printOut(svar3.toString()+" minutter");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let min2 = 6322.52;
let day2 = min2/1440;
day2 = Math.floor(day2)
let rest = min2 -(day2*24*60);
let hours2 = rest/60;
hours2 = hours2.toFixed(0);
rest = rest-(hours2*60);
let min3 = Math.floor(rest)
rest = rest-(min3)
let sec2 = rest*60;
sec2 = sec2.toFixed(0);
printOut(day2.toString()+" days "+hours2.toString()+" hours "+min3.toString()+" minttuer "+sec2.toString()+" sekunder");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//let dollar = 54;
//let kroner = dollar * 8.6;
const NOK = 76/ 8.6;
const USD = 8.6/76
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut(amountUSD+" Dollar is "+amountNOK+" kroner ");
amountUSD = amountNOK * USD;
amountUSD = amountUSD.toFixed();
printOut(amountNOK+" Kroner is "+amountUSD+" Dollar");
//printOut(" 54 dollar er "+ kroner.toFixed()+" kroner."+ " 475kroner er "+ dollar/8.6);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tekst = "There is much between heaven and earth that we do not understand.";
printOut(tekst.length.toString()+" is the nummber of characters");
let letter = tekst.charAt(19);

let letter2 = tekst.slice(35, 44);

let letter3 = tekst.indexOf("earth");
printOut("Character at place 19 is: "+ letter);
printOut("Character at place 35 and 8 more is: "+letter2);
printOut("The index of earth is: "+letter3);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (5 > 3) {
    printOut("5 is bigger than 3");
}
if (7 >= 7) {
    printOut("7 is greater or equal to 7");
};
if ("a" > "b"){
    printOut("a is bigger than b");
}
else {
    printOut("b is bigger than a");
}
if ("1">"a"){
    printOut("1 is bigger than a");
}
else {
    printOut("a is bigger than 1");
}
if ("2500"<"abcd"){
    printOut("2500 is less than abcd");
}
else{
    printOut("2500 is more than abcd");
}
if ("arne"=== "thomas"){
    printOut("arne is equal to thomas");
}else {
    printOut("arne is not equal to thomas");
}
if (2===5){
    printOut("2 is equal to 5: true");
}else{
    printOut("2 is not equal to 5: false");
}
if ("abcd">"bcd"){
    printOut("abcd is greater than bcd: true");
}else {
    printOut("bcd is greater than abcd: false");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let num1 = "254";
parseInt(num1);
printOut(num1);

let num2 ="57.23";
parseFloat(num2);
printOut(num2);

let num3 ="25 kroner";
parseFloat(num3);
printOut(num3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor((Math.random() * 360) + 1);
printOut("this is a randomy generetat number between 1 and 360: "+r.toString());

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dag = 131;
let weeks = dag/7;
weeks = Math.floor(weeks);
const dag2 = dag % weeks;
printOut("There are "+weeks.toString()+" weeks and "+dag2.toString()+" days in "+dag+" days");

 

printOut(newLine);