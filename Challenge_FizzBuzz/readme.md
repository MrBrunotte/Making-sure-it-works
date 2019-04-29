# FizzBuzz challange

Your challenge is to write some tests for the FizzBuzz game.

FizzBuzz is a classic programming problem that is often asked as an interview question. Create a function called fizzBuzz. This function should take in number as a parameter. The function should do the following:

    If the number is divisible by 3 and 5, then return "FizzBuzz"
    If the number is divisible by 3, then return "Fizz"
    If the number is divisible by 5, then return "Buzz"
    Else just return the number

Write a set of tests that pass in various values to the FizzBuzz function and ensure that the function meets the above requirements. Make sure that you test all different "types" of inputs that the function may receive.

## Setting things up for the test

Before I can start the test I need to plan and set everything up in the correct order.

### index.html

I start with creating my index.html file (the Jasmine Boiler Plate).
I only need the DOCTYPE and html, head and title tags!
We dont need a body since Jasmine takes care of this.

Within the head element i copy and paste in the Jasmine framework (Copy script tag!).

I need to load the files in the correct order so that the test will work.

The correct order is: .js, .html, boot, jasmine.css

Since I want the test to be done in my browser I need to load the html and boot file after my .js file and before my .css file!

The boot.js is the file that will run any test as soon as they're loaded into the browser.

### Planning and structure of my test and source code

I start by creating two seperate folders called "scripts" and "spec".

#### Source code before specifications!

We nee to load the source code (from the scripts folder) before we load the specifications (from the spec folder)!
The reason for this is that any functions or objects that we define within the fizzBuzz.js file (in the spec folder) will be referencable inside our .js file.

#### The scripts folder

This folder contains the source code that we're going to be running the test against!

We create a .js file with an appropriate name for the test (fizzBuzz.js)

When I have created the folders with the .js files I need to reference them in the index.html file!

#### The spec folder

This is the folder where we put the test!

We create a .js file with an appropriate name for the test (fizzBuzzSpec.js)

## Writing the test

Now that everything is setup we are ready to start to write the test!

We start by writing a test that we know will fail!
Then we write just enough code to get the test to pass!

This is called: RED-GREEN-REFACTOR.