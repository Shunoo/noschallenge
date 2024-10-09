describe('API Tests - Todos', () => {
  
    it('Validates the response JSON schema', () => {
      cy.request('https://gorest.co.in/public/v2/todos').then((response) => {
        // Validar que a resposta vem em formato array
        expect(response.body).to.be.an('array');
        
        // Validar que cada item do array contem os campos corretos e que cada campo tem o tipo correto
        response.body.forEach((todo) => {
          // Validar que os campos existem em cada todo
          expect(todo).to.have.all.keys('id', 'user_id', 'title', 'due_on', 'status');  
          // Validar que id é do tipo número
          expect(todo.id).to.be.a('number');      
          // Validar que user_id é do tipo número   
          expect(todo.user_id).to.be.a('number');    
          // Validar que title é do tipo string
          expect(todo.title).to.be.a('string');     
          // Validar que due_on é do tipo string 
          expect(todo.due_on).to.be.a('string');     
          // Validar que status é do tipo string
          expect(todo.status).to.be.a('string');     
        });
      });
    });
  
    // Teste falha porque existe um todo que nao tem o status completed
    it('Validates that all todos have status "completed"', () => {
        cy.request('https://gorest.co.in/public/v2/todos').then((response) => {
          // Validar cada todo se tem o status como "completed"
          response.body.forEach((todo) => {
            expect(todo.status).to.eq('completed');
          });
        });
      });


      it('Validates the "due_on" field is a valid date', () => {
        cy.request('https://gorest.co.in/public/v2/todos').then((response) => {
          response.body.forEach((todo) => {
            // Converter o campo todo.due_on numa data
            const date = new Date(todo.due_on);
      
            // Validar que o campo due_on é uma data válida
            // Tentar obter o timestamp da data convertida pelo due_on e verificar que é data válida
            expect(!isNaN(date.getTime())).to.be.true;
          });
        });
      });
      

  });
  