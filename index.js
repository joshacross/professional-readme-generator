const generateSite = require('./utils/generate-readme.js');
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-readme');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the Project Title of your application? (Required)',
        validate: projectTitleInput => {
          if (projectTitleInput) {
            return true;
          } else {
            console.log('Please enter a title for your project...');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter a short description of your project. Remember, to explain the what, why and how, motivation, and why you built this project. (Required)',
        validate: projectDescriptionInput => {
          if (projectDescriptionInput) {
            return true;
          } else {
            console.log('Description field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'problemSolution',
        message: 'What problem does your application solve? (Required)',
        validate: problemSolutionInput => {
          if (problemSolutionInput) {
            return true;
          } else {
            console.log('Problem/Solution field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'learning',
        message: 'What did you learn about in this project? (Required)',
        validate: learningInput => {
          if (learningInput) {
            return true;
          } else {
            console.log('Learning field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'functionality',
        message: 'What makes your project stand out? (Required)',
        validate: functionalityInput => {
          if (functionalityInput) {
            return true;
          } else {
            console.log('Functionality field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Express', 'React', 'GraphQL', 'Apollo', 'MongoDB', 'Mongoose', 'mySQL', 'Sequelize', 'template-engine' ]
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions on how to install your project. (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Installation field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'functionality',
        message: 'What makes your project stand out? (Required)',
        validate: functionalityInput => {
          if (functionalityInput) {
            return true;
          } else {
            console.log('Description field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Can others contribute to your project?',
        default: false
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How may others contribute to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests have you performed on this project? (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Test field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'firstName',
        message: 'What is your first name? (Required)',
        validate: firstNameInput => {
          if (firstNameInput) {
            return true;
          } else {
            console.log('Please provide your first name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'What is your last name? (Required)',
        validate: lastNameInput => {
          if (lastNameInput) {
            return true;
          } else {
            console.log('Please provide your last name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: lastNameInput => {
          if (lastNameInput) {
            return true;
          } else {
            console.log('Please provide your last name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your Github Username? (Required)',
        validate: gitHubUsernameInput => {
          if (gitHubUsernameInput) {
            return true;
          } else {
            console.log('Github Username cannot be blank.');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'dataLicense',
        message: 'What license is your project under? (Required)',
        choices: ['MIT', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense', 'other']
      },
      {
        type: 'input',
        name: 'licenseLink',
        message: 'What is the link to this license? (Required)',
        validate: licenseLinkInput => {
          if (licenseLinkInput) {
            return true;
          } else {
            console.log('License Link cannot be blank.');
            return false;
          }
        }
      }
    ]);
  };
  
  promptUser()
  .then(readmeData => {
    return generatePage(readmeData);
  })
  .then(readme => {
    return writeFile(readme);
  })
  .catch(err => {
    console.log(err);
  });