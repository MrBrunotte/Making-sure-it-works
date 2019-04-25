# Making Sure It Works

## Automated testing

Jasmine testing framework - a free open-source testing framework for testing JavaScript code.

### What this part covers

    1) Use Jasmine to test our JavaScript code.
    2) Create our own test suite.
    3) Make assertions.
    4) Ensure that the code is being executed.

### Lerning outcomes

Testing our JavaScript code, being able to create a suite of tests, and being able to safely refactor our code.

#### Describe the test

I want to test a calculator
    I am going to test the additional function
        I want to get the result of 42
        I expect the result of 20 + 22 to be 42

This is the same in Jasmine:
describe("Calculator", function() {
    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });
    });
});

#### Red-Green-Refactor

    -   RED:        Create a test and make it FAIL.
    -   GREEN:      Make the test pass by any means necessary.
    -   REFACTOR:   Change the code to remove duplication in your project and to improve the design while ensuring that all tests still pass.

#### Jasmine spies

Jasmine spies allows us to check if a function has been called or not. Here the jasmine spies will check if the alert function has been called, and if it contains the string "error".
Jasmine capture the alert function and doesn't allow the alert box to be displayed, this makes jasmine very useful for unattended testing. If it would not capture the alert box and display it after every alert we would have to click "ok" after every alert to carry on the test.

#### Adding other functions

If you want to add other functions to the calculator object, then try doing it using the principles of TEST-DRIVEN DEVELOPMENT:
    -   Write the tests first, then write the basic amount of code that's needed to get the test passing.
    -   Then add tests and functionality in that way.