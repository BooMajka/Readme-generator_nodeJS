// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project title!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "languages",
    message:
      "What is the technology used in your project? (Check all that apply)",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Bootstrap",
      "Node",
    ],
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description",
    default: false,
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the steps of installation",
    default: false,
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter the contribution guidelines",
    default: false,
  },
  {
    type: "input",
    name: "test",
    message: "Enter the test instructions",
    default: false,
  },
  {
    type: "confirm",
    name: "confirmAddLicense",
    message: "Would you like a license for your application?",
    default: true,
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username (Required)",
    when: ({ confirmAddLicense }) => confirmAddLicense,
    validate: (usernameInput) => {
      if (usernameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  }
];


const writeToFile = (file, data) => {
  return fs.writeFile(file, data, (err) => {
      if (err) return console.error(err);
      });
};

const init = () => {
    inquirer.prompt(questions)
    .then((responsesData) => {
        writeToFile("README.md", generateMarkdown(responsesData));
    });
}

    init();




	



