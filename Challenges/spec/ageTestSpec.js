describe("whatCanIDrink function", function () {
    /*  A test suite begins with a call to the global Jasmine function describe
        with two parameters: a string "" and a function () */

    beforeEach(function () {
        drink = new whatCanIDrink();
    });

    describe("Checks age", function () {
        it("should exist", function () {
            /* Specs are defined by calling the global Jasmine function "it" */
            expect(whatCanIDrink).toBeDefined();
            /*  Expectations are build with the function "expect" which takes a value, called the actual
                Each matcher implements a boolean comparison between the actual value and the expected value.
                Any matcher can evaluate to a negative assertion by chaining the call to expect with a not
                before calling the matcher */
        });

        it("should return a drink toddy when called as whatCanIDrink(13)", function () {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });

        it("should return a drink toddy when called as whatCanIDrink(17)", function () {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });

        it("should return a drink toddy when called as whatCanIDrink(18)", function () {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Coke");
        });

        it("should return a drink toddy when called as whatCanIDrink(20)", function () {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });

        it("should return a drink toddy when called as whatCanIDrink(30)", function () {
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whiskey");
        });

        it("should be unable to return a drink when called as whatCanIDrink(140)", function () {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should contain drink when called as whatCanIDrink(17)", function () {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});






