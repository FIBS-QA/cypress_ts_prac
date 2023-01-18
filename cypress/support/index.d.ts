// describe custom Cypress commands in this file

// load the global Cypress types
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to return how many "expectedType" values are in the given object
     * @example cy.collectTypes({name: "John", age: 30, height: 183}, "number").should('equal', 2)
     */
    collectTypes(obj: Object, expectedType: string): any

    /**
     * Custom command to return true/false if an object contains an expected key
     * @example cy.checkIfObjectContainsExpectedKey({name: "John", age: 30, height: 183}, "name").should('equal', true)
     */
    checkIfObjectContainsExpectedKey(obj: Object, expectedKey: string): any

    /**
     * Custom command to return true/false if an array contains only string items
     * @example cy.checkIfObjectContainsStringArray(["John", "Doe"]).should('equal', true)
     */
    checkIfObjectContainsStringArray(arr: Array<String>): any

    /**
     * Custom command to return true/false if an array is ascending by it's objects id
     * @example cy.isAscendingById([{"id": 1}, {"id": 2}, {"id": 3}]).should('equal', true)
     */
    isAscendingById(arr: Array<Object>): any

    /**
     * Custom command to return the sum of an objects property
     * @example cy.sumIngredients([{"value": 1.5}, {"value": 1.5}, {"value": 1.5}]).should('equal', 4.5)
     */
    sumIngredients(arr: Array<Object>): any
  }
}