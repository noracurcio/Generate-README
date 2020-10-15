
// function  for generating license badge

function renderLicenseBadge(lincense){
  if (license !== none){
    return`![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// function for generating link from table of contents to content

// generating a license content to appear on a page.

// function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}

  ## DESCRIPTION 

  ${data.descripton}

  ## TABLE OF CONTENTS

  * [INSTALATION](#intallation)

  * [USAGE](#usage)

  * [CONTRIBUTORS](#contributors)

`;


}

module.exports = generateMarkdown;
