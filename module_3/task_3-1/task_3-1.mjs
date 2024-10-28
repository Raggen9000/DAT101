"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
const min = 6;
const max = 10;
let wakeUpTime = Math.floor(Math.random()*(max - min + 1)) +min;

if (wakeUpTime === 7) {
  printOut("I woke up at "+ wakeUpTime);
  printOut("I can take the bus to school.");
} else if (wakeUpTime===8){
  printOut("I woke up at "+wakeUpTime);
  printOut("I can take the train to school");
}else if (wakeUpTime<7){
  printOut("I woke up at "+wakeUpTime);
  printOut("I woke up to early, i will go back to sleep");
}else {
  printOut("I woke up at "+wakeUpTime);
  printOut("I have to take the car to school");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const number1 = -1;
if (number1 ===0){
  printOut("Value is "+ number1);
  printOut("0 is nether postitive or negative");
} else if (number1 > 0){
  printOut("Value is "+number1);
  printOut(number1+" is postive");
} else{
  printOut("Value is "+number1);
  printOut(number1+" is negative");
}
printOut(newLine);



printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let fotosize = Math.floor((Math.random()*8) + 1);
printOut("task 6 foto size is: "+fotosize.toString()+"MP");
if (fotosize >=6){
  printOut("Image is to large");
}else if(fotosize<=3){
  printOut("Image is to small");
}else{
  printOut("Thank you!");
}
printOut(newLine);



printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
  "June", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut ("Month is: "+monthName);  

if (monthName.includes("r")){
    printOut("You must take vitamin D");
}else{
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName === "April"||monthName==="June"||monthName==="September"||monthName=="November"){
  printOut("It is 30 days in "+monthName);
} else if (monthName == "February"){
  printOut("It is 28 days in "+monthName);
} else {
  printOut("It is 31 days in "+monthName);
} 
// monthName == "November"
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName.includes("March")|| monthName.includes("May")) {
  printOut("The gallary is closed in "+monthName+", Sorry");
} else if (monthName.includes("April")) {
  printOut("The gallary is open, use the bulding next door");
} else {
  printOut("The gallary is open in "+monthName+", welcome!");
}

printOut(newLine);
