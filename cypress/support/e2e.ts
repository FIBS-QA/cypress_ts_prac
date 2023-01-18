// load the global Cypress types
/// <reference types="cypress" />

/**
 * Adds custom command "cy.collectTypes" to the global "cy" object
 *
 * @example cy.collectTypes({name: "John", age: 30, height: 183}, "number").should('equal', 2)
 */
Cypress.Commands.add('collectTypes', (obj: Object, expectedType: string): number => {
    let n = 0;

    Object.values(obj).forEach((value) => {
        if (typeof value === expectedType) {
            n++
        }
    });

    return n;
})

/**
 * Adds custom command "cy.checkIfObjectContainsExpectedKey" to the global "cy" object
 *
 * @example cy.checkIfObjectContainsExpectedKey({name: "John", age: 30, height: 183}, "name").should('equal', true)
 */
Cypress.Commands.add('checkIfObjectContainsExpectedKey', (obj: Object, expectedKey: String): Boolean => {
    for (let keys of Object.keys(obj)) {
        if (keys === expectedKey) {
            return true;
        }
    }

    return false;
})

/**
 * Adds custom command "cy.checkIfObjectContainsStringArray" to the global "cy" object
 *
 * @example cy.checkIfObjectContainsStringArray(["John", "Doe"], "name").should('equal', true)
 */
Cypress.Commands.add('checkIfObjectContainsStringArray', (arr: Array<String>): Boolean => {
    for (let item of arr) {
        if (typeof item !== "string") {
            return false;
        }
    }

    return true;
})

/**
 * Adds custom command "cy.isAscendingById" to the global "cy" object
 *
 * @example cy.isAscendingById([{"id": 1}, {"id": 2}, {"id": 3}]).should('equal', true)
 */
Cypress.Commands.add('isAscendingById', (arr: Array<Object>): Boolean => {
    return arr.every(function (x: { id: number }, i) {
        return i === 0 || x.id >= (arr[i - 1] as any).id;
    });
})

/**
 * Adds custom command "cy.sumIngredients" to the global "cy" object
 *
 * @example cy.sumIngredients([{"value": 1.5}, {"value": 1.5}, {"value": 1.5}]).should('equal', 4.5)
 */
Cypress.Commands.add('sumIngredients', (arr: Array<Object>): Number => {
    return arr.reduce((a, object) => {
        return a + object["amount"]["value"];
    }, 0);
})