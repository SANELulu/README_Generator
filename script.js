const inquirer = require('inquirer');
const fs = require('fs');
const util = require('./util/generateMarkdown.js')


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



inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
            validate: (value)=> { if (value){return true} else {return "Input your name, please."}},
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "github",
            validate: (value)=> { if (value){return true} else {return "Input your gitHub username, please."}},
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
            validate: (value)=> { if (value){return true} else {return "Input your email, please."}},
        },
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title",
            validate: (value)=> { if (value){return true} else {return "Input the title, please."}},
        },
        {
            type: "input",
            message: "Describe your project",
            name: "description",
            validate: (value)=> { if (value){return true} else {return "Input your description, please."}},
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
            name: "license",
            validate: (value)=> { if (value){return true} else {return "Choose the licence, please."}},
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "command",
            validate: (value)=> { if (value){return true} else {return "Input the command, please."}},
        },
        {
            type: "input",
            message: "What does the user need to know about this repo?",
            name: "about",
            validate: (value)=> { if (value){return true} else {return "Input what the user needs to know, please."}},
        },
        {
            type: "input",
            message: "Is this repo open to contributions? If so, what does the user need to know about contributing to the repo?",
            name: "contribute",

        },
    ])

.then((data)=>{
    console.log(data)
    const {name, github, email, title, description, license, command, about, contribute} = data
    
    const template = `## ${name}
    ## ${title}
    ## Description 
    ${description}
    ## License 
    ${license}
    ## Commands Needed
    ${command}
    ## Need to know
    ${about}
    ## Contributions 
    ${contribute}
    ## Contact Me 
    ${github}
    ${email}`

    const filename = `${data.name.toLowerCase().split(' ').join('')}`;
    fs.writeFile(`filename`, template, (err)=>{
        err ? console.log(err) : ''
    })

})