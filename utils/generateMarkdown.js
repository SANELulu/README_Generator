// const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('util');
function generateMarkdown(data){
  
  return `
  ## my name is ${data.name}
  ## ${data.title}
  ## Description
  ${data.description}
  ## License 
  ${data.license}
  ## Commands Needed
  ${data.command}
  ## Need to know
  ${data.about}
  ## Contributions 
  ${data.contribute}
  ## Contact Me 
  ${data.github}
  ${data.email}`
;
}

module.exports = generateMarkdown;
