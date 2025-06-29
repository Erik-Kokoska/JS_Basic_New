// VARIABLES_________________________________________________________________________________________________________________________________

var variable1 = 'its valid everywhere dont use it' // do not use, do not supprt block scope 


const variable2 = "can not be changed, good practice" // can not be changed, support block scope

let variable3 = "can be string, number any value, can be changed" // can be changed, support block scope

variable1 = "you can overwrite it even with different types"

/* 
-- can hold any data even fucntion 
-- use meaningufll and short names for varables, camel case myAge or my_age
-- variables names can contain only latters , numbers , underscore and dolar sign , but cannot start with numbers also its not possible to
   use perserved words like const for obvious resons
-- LET and VAR can be overwrite for different value and datatype, CONST us unchangeable */

// block-scope - https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14034887?start
// basicly variables are aviable in partical block of code and other block of codes inherited in original blcok of code 






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






// TYPE_CONVERSION___________________________________________________________________________________________________________________________

// There is EXPLICIT and IMPICIT conversion , explicit meaining we explicitely try to convert types, implicit is when JS "behund the scene" do conversion by himself

let score = "100";
console.log(typeof score);

score = Number(score);
console.log(typeof score);

score = String(score);
console.log(typeof score);

// if you convert value to Boolean() then you get true even negative numbers but when you get 0 restul will be false also when you get empty string "" you will get false -- [this note is added in data types section and also in booleand and comperison section ]






// PRIMITIVE_&_REFERENCE_TYPE___________________________________________________________________________________________________________

// there are two data types --- difference is in how they are stored and used in memory



/* 
---- PRIMITIVE TYPES -------------------------------

NUMBERS - STRINGS - BOOLEANS - NULL - UNDEFINED - SYMBOLS

are stored in STACK, where is little bit less space and its quicker quicker*/


//PRIMITIVE_VALUE
let varOne = 50;
let varTwo = varOne;
console.log("varOne : " + varOne + " varTwo : " + varTwo);  // both are 50

varOne = 60;
console.log("varOne : " + varOne + " varTwo : " + varTwo);  // varOne is 60 and varTwo is till value 50



/*
---- REFERENCE TYPES --------------------------------

OBJECT = (all types of objects) - OBJECT LITERALS - ARRAYS - FUNCTIONS - DATES - ALL OTHER OBJECTS

are stored on heap,(reference types are also more complex then primitive types) which have more spac but its bit slowe */


//REFERENCE_VALUE

const userOne = { name: "Jack", age: 21 };
const userTwo = userOne;

console.log(userOne, userTwo); //in both cases name is same Jack

userOne["name"] = "Daniel";

console.log(userOne, userTwo); //in both cases name is same Daniel




/* 
so imporatant is this, when we store a PRIMITIVE VALUE in a variable, it adds that value to the STACK and it locks the variable name to it as an ACCESSOR to that value. --- When we store a REFERENCE TYPE in a variable like an object, it adds the object to the HEAP and then it adds a POINTER to that object on the stack. (pointer is like primitive type in stack, and that poinet "find/call" the object from heap) 

when we make copy of the primitive type variable (example: let varOne = 50, let varTwo = varOne) JS create another 50 in STACK for varTWo and when you then change varOne to different value, varTwo will be still 50, ---- in other way when you crate copy of variable where is object, then we crate copy of pointer which points to the SAME OBJECT AS FIRST VARIABLE so when you change on original object will be change everywhere https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14174797?start=30#overview  */










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







//BOOLEANS_AND_COMPARISONS___________________________________________________________________________________________________________________



// BOOLEANS

console.log(true, false);

/* 
if you convert value to Boolean() then you get true even negative numbers but when you get 0 restul will be false also when you get empty string "" you will get false -- [this note is added in data types section and also in booleand and comperison section ]

Methoods Can Return True/False Statement also arguments in IF statmenets, Conditions (practicali they are used here in methods and other conditions like if , switch , for etc. / retuning if somethig is true or not) */

let testingEmail = "hello@email.com";
let testinArray = ["lukas", "mark", "joshua"]

console.log(testingEmail.includes("@"));
console.log(testinArray.includes("lukas"));



// COMPARISON_OPERATORS

let testingNumber = 25;
let testinString = "shaun";

// == is value equal
// === is value and data type equal , strict comperation
// != is value NOT equal
// !== is value and data type NOT equal , strict comperation
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















