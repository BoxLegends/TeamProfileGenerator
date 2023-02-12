const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const path = require("path");
const generateTeam = require("./src/template.js");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
teamArray = []; 



function makeTeam() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "add all of the employees of your team!",
          name: "buildTeamPrompt",
          choices: [
            "Engineer",
            "Manager",
            "Intern",
            "complete team.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
        case "Engineer":
            addEngineer();
                break;
        case "Manager":
            addManager();
                break;
        case "Intern":
            addIntern();
                break;
        default:
                htmlBuilder();
        }
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internEmail",
          message: "What is the team members email address?",
        },

        {
          type: "input",
          name: "internName",
          message: "Please enter a full name",
        },

        {
          type: "input",
          name: "internId",
          message: "What is the employee's full ID number?",
        },

        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internEmail,
          answers.internName,
          answers.internId,
          answers.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerEmail",
          message: "What is the managers email address?",
        },
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's full name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the managers ID number?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the managers office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerEmail,
          answers.managerName,
          answers.managerId,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        createTeam();
      });
  }


  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineers email address?",
        },
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's full name?",
        },

        {
          type: "input",
          name: "engineerId",
          message: "What is the engineers ID number?",
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "What is their GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerEmail,
          answers.engineerName,
          answers.engineerId,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }

  function htmlBuilder() {
    console.log(" Your team has been built!");

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");

  }
   createTeam();
}

makeTeam();