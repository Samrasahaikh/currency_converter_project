#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue(" \n \t\t>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
console.log(chalk.blue.bold.italic("\n \t\t========== WELCOME TO CURRENCY CONVERTOR PROJECT =========="));
console.log(chalk.blue(" \n \t\t>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));

const currency: any = {
    USD: 1,
    PKR: 278.43,
    SAR: 3.75,
    EUR: 0.93,
    AFN: 71.00,
    AUD: 1.49,
    TRY: 32.55,
    YER: 250.35,
    XOF: 609.50,
    AWG: 1.80,
    AZN: 1.70,
    INR: 83.51,
    HKD: 7.81,
    IRR: 42087.50,
    IQD: 1310.00,
    JPY: 161.56,
    NPR: 133.60,
    ANG: 1.80,
    NZD: 1.64,
    OMP: 0.38,
    QAP: 3.64,
    RUB: 87.85,
};
let userSelection = await inquirer.prompt(
    [
        {
            name: "From",
            message: chalk.magenta.bold("Select Your Currency Wich You Want To Convert"),
            type: "list",
            choices: ["USD", "PKR", "SAR", "EUR", "AFN", "AUD", "TRY", "YER", "XOF", "AWG", "AZN", "INR","HKD", "IRR", "IQD", "JPY", "NPR", "ANG", "NZD", "OMP", "QAP", "RUB"]    
        },
        {
            name: "To",
            message: chalk.cyan.bold("Select Your Currency In Which You Want To Convert"),
            type: "list",
            choices: ["USD", "PKR", "SAR", "EUR", "AFN", "AUD", "TRY", "YER", "XOF", "AWG", "AZN", "INR","HKD", "IRR", "IQD", "JPY", "NPR", "ANG", "NZD", "OMP", "QAP", "RUB"]
        },
        {
            name : "Amount",
            message: chalk.magenta.bold("How Much Amount You Want To Convert"),
            type: "number",
        },

    ]
);

let fromList = currency [userSelection.From]; //pkr 278.43
let toList = currency [userSelection.To]; //1
let amount = userSelection.Amount; // 1000

let bassAmount = amount / fromList; //1000 / 278.43
let convertedAmount = bassAmount * toList ;
let result = Math.round(convertedAmount);

console.log(chalk.yellow.bold(result));