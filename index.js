const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')


// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
   
}

// function call to initialize program
init();
promptUser();

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Describe your project",
            name: "description"
        },
        {
            type: "checkbox",
            message: "What kind of license should your project have?",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3",
            ],
            name: "license"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "command"
        },
        {
            type: "input",
            message: "What does the user need to know about this repo?",
            name: "description"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "description"
        },
    ])
}