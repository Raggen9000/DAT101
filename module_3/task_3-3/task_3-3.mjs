"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dag = new Date();
const currentdag = { weekday: "long", year: "numeric", month:"long", day: "numeric"};

function DatoiDag (){
  printOut(dag.toLocaleString("no-NB",currentdag));
  return dag;
}

const nedtelling = new Date("may 14, 2025").getTime();

function XKO (){
  let tellingtilKO = nedtelling - dag;

  const days = Math.floor(tellingtilKO/ (1000 * 60 * 60 * 24));

  printOut("Det er "+days.toString()+" dager igjen til 2XKO!")

}


DatoiDag();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
XKO();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/





function sirkeleRegning(){

  let radius = prompt("Hva er radius til sirkelen?");
  let diameter = radius * 2;
  let omkrets = diameter * Math.PI;
  let areal = Math.PI * radius * radius;



printOut("Radius til sirkelen er "+radius.toString());
printOut("Diameteren til sirkelen er "+diameter.toFixed(2));
printOut("Omkretsen til sirkelen er "+omkrets.toFixed(2));
printOut("Arealet til sirkelen er "+areal.toFixed(2));
}

sirkeleRegning();


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const rektangelHøydeOgLengde = {høyde:10,lengde:5};

function rektangel(){

  let omkrets =(rektangelHøydeOgLengde.høyde*2)+(rektangelHøydeOgLengde.lengde*2);
  let arial =(rektangelHøydeOgLengde.lengde*rektangelHøydeOgLengde.høyde);
  printOut("Omkretsen av rektangelet er "+omkrets.toString())
  printOut("Arealet av rektangelet er "+arial.toString())
}

rektangel();
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ETemperaturType = {Celsius:1, Fahrenheit: 2, Kelvin:3}

function convertTemperature(aTemperature, atype){
    let Fahrenheit = 0;
    let Celsius = 0;
    let Kelvin = 0;
    switch(atype){
      case ETemperaturType.Celsius:
        printOut("Convert to Celsius");
        Celsius = aTemperature;
        Fahrenheit = (Celsius *9/5)+32;
        Kelvin = Celsius+ 237.35
        break;

      case ETemperaturType.Fahrenheit:
        printOut("Convert to Fahrenheit");
        Fahrenheit = aTemperature;
        Celsius = (Fahrenheit-32)*(5/9);
        Kelvin = (Fahrenheit+459.67)*(5/9);

        break;
      case ETemperaturType.Kelvin:
        printOut("Convert to Kelvin");
        Kelvin = aTemperature;
        Celsius = Kelvin-273.15;
        Fahrenheit = (Kelvin*(5/9))-459.67;
        break;  
}
    printOut("celsius = "+ Celsius.toFixed(0))
    printOut("kelvin = "+ Kelvin.toFixed(0))
    printOut("Fahrenheit = "+ Fahrenheit.toFixed(0))
}

convertTemperature(0, ETemperaturType.Celsius)
printOut(newLine);
convertTemperature(0, ETemperaturType.Fahrenheit)
printOut(newLine);
convertTemperature(0, ETemperaturType.Kelvin)
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function kalkulerePris(Price, taxgroup){
  let PriceNet;
  taxgroup = taxgroup.toLocaleLowerCase();
  if(taxgroup == "normal"){
    PriceNet =(100*Price)/(25+100);
    
  }
  else if (taxgroup =="food"){
    PriceNet =(100*Price)/(15+100);
   
  }
  else if(taxgroup == "hotel" ||taxgroup =="cinema" ||taxgroup=="transport"){
    PriceNet =(100*Price)/(10+100);
    
  }
  else{
    printOut(taxgroup+" is an invalid taxgroup");
    return;
  }
  
printOut(Price.toString()+" is "+PriceNet.toFixed(2).toString()+" Without tax")

}
kalkulerePris(100,"Normal")
kalkulerePris(50,"Food")
kalkulerePris(150,"cinema")
kalkulerePris(200,"goblin")

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function speedDistanceTime(aSpeed, adistance, atime) {

  if (Number.isNaN(aSpeed) && !Number.isNaN(adistance) && !Number.isNaN(atime)) {
    aSpeed = adistance / atime;
    printOut("Calculated Speed: " + aSpeed.toString());
  }
  
 
  if (Number.isNaN(adistance) && !Number.isNaN(aSpeed) && !Number.isNaN(atime)) {
    adistance = aSpeed * atime;
    printOut("Calculated Distance: " + adistance.toString());
  }
  
  
  if (Number.isNaN(atime) && !Number.isNaN(aSpeed) && !Number.isNaN(adistance)) {
    atime = adistance / aSpeed;
    printOut("Calculated Time: " + atime.toString());
  }

  let speed = adistance / atime;
  printOut("Final Speed: " + speed.toString());
}


speedDistanceTime(1,10,5);


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

function Part8(aString,ValueForString,stringUtvider,boleanValue){
aString = aString.toString();
stringUtvider = stringUtvider.repeat(ValueForString);
if(boleanValue==true){
  printOut(aString+stringUtvider.toString());
} 
else{
  printOut(stringUtvider.toString()+aString);
}

}

Part8("hei",8,"w",false)
Part8("hei",9,"o",false)

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testIfMathIsFun() {
  let op = 1;
  let line = 1;
  // Left side
  let ok = false;
  do {
    let sumLeft = 0;
    for (let left = 0; left < line + 1; left++) {
      sumLeft += op;
      op++;
    }

    let sumRight = 0;
    for (let right = 0; right < line; right++) {
      sumRight += op;
      op++;
    }

    if (sumLeft !== sumRight) {
      ok = false;
      printOut("Error in line " + line.toString());
    }else{
      ok = true;
    }
    line++;

    if(line > 200){
      printOut("Math is Fun!");
      break;
    }
    
  } while (ok);
}

testIfMathIsFun();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function Factorial(Faktoriell){
  let tallForPart10 = 1;
  if (Faktoriell<=0){
    printOut("Feil melding");
  }
  for(let i=1;i<=Faktoriell;i++){
    tallForPart10 *=i;
  }
  printOut("The factorial of ("+Faktoriell.toString()+") is "+tallForPart10.toString())
}

Factorial(5)
printOut(newLine);
