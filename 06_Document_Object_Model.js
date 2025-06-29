// Query Selector

const para = document.querySelector('p');  //grap first p tag
const err = document.querySelector('.error');  //grap class error
const divErr = document.querySelector('div.error');  //grap div with class error

// you can go to console, inspect page , right click on element -> copy selector

const allPara = document.querySelectorAll('p') // grap all p tags

console.log(para)
console.log(err)
console.log(divErr)
console.log(allPara) //  its give as NodeList , its not like array but we can still do some stuff with it like 
console.log(allPara[0]) // showing first element similar like in array

// or foreach
allPara.forEach(element => {
    console.log(element)
});


const allErr = document.querySelectorAll(".error");
