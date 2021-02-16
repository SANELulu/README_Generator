
function generateMarkdown(response){
  
  return `
  ## my name is ${response.name}
  ## ${response.title}
  ## Description
  ${response.description}
  ## License 
  ${response.license}
  ## Commands Needed
  ${response.command}
  ## Need to know
  ${response.about}
  ## Contributions 
  ${response.contribute}
  ## Contact Me 
  ${response.github}
  ${response.email}
`
;

}

module.exports = generateMarkdown;
