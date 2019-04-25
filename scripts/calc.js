Calculator = function () {
    this.value = 0; /* Remember that the initial starting value is 0 and if i try to add a multiplication test this needs to be addressed!*/
}

Calculator.prototype.add = function (number) {
    if (typeof (number) == "number") {
        this.value += number;
    }
    else {
        alert("Error!");
    }
}




/*Up until Spies video*/
/* function addition(numOne, numTwo) {
    if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne + numTwo;
    }
    else {
        alert("Error!");
    }
} */