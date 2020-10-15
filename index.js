
var inquirer = require("inquirer")
var fs = require("fs")
var path = require("path")
var generateMarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What the title of your application",
        name: "title"
      },
      {
        type: "input",
        message: "Please provide a brief description",
        name: "description"
      },
      {
        type: "input",
        message: "What command needs to run to install dependencies?",
        name: "installation",
        default: "npm install"
      },
      {
        type: "input",
        message: "What does the user need to know about using this repo",
        name: "usage"
      },
    
      {
        type: "checkbox",
        message: "What type of license would you like your project to have ",
        name: "license",
        choices: [
          "MIT", 
          "APACHE2.0", 
          "GPL3.0", 
          "BSD3", 
          "None",
        ]
      },

      {
        type: "input",
        message: "What does your user need to know about contributing to this repo?",
        name: "contributing"
      },

      {
        type: "input",
        message: "What command is needed to run tests?",
        name: "tests"
      },
      
      {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your Email Address?",
        name: "email"
    },

      

];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(response => {
    writeToFile("ExampleREADME.md", generateMarkdown(response))

  })

}

// function call to initialize program
init();
