// FUNCTIONS_________________________________________________________________________________________________________________________________

// HOISTING - function declaration and function expression is two different way of creating functions, they behive same way only difference is that functions are hoisted on top of file before rest of JS runs, so in esence they are all DECLARED before rest of our JavaScript code. And it does this with FUNCTION DECLARATION, but it does NOT do this with FUNCTION EXPRESSION (So we can create function declaration on bottom of file and run it on top. but with function expression we can run it only after fucntion expression created and raned)

// FUNCTION DECLARATION

function greet(name) {
    console.log(`Hello, ${name}.`);
}

// FUNCTION EXPRESSION

const greeting = function (name) {
    console.log(`Hello, ${name}.`);

};


// calling functions
greet()
greet("Erik")

greeting()
greeting("Erik")


// ARGUMENTS_&_PARAMETERS____________________________________________________________________________________________________________________


// value inside function is called PARAMETER , parameters can be  set as defult and if you pass arguments in fuction then they will be overwriten.
const hello = function (name = "human", year = "Year was not set") {
    console.log(`Hello, ${name}. Year : ${year}.`);
}

// value you enter when you call function is called ARGUMENT
hello("Erik", 2025)
hello()
