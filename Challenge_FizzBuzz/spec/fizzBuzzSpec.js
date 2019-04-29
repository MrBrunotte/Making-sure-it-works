/*  This is where we create the test! */

describe("My fizzBuzz function", function () {
    // A test suite calls the Jasmine function describe() with two parameters: A string "" and a function()

    // create a new object called fizzbuzz
    beforeEach(function () {
        fizzbuzz = new fizzBuzz();
    });

    describe("Returns number, fizz, buzz or fizzBuzz", function () {
        // specs are defined by calling the Jasmine function it()
        it("Should exist", function () {
            expect(fizzbuzz).toBeDefined();
        });

        it("Should return Fizz when called as fizzBuzz(9)", function () {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });

        it("Should return Buzz when called as fizzBuzz(10)", function () {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });

        it("Should return FizzBuzz when called as fizzBuzz(15)", function () {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });

        it("Should return 2 when called as fizzBuzz(2)", function () {
            var result = fizzBuzz(2)
            expect(result).toBe(2);
        });
    });
});