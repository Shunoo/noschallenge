# QA challenge

## Escolher uma ferramenta para automatizar testes à seguinte Api REST, explica o porquê dessa escolha. https://gorest.co.in/
I chose Cypress.js because I have over three years of experience with this tool and possess advance knowledge of its usage. Although Cypress is widely known for UI testing, it also offers great support for API testing.
Ideally, in the choice of a tool, we should consider the standardization of the language used for different types of testing, such as UI testing, API testing, and even load testing (if possible). This facilitates testers adaptation when switching between different types of tests, increasing team efficiency and simplifying the code maintenance process.


## Explica os use case de teste;

- Schema Validation - Ensure that the response follows the correct format by validating data types, required fields, and the overall structure.
- HTTP Validation - Ensure that the responses return the correct HTTP status codes, such as 200 for OK and 201 for Created.
- Field Validation - Validate specific fields, such as enumerators like status.
- Date Validation - Validate that dates follow the correct format and are valid dates

## Explica e justifica uma implementação de testes de carga a esta API;
I would choose k6 because, like Cypress, it uses JavaScript as the programming language.
The tool is open-source and easy to configure.
It integrates with CI/CD, meaning that load tests can be part of the pipelines.
The reports are detailed and easy to understand, allowing for quick and intuitive analysis.

## How to run the tests

To run the tests your machine requires the following steps:

- install nodeJS
- after instalation of nodejs you need to open terminal and go to the folder `cd nameOfFolder`
- once the terminal is in the folder directory you need to install dependencies by running `npm install`
- once the dependencies are installed you can the test by 2 modes
 - with Cypress ui = `npx cypress open`
    - If you open with UI mode you need to select e2e testing 
    - select the browser
    - select the test file
 - with headless mode = `npx cypress run`
    - the resulsts are in the folder named `videos`

## Load Testing

Load testing has the objective to check how the API respondes withing a significant amount of traffic simulating real time usage in large scale.

With these tests we can optimize, improve and prevent our infrastructure to break 

## How to use
To use the load testing you need to install the k6

- Open terminal
- write `winget install k6 --source winget`
- In the terminal write `k6 run k6/todos.js`



Source: https://grafana.com/docs/k6/latest/set-up/install-k6/~


## How to implement on the pipeline
 I don't have much experience in implemeting the pipelines in my professional carreer all the pipeliens where already created but i believe this is a template to implement one

[template ci cd](https://github.com/Shunoo/noschallenge/blob/main/ci_cd.template.txt)

- Continous validation = We can push new features to the pipeline and the regression will always run garating that everything is tested 
- Automation and quick feedback = withing a click of a push in git the pipeline will run and we can have a quick feedback if anything has been broken or not