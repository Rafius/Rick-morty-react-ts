describe("Rick app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render the main page", () => {
    cy.contains("Search your favorite character!");
  });

  it("Navigate to the episodes", () => {
    cy.contains("Episodes").click();
  });

  it("Navigate to the locations", () => {
    cy.contains("Locations").click();
  });

  it("Click on rick sanchez", () => {
    cy.contains("Rick Sanchez").click();
  });

  it("Navigate to second page", () => {
    cy.contains("2").click();
  });

  it("Filter by rick", () => {
    cy.get("input:first").type("rick");
  });
});
