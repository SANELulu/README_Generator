
function generateMarkdown(response){
  const { title, name, description, license, command, contribute, github, email, about } = response 
  return `
  
  #${title}
  ## by ${name}
_______________________________________________________________
  ### Description
  *${description}
  
  #### License : 
  <img src='https://img.shields.io/badge/license-${license}-blue' alt="badge">
  
  * Info on license: https://opensource.org/licenses/${license}
_______________________________________________________________
  #### Commands Needed
  * ${command}

  #### Need to know:
  * ${about}

  #### Contributions 
  * ${contribute}
_______________________________________________________________
  #### Contact Me 
  * https://github.com/${github}
  * ${email}
`
;

}

module.exports = generateMarkdown;
