# QA challenge

## Escolher uma ferramenta para automatizar testes à seguinte Api REST, explica o porquê dessa escolha. https://gorest.co.in/
Escolhi o Cypress.js porque tenho mais de três anos de experiência com essa ferramenta e possuo profundo conhecimento de seu uso. Embora o Cypress seja amplamente conhecido por testes de UI, ele oferece ótimo suporte para testes de APIs.
Idealmente, a escolha de uma ferramenta deveria levar em conta a padronização da linguagem usada para diferentes tipos de testes, como testes de UI, API e até mesmo Load Testing (se possível). Isso facilita a adaptação dos testers ao alternarem entre diferentes tipos de testes, aumentando a eficiência da equipe e simplificando o processo de manutenção de código.


2. Explica os use case de teste;
Schema Validation - garantir que a resposta segue o formato correto validando os tipos de dados, campos obrigatórios e estrutura apresentável  
HTTP Validation - garantir que as respostas retorna o código de http correto como por exemplo 200 que representa OK e 201 que representa Criado
Field Validation - Validação de campos específicos como por exemplo enumeradores como por exemplo (status)
Date Validation - Validação de datas se seguem o formato correto e se é uma data válida


## Explica os use case de teste;

- Schema Validation - garantir que a resposta segue o formato correto validando os tipos de dados, campos obrigatórios e estrutura apresentável  
- HTTP Validation - garantir que as respostas retorna o código de http correto como por exemplo 200 que representa OK e 201 que representa Criado
- Field Validation - Validação de campos específicos como por exemplo enumeradores como por exemplo (status)
- Date Validation - Validação de datas se seguem o formato correto e se é uma data válida

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
