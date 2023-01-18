PunkAPI's testsuites implemented in Cypress, TS

(PunkAPI: https://punkapi.com/documentation/v2)

Testsuite contains 17 testcase and 50+ tests, all API related

Here you can find examples how to:
 - send request to the server and save it as a cypress alias(with that you can work on the response and test it)
 - check how to validate if an api response contains the expected length of 
    - arrays
    - strings
    - numbers
    - etc
 - check how to validate if an api response contains the expected types
 - check how to test against a regex (f.e. a date)
 - check if an object contains the expected properties, types etc..
 - find different tests with numbers and strings of the response
 - send request queries to the server and validate if the response is the expected
 - filter an array and validate it
 - see the diff between cy.each and ts forEach
 - save the api response to file (cypress fixture) and validate it
 - to validate if an array's sorting is ascending by id

Also you can find how to implement Typescript custom commands in cypress (cypress/e2e/support/e2e.ts)
 - I implemented some API related TS custom command, like:
    - collectTypes
        * Custom command to return how many "expectedType" values are in the given object
        * @example cy.collectTypes({name: "John", age: 30, height: 183}, "number").should('equal', 2)
    - checkIfObjectContainsExpectedKey
        * Custom command to return true/false if an object contains an expected key
        * @example cy.checkIfObjectContainsExpectedKey({name: "John", age: 30, height: 183}, "name").should('equal', true)
    - checkIfObjectContainsStringArray
        * Custom command to return true/false if an array contains only string items
        * @example cy.checkIfObjectContainsStringArray(["John", "Doe"]).should('equal', true)
    - isAscendingById
        * Custom command to return true/false if an array is ascending by it's objects id
        * @example cy.isAscendingById([{"id": 1}, {"id": 2}, {"id": 3}]).should('equal', true)
    - sumIngredients
        * Custom command to return the sum of an objects property
        * @example cy.sumIngredients([{"value": 1.5}, {"value": 1.5}, {"value": 1.5}]).should('equal', 4.5)


To run:

npm install cypress
npm cypress open


