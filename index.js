const generateSite = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site.js');
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
          if (funtionalityInput) {
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
          if (funtionalityInput) {
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
          if (lincenseLinkInput) {
            return true;
          } else {
            console.log('License Link cannot be blank.');
            return false;
          }
        }
      }
    ]);
  };
  
  const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New README
  =================
  `);
  
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your project? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
        },
        {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project?',
          default: false
        }
      ])
      .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };
  
  promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {1
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
