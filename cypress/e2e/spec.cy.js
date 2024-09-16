describe('Estudando automatização com Cypress', () => {
  it('Acessando a página e verificando o nome de um campo', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Automation');
    cy.get('h1'); // acessando a tag h1
    cy.get('h1').contains('Automation'); //boa prática de também validar a tag
    cy.get('.features_items');
    cy.get('div.features_items');
    cy.get('div.recommended_items');
    //cy.get('div.id = women');
  })

  it('Acessar página de login, tentar acesso com senha ou email errado e informar esta situação',()=>{
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').should('have.attr','href','/login').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('[data-qa="login-email"]')
    .type('teste@email.com')
    .should('be.visible')
    .and('have.attr','placeholder','Email Address')
    .and('have.prop','required');
    // tratando sobre a senha
    cy.get('[data-qa="login-password"]').type('123456').should('have.value','123456');
    cy.get('[data-qa="login-button"]').should(($button)=>{
      expect($button).to.have.text('Login');
      expect($button).to.contain('Login');
      expect($button).to.be.visible;
      expect($button).to.have.attr('type','submit');
      expect($button).to.have.class('btn');
    })
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Your email or password is incorrect!');
  })

it.only('Acessar página de login e realizar acesso com sucesso',()=>{
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.get('[data-qa="login-email"]').type('ro85pereira@hotmail.com');
    cy.get('[data-qa="login-password"]').type('SalazarVasco');
    cy.get('[data-qa="login-button"]').click();
  })

  it('Adicionar produto no carrinho de compras',()=>{
    cy.visit('/');
    cy.get('[data-product-id="2"]').contains('Add to cart').click();
    cy.get('button.close-modal',{timeout:5000}, {force:true}).click();
  })

  it('Acessando o carrinho de compras',()=>{
    cy.visit('/');
    cy.get('div.shop-menu').contains('Cart').should('have.attr','href','/view_cart').click();
   
  })

})