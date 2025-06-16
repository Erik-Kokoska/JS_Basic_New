// VARIABLES_________________________________________________________________________________________________________________________________

var variable1 = 'its valid everywhere dont use it' // do not use


const variable2 = "can not be changed, good practice" // can not be changed

let variable3 = "can be string, number any value, can be changed"

variable1 = "you can overwrite it even with different types"

// can hold any data even fucntion 
// use meaningufll and short names for varables, camel case myAge or my_age
// variables can contain only latters , numbers , underscore and dolar sign , but cannot start with numbers
// also its not possible to use perserved words like const for obvious resons






// DATA_TYPES________________________________________________________________________________________________________________________________

let numbers = 1.23;
let strings = "Words letters and stuff like that"
let booleans = true;
let nulls = null;               // its intentionaly set "empty" value 
let undefineds                  // its empty withou any value, its set when you dont set any value
let objects = new Object();     // laso array, dates, literals etc. 
let symbols = Symbol();         // used with objects


let undefinedVariable;
let nullVariable = null;

console.log(undefinedVariable, undefinedVariable + 3, `lets look at ${undefinedVariable}`);
console.log(nullVariable, nullVariable + 3, `lets look at ${nullVariable}`);

// Type Conversion 

// There is EXPLICIT and IMPICIT conversion , explicit meaining we explicitely try to convert types, implicit is when JS "behund the scene" do conversion by himself

let score = "100";
console.log(typeof score);

score = Number(score);
console.log(typeof score);

score = String(score);
console.log(typeof score);

// if you convert value to Boolean() then you get true even negative numbers but when you get 0 restul will be false also when you get empty string "" you will get false -- [this note is added in data types section and also in booleand and comperison section ]








// STRINGS___________________________________________________________________________________________________________________________________

console.log("This is string.")

let myName = "Erik";
let yearOfBirth = "1994";

//Concatination
console.log("My name is " + myName + " and i was borin in " + yearOfBirth + ".")

//Template String
console.log(`My name is ${myName} and i was borin in ${yearOfBirth}.`)

//Creating HTML Templates
console.log(`
    <h1>Header</h1>
    <h2>There is also somhthing</h2>
    <p>My name is ${myName} and i was borin in ${yearOfBirth}.</p>
    `);



//Character
console.log(myName[0]);

//PROPERTIES - Length , is properties of object and we use . to get that property
console.log(myName.length)

//METHOTS - String Methods
console.log(myName.toUpperCase());
// we can call methods on strings by . and () at the end
// methods dont alter original value in variable , some can do that but most dont
// methods can have arguments/parameters which you put in ()

// common string methood
let testingMethod = "myemail@ninjaemail.co.uk";

console.log(testingMethod.lastIndexOf("@"));  // index of caracter in string

console.log(testingMethod.slice(7, 18)); // slice between position 7 to 18

console.log(testingMethod.substring(0, 7)); // slice from position 0 seven characters 

console.log(testingMethod.replace(".", "_")); // rteplace firt character . with _






// NUMBERS___________________________________________________________________________________________________________________________________

let likes = 10;
const pi = 3.14;

// math operators + , - , / , * , ** , %
console.log(3 + 3);
console.log(3 - 3);
console.log(3 / 3);
console.log(3 * 3);
console.log(3 ** 3);
console.log(7 % 3);

// order of operations - B I D M A S - B ()      I **     D /      M *      A +      S -

console.log(5 * (10 - 3) ** 2 / 2);     // (10-3)   -->     7**2    -->     5*49 -->    245/2    => 122,5

// shortcut for operators
likes = +1;     // +1
likes++         // +1
likes -= 10;    // -10
likes *= 2;     // *2

// NaN - not a number
console.log("hello" * 5); // when you try to use mathematicl operators with invalid value






// ARRAYS____________________________________________________________________________________________________________________________________

let thisIsArray = ["harry", "john", "darius"];
let age = [23, 54, 34, 21];

console.log(thisIsArray);
console.log(thisIsArray.length);
console.log(thisIsArray[0]);
console.log(thisIsArray[2] = "ken");

//creating array of arrays
let arrayOfArrays = [age, thisIsArray]
console.log(arrayOfArrays);


// Array Methods
console.log(thisIsArray.indexOf("john"),);              // showing index of john in array
console.log(thisIsArray.push("lukas"));                 // pushing lukas in array ITS DESTRUCTIVE METHOD its alter roginal array
console.log(thisIsArray.join(", "));                    // join all elements of array in one string and between every value will be ,
console.log(thisIsArray.concat(["marko", "julius"]));   // concatonate two arrays together
console.log(thisIsArray.pop())                          // pop out last element of array 






// BOOLEANS_AND_COMPARISONS

// BOOLEANS__________________________________________________________________________________________________________________________________
console.log(true, false);

// if you convert value to Boolean() then you get true even negative numbers but when you get 0 restul will be false also when you get empty string "" you will get false -- [this note is added in data types section and also in booleand and comperison section ]


// Methoods Can Return True/False Statement
let testingEmail = "hello@email.com";
let testinArray = ["lukas", "mark", "joshua"]


console.log(testingEmail.includes("@"));
console.log(testinArray.includes("lukas"));



// COMPARISON_OPERATORS______________________________________________________________________________________________________________________

let testingNumber = 25;
let testinString = "shaun";

// == is value equal
// === is value and data type equal , strict comperation
// != is value NOT equal
// > MORE then
// < LESS then
// >= MORE then or EQUAL
// <= LESS then or EQUAL


// Loose Comperison ( different types can still be equal )*
console.log(testingNumber == 25);          //true
console.log(testingNumber == "25");        //true
console.log(testingNumber != 25);          //false
console.log(testingNumber != "25");        //false

// Strict Comperison ( different types can NOT be equal )*
console.log(testingNumber === 25);          //true
console.log(testingNumber === "25");        //false
console.log(testingNumber !== 25);          //false
console.log(testingNumber !== "25");        //true

// String Comperation Rules
console.log(testinString == "shaun");       //true
console.log(testinString == "Shaun");       //false
console.log(testinString > "crystal");      //true - because s in shaun comes later in alpahebt taht mean its have higher number then c 
console.log(testinString > "Shaun");        //true - because lower case latter are greater then upper case latters















