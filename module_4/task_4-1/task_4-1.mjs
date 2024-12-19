"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const accountType = {
    Normal: "Brukskonto", 
    Savings: "Sparekonto", 
    Credits: "Kreditkonto", 
    Pension: "Pensionskonto"
}

const CurrencyType = {
    NOK: {value: 1.0000, name: "Norske kroner", denomination: "kr"},
    EUR: {value: 0.0985, name: "Europeiske euro", denomination: "€"},
    USD: {value: 0.1091, name: "Amerikanske dollar", denomination: "$"},
    GBP: {value: 0.0847, name: "Britiske pund", denomination: "£"},
    INR: {value: 7.8309, name: "Indiske rupee", denomination: "₹"},
    AUD: {value: 0.1581, name: "Australske dollar", denomination: "A$"},
    PHP: {value: 6.5189, name: "Filippinske peso", denomination: "₱"},
    SEK: {value: 1.0580, name: "Svenske kroner", denomination: "kr"},
    CAD: {value: 0.1435, name: "Canadiske dollar", denomination: "C$"},
    THB: {value: 3.3289, name: "Thailandske baht", denomination: "฿"}
};


function part1(){
    const keys = Object.keys(accountType);
    let output ="";
    for(let i =0;i<4;i++){
    output += accountType[keys[i]] + ", ";
    }
    printOut(output.slice(0,-1));
}

part1();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class BankAccount
{

    #PrivatType;
    #PrivatBalance;
    #PrivatWithdrawCount;
    #PrivatCurrencyType;
    conversionRate;
    

    constructor(accountType)
    {
        this.#PrivatType = accountType;
        this.#PrivatBalance = 0;
        this.#PrivatWithdrawCount = 0;
        this.#PrivatCurrencyType = CurrencyType.NOK;
    }
    
    toString()
    {
        return this.#PrivatType;
    }

    setType(accountType)
    {
        printOut("account is changed form "+this.#PrivatType+" to "+accountType);
        this.#PrivatType = accountType;

       
    }

    getBalance()
    {
        return this.#PrivatBalance;
    }

    deposit(amount, currencyType)
    {
        
        if(currencyType == undefined)
        {
            currencyType = CurrencyType.NOK
        }
        printOut("Deposit of " + amount + currencyType.denomination);

        if (currencyType !== this.#PrivatCurrencyType) 
        {
            this.conversionRate = this.#currencyConverter(currencyType)
            amount /= this.conversionRate;
            
        }
      
        this.#PrivatBalance += amount;
        printOut("New balance is " + this.#formatCurrency(this.#PrivatBalance) + this.#PrivatCurrencyType.denomination);
    }
   
    withdraw(aAmount,currencyType)
    {
        if(this.#PrivatType != "Sparekonto")
        {
            this.#PrivatWithdrawCount = 0;
        }

        if(currencyType == undefined)
            {
                currencyType = CurrencyType.NOK
            }

        switch(this.#PrivatType)
        {
            case "Sparekonto":
                
                if(this.#PrivatWithdrawCount>=3)
                {
                    printOut("Withdrawal limit reached for Savings account.");
                    return;
                }
                this.#PrivatWithdrawCount +=1;
                break;

            case "Pensionskonto":
                printOut("Withdrawals are not allowed from Pension accounts.");
                return;
                break;

            default:
                break;
        }

        printOut("Withdraw of "+aAmount+currencyType.denomination);
        if (currencyType !== this.#PrivatCurrencyType) 
            {
                this.conversionRate = this.#currencyConverter(currencyType)
                aAmount /= this.conversionRate;
                
            }

        this.#PrivatBalance -=aAmount;
        printOut("My account balance is "+this.#PrivatBalance+this.#PrivatCurrencyType.denomination);

        
    }

    setCurrencyType(CurrencyType)
    {
        if(this.#PrivatCurrencyType !== CurrencyType)
        {
            this.conversionRate = this.#currencyConverter(CurrencyType)
            this.#PrivatBalance *= this.conversionRate;
            this.#PrivatCurrencyType = CurrencyType;
            printOut("Currency type set to " + this.#PrivatCurrencyType.name);
            printOut("New balance is "+this.#formatCurrency(this.#PrivatBalance)+this.#PrivatCurrencyType.denomination);
        }   
        return;
        
    }

    #formatCurrency(amount) {
        return parseFloat(amount).toFixed(2);
    }

    #currencyConverter(currencyType)
    {
        return CurrencyType.NOK.value / this.#PrivatCurrencyType.value * currencyType.value;
    }
   

}
const myAccount = new BankAccount(accountType.Normal)
printOut("myAccount is "+myAccount.toString());
myAccount.setType(accountType.Savings)
printOut("myAccount is "+myAccount.toString());



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100)

myAccount.withdraw(25)

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.withdraw(25)
myAccount.withdraw(25)
myAccount.withdraw(25)
myAccount.setType(accountType.Pension)
myAccount.withdraw(1)
myAccount.setType(accountType.Savings)
myAccount.withdraw(15)
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.setCurrencyType(CurrencyType.INR)



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType(CurrencyType.NOK)


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

myAccount.deposit(100,CurrencyType.USD)
myAccount.withdraw(100, CurrencyType.USD)


printOut(newLine);
