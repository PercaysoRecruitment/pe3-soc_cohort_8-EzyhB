describe("going through the userflow for our application", () => {
  it("should be able to interact with all the app features", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000).then(() => cy.get('[alt="theme switch button"]').click());
    cy.wait(1000).then(() => cy.get('[alt="theme switch button"]').click());

    cy.wait(1000).then(() =>
      cy
        .get('[placeholder="Search for news..."]')
        .clear()
        .type("pair")
        .get('button[type="submit"]')
        .click()
    );

    cy.wait(2000).then(() =>
      cy
        .get('[placeholder="Search for news..."]')
        .clear()
        .type("orange")
        .get('button[type="submit"]')
        .click()
    );
  });
});
