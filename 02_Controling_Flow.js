// FOR_LOOP__________________________________________________________________________________________________________________________________

for (let i = 0; i < 5; i++) {

    console.log(i);
}


let myArray = ["jack", "mark", "julius"];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i], " this is for loop");
}






// WHILE_LOOP________________________________________________________________________________________________________________________________

let i = 0;

while (i < 5) {

    console.log(i);

    i++;
}

let j = 0;

while (j < myArray.length) {
    console.log(myArray[j], " this is while loop");
    j++;
}


// DO WHILE LOOP

let x = 9;

do {
    console.log(x, "this is do while loop");
    x++;
} while (x < 5);






//IF_STATEMENT_______________________________________________________________________________________________________________________________

const age = 20;

if (age > 20) {
    console.log("you are over 20 years old.");
}


if (age > 20) {
    console.log("you are over 20 years old.");
} else { "You are not over 20." }


if (age > 20) {
    console.log("you are over 20 years old.");
} else if (age < 20) {
    console.log("You are bellow 20 years old.");
} else {
    console.log("You are 20.");
}






// LOGICAL_OPERATORS_________________________________________________________________________________________________________________________

//  && - AND
//  || - OR
//  !  - NOT

const password = "fdsa"


//  && - AND
if (password.length > 12 && password.includes("@")) {
    console.log("Very strong password, one of the best!");

} else if (password.length < 12 && password.includes("@")) {
    console.log("It is good password, but it may need more character, at last 12.");

} else if (password.length > 12 && !password.includes("@")) {
    console.log("Its good password, long enaught, but it needs somespecial characet, at last one.");

} else {
    console.log("Your password is WEAK! Add length and last 12 characters and also inculde at last one special character.");

}


//  || - OR
if (password.length >= 12 && password.includes("@")) {
    console.log("that password is mighty strong");

} else if (password.length >= 8 || password.includes("@") && password.length >= 5) {
    console.log("This password is strong enaught");

} else { "pass is not strong enaught" }


//  !  - NOT
let user = false;
//i wanna check when user is offline , but if i use if statement its only chcek/run code when condition is true and i wanna run it when user is falls ,  -- so ! logical NOT reverse boolean only in "place" whre you use ! 

console.log(user);
console.log(!user);

if (!user) {
    console.log("You need to log in, to contiunue.");
}
































//___________________________________________________________________________________________________________________________________________

// for loop practice 

let arrayForUpNames = [];

for (let i = 0; i < myArray.length; i++) {

    arrayForUpNames.push(myArray[i].toLocaleUpperCase())

    if (myArray.length - 1 == i) {
        console.log(arrayForUpNames);

    }
}


for (let i = 0; i < myArray.length; i++) {

    let html = `
    <h1>Header</h1>
    <div>Name: ${myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1)} </dvi>
    `;

    console.log(html);
}


// logical operators practice 

let pass = "oidsadsadsdss@";

let specialCharactersTest = /[!@#\.,\?%]/.test(pass);

let inculdeNumberTest = /[0123456789]/.test(pass);

let minimumLenght = 12;

if (pass.length > minimumLenght && specialCharactersTest) {
    console.log("Your password is excelent it inculdes special character");
} else if (pass.length > minimumLenght && inculdeNumberTest) {
    console.log("Your password is excelent it includes number");
} else if (pass.length < minimumLenght) {
    console.log("Your password dont have enaught characters , at last 12 characters needed.");
} else { console.log("Your password need at last one number or at last one special character."); }
