const generateSite = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the Project Title of your application? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a title for your project...');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter a short description of your project. Remember, to explain the what, why and how, motivation, and why you built this project. (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Description field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What problem does your application solve? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Description field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What did you learn about in this project? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Description field cannot be blank. Please try again.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What makes your project stand out? (Required)',
        validate: githubInput => {
          if (githubInput) {
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
        message: 'How may others contribute?',
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
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
