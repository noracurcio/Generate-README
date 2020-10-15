
var inquirer = require("inquirer")
var fs = require("fs")
var path = require("path")
var generateMarkdown = require("./utils/generateMarkdown")
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
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(response => {
    writeToFile("Example.md", generateMarkdown(response))

  })

}

// function call to initialize program
init();
