"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
        printOut("Convert to Celsius")
        Celsius = aTemperature;
        Fahrenheit = (Celsius *9/5)+32;
        Kelvin = Celsius+ 237.35
        break;

      case ETemperaturType.Fahrenheit:
        printOut("Convert to Fahrenheit")
        Fahrenheit = aTemperature;
         


        break;
      case ETemperaturType.Celsius:
        printOut("Convert to Celsius")
        break;  
}
    printOut("celsius"+ Celsius.toFixed(0))
    printOut("kelvin ="+ Kelvin.toFixed(0))
    printOut("Fahrenheit"+ Fahrenheit.toFixed(0))
}

convertTemperature(0, ETemperaturType.Celsius)
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function CalculateNetPrice(aPrice, aTaxGroup){
    let net = 0;
    let TaxGroup = aTaxGroup.toUpperCase();
    let vat =0;
    printOut("taxgroup ="+ TaxGroup.toString())
    return net;
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
