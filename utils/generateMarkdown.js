
// function  for generating license badge

function renderLicenseBadge(license){
  if (license !== none){
    return`![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}




function generateMarkdown(data) {


  return ` ${renderLicenseBadge(data.license)}
  
  # ${data.title}

  ## DESCRIPTION 

  ${data.descripton}

  ## TABLE OF CONTENTS

  * [LICENSE](#license)

  * [CONTRIBUTING](#contributing)

  * [TESTS](#tests)

  *[QUESTIONS](#questions)

  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}

  ## LICENSE
  This project is licensed under the ${data.license} license

  ## CONTRIBUTING
  ${data.contribututing}

  ## QUESTIONS
  Please contact ${data.email} regarding any questions. 

  Github username: ${data.username}

`;


}

module.exports = generateMarkdown;
