const inquirer = require("inquirer");
const fs = require("fs");


const inqActions = {
    type: 'list',
    name: 'actions',
    message: "Hello! Thank you for using Employee Tracker, To begin, select from the options below:",
    choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update and employee's role",

    ],
},
{
    

}