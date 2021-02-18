
function generateMarkdown(response){
  const { title, name, description, license, command, contribute, github, email, about } = response 
return `
  
# ${title}
## by ${name}
_______________________________________________________________
### Description 
* ${description}
  
#### License : 
<img src='https://img.shields.io/badge/license-${license}-blue' alt="license-badge">
  
* Info on license: https://opensource.org/licenses/${license}
_______________________________________________________________
#### Commands Needed
* ${command}

#### Need to know:
* ${about}

#### Open to contributions? 
* ${contribute}
_______________________________________________________________
### Questions? 
#### Contact Me \n
<img src='https://img.shields.io/badge/github-${github}-orange' alt="github-badge">\n
* https://github.com/${github}
* ${email}

TABLE OF CONTENTS 
_______________________________________________________________
* [Description](#description)
* [License](#license)
* [Command](#commands)
* [Need To Know](#need-to-know)
* [Questions?](#questions?)
`
;

}

module.exports = generateMarkdown;
