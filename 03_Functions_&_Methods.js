// FUNCTIONS_________________________________________________________________________________________________________________________________


// Basicaly block of code (can be complex) which do something , it can be invoked anywehre, repititaly and we also can aslo put values into fucntions


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







// RETURN_VALUE______________________________________________________________________________________________________________________________

const calcArea = function (radius) {
    return 3.14 * radius ** 2
};






// ARROW_FUCNTION____________________________________________________________________________________________________________________________

// when we have more then one parameter we need(), aleso when there is no parameter at all
const calcAreaArrow = (radius) => {
    return 3.14 * radius ** 2
}

// when we have only one parameter we can get rid off (), also can use one line without retrun , if we have simple return
const calcAreaArrow2 = radius => 3.14 * radius ** 2







// FUNCTIONS_VS_METHODS______________________________________________________________________________________________________________________

// fucntions and methods are basicay the same , only difference is that way we invoke methods and where they are defined ( methods are part of object and can be invoked by calling name of value or object and . ) 
// methods are functions, but they're functions which are associated with an object or data , like a string. They're defined on an object or data type, whereas functions is just defined on its own.

// function 

const simpleFunction = () => "Hello, wolrd.";

simpleFunction();

// method

const hisName = "Baltazar";

hisName.toUpperCase();





// CALLBACK_&_FOREACH________________________________________________________________________________________________________________________


// CALLBACK
// when you pas function as argument in another fuction , its called CALLBACK 

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value)

}

function funcAsArg(value) {
    console.log(value);
}


myFunc(funcAsArg)
myFunc(value => console.log(value))         //same thig with arrow fucntion inside

// so you create function myFucn , when you call this fuction as argument you pass another fuction you created in this case funcAsArg , then this function funcAsArg runs in first function myFunc, and take another argument which is variable value 



// FOREACH

let peoples = ["harry", "luigi", "jack", "robert", "markus"]

peoples.forEach((person, index) => console.log(person, index))





















// PRACTICE_ARROW_FUCNTION___________________________________________________________________________________________________________________


const greet2 = name => `Hello, ${name}`;


const hello2 = (name = "human", year = "Year was not set") => console.log(`Hello, ${name}. Year :${year}`);


const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax
    }
    return total;
}

console.log(bill([230, 49, 39, 20], 0.25));




// CALLBACK_FUNCTION_IN_ACTION_______________________________________________________________________________________________________________

// getting reference to 'ul' - unordered list with class people 
const ul = document.querySelector('.people')

let people = ["harry", "luigi", "jack", "robert", "markus"]

let html = ``;

people.forEach((personName, index) => {
    html += `<li style="color: purple">${index} - Hello ${personName.charAt(0).toUpperCase() + personName.slice(1)}</li>`;
});


ul.innerHTML = html;