const readmedata = require('../index')

// create the README
const README = readmeText => {
    if (!readmeText) {
      return '';
    }

    return `
    # ${projectTitle}

    ## Description
    ${projectDescription}
    <br />
    <br />
    ### Solution
    ${problemSolution}

    ### Findings
    ${learning}

    ## Functionality
    * ${functionality}

    ## Languages
    * ${languagesArr
    .ma(({ languages }) => {
      return `${languages.join(', ')}`;
    })
    .join('')}

    ## Table of Contents
    * [Get Started] (#get-started)
    * [Instructions] (#instructions)
    * [Contribution] (#contribution)
    * [Questions] (#questions)
    * [Contact] (#contact)
    * [License] (#license)

    ## Get Started
    * ${installation}

    ## Instructions
    * ${instructions}

    ## Contribution
    * If you would like to contribute to this project, please follow these guides:
    ** ${contribution}
    ## Tests
    * ${tests}
    ## Questions
    * For further questions, feel free to reach out to ${firstName} ${lastName} directly via email at ${email}.
    
    ${firstName} ${lastName}
    /${title}/
    Github: https://github.io/${gitHubUsername}
    Email: ${email}

    ## Licenses
    The following application is under the ${dataLicense}.

    For further information, please visit ${licenseLink}).

    © ${new Date().getFullYear()} ${firstName} ${lastName}, All Rights Reserved
        <section class="my-3" id="about">
          <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
          <p>${aboutText}</p>
        </section>
    `;
  };

module.exports = README;