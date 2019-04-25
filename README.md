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

### How to use Jasmine

#### HTML document

I load a plain HTML document (<!DOCTYPE html>) and in the <head> secition I load all script frameworks from Jasmine and my .js files.

#### Jasmine script

Download the Jasmine framwork from [Jasmine](https://cdnjs.com/libraries/jasmine) website. It is important that the Jasmine spripts load in the correct order!

1) [Java Script](https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine.js)
2) [Jasmine HTML](https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine-html.js)
3) [Jasmine Boot](https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine-html.js)

#### My Script

When I have loaded the Jasmine script I load my scripts!

1) My .js file from the Scripts folder.
2) My .js file from the Specs folder.

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