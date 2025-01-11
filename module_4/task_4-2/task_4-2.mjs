"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 and Part 2 ----------------------------------------------------------------------------------------------");

const ArrayPart1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let ArrayPart2 = ArrayPart1.join("A");

for (let i = 0; i < ArrayPart2.length; i++) 
    {
    printOut(ArrayPart2[i].toString());
    }

printOut(newLine);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const TekstPart3 = ("Hei på deg, hvordan har du det")

let ArrayPart3 = TekstPart3.split(" ");

for(let i = 0; i <= ArrayPart3.length; i++)
    {
    printOut("Word is: "+ArrayPart3[i]+", Word number is: "+(i+1)+" Index is: "+i)
    }

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const ArrayPart4 = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

printOut(ArrayPart4.toString())

function Part4(Array,aText)
{
    if (Array == ArrayPart4)
    {
        aText = ArrayPart4.indexOf(aText)

        if(aText !== -1)
        {
        ArrayPart4.splice(aText, 1)
        printOut(newLine);
        printOut(ArrayPart4.toString())
        }
    }
}

Part4(ArrayPart4, "Kari")
Part4(ArrayPart4,"Anne")

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const ArrayPart5 = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
"Magnus"]

const ArrayCombo = ArrayPart4.concat(ArrayPart5);

printOut(ArrayCombo.toString())

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook
{
    #PrivatTitle;
    #PrivatAuthor;
    #PrivatISBN;
    
    constructor(Title,Author,ISBN)
    {
        this.#PrivatTitle = Title;
        this.#PrivatAuthor = Author;
        this.#PrivatISBN = ISBN;
    }
    toString()
    {
        return "Title: " + this.#PrivatTitle + " Author: " + this.#PrivatTitle + " ISBN: " + this.#PrivatISBN;
    }
}

let Book1 = new TBook("Ogaboga","Bob",12576426679);
let Book2 = new TBook("Kaffe","bobina",2367539274);
let Book3 = new TBook("Brød og meir kaffe!!","boby",2222222222)

let ArrayPart6 = [Book1,Book2,Book3];

for(let i = 0 ; i< ArrayPart6.length ; i++)
{
    printOut(ArrayPart6[i].toString());
    
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays =
{
    Weekday1:{Value: 0x01, name: "Mandag"},
    Weekday2:{Value: 0x02, name: "Tirsdag"},
    Weekday3:{Value: 0x04, name: "Onsdag"},
    Weekday4:{Value: 0x08, name: "Torsdag"},
    Weekday5:{Value: 0x10, name: "Fredag"},
    Weekday6:{Value: 0x20, name: "Lørdag"},
    Weekday7:{Value: 0x40, name: "Søndag"},
    Workdays:{Value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdag"},
    weekends:{Value: 0x20 + 0x40, name: "Helg"}


}


const keys = Object.keys(EWeekDays); 
printOut("Keys: " + keys.join(", "));
const values = Object.values(EWeekDays); 
printOut("Values: " + values.join(", ")); 
let valueKeys = Object.values(EWeekDays[keys[7]]); 
printOut("ValueKeys: " + valueKeys.join(", ")); 


for(let index = 0; index < keys.length; index++){
  let text = "";
 
  const key = keys[index];
  text = key + ": ";

  const keyObject = EWeekDays[key]; 
  const keyObjectKeys = Object.keys(keyObject); 
  for(let i = 0; i < keyObjectKeys.length; i++){
    const keyObjectKey = keyObjectKeys[i]; 
    const keyObjectValue = keyObject[keyObjectKey]; 
    text += " " + keyObjectKey + ": " + keyObjectValue;
  }
  printOut(text);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/




function ArrayPart8funk(Sortering) 
{
    let ArrayPart8 = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
    printOut(ArrayPart8.toString());  
    Sortering(ArrayPart8); 
    return ArrayPart8;  
}

function Sortering(arr) 
{
    arr.sort((a, b) => a - b); // Få gus til å forklare
    printOut(arr.toString());  
}

  
let ArrayPart8 = ArrayPart8funk(Sortering);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const frequency = (arr, item) => 
{
    let count = 0;
    for (let i = 0; i <= arr.length; i++) 
    {
        if (arr[i] === item) 
        {
            count++;
        }
    }
    return count;
    
};



printOut("1 frequency is: " + frequency(ArrayPart8, 1).toString());
printOut("2 frequency is: " + frequency(ArrayPart8, 2).toString());
printOut("3 frequency is: " + frequency(ArrayPart8, 3).toString());
printOut("4 frequency is: " + frequency(ArrayPart8, 4).toString());
printOut("5 frequency is: " + frequency(ArrayPart8, 5).toString());
printOut("6 frequency is: " + frequency(ArrayPart8, 6).toString());
printOut("7 frequency is: " + frequency(ArrayPart8, 7).toString());
printOut("8 frequency is: " + frequency(ArrayPart8, 8).toString());
printOut("9 frequency is: " + frequency(ArrayPart8, 9).toString());
printOut("10 frequency is: " + frequency(ArrayPart8, 10).toString());
printOut("11 frequency is: " + frequency(ArrayPart8, 11).toString());
printOut("12 frequency is: " + frequency(ArrayPart8, 12).toString());
printOut("13 frequency is: " + frequency(ArrayPart8, 13).toString());
printOut("14 frequency is: " + frequency(ArrayPart8, 14).toString());
printOut("15 frequency is: " + frequency(ArrayPart8, 15).toString());
printOut("16 frequency is: " + frequency(ArrayPart8, 16).toString());
printOut("17 frequency is: " + frequency(ArrayPart8, 17).toString());
printOut("18 frequency is: " + frequency(ArrayPart8, 18).toString());
printOut("19 frequency is: " + frequency(ArrayPart8, 19).toString());
printOut("20 frequency is: " + frequency(ArrayPart8, 20).toString());




printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let array2D = [];


for (let i = 0; i < 5; i++) 
{
    let row = [];  
    for (let j = 0; j < 9; j++) 
    {
        row.push(`Row ${i+1}, Col ${j+1}`);
    }
    array2D.push(row);  
}




for (let i = 0; i < 5; i++) 
{
    let rowString = ''; 
   
    for (let j = 0; j < 9; j++) 
    {
        rowString += array2D[i][j] + "\t";  
    }
    printOut(rowString); 
}


printOut(newLine);
