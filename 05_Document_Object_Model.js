// QUERY SELECTOR____________________________________________________________________________________________________

const para = document.querySelector('p');  //grap first p tag
const err = document.querySelector('.error');  //grap class error
const divErr = document.querySelector('div.error');  //grap div with class error

// you can go to console, inspect page , right click on element -> copy selector
const allPara = document.querySelectorAll('p') // grap all p tags, its give as NodeList

console.log(para)
console.log(err)
console.log(divErr)
console.log(allPara)        //  its give as *NodeList, its not like array but we can still do some stuff with it like 
console.log(allPara[0])     // showing first element similar like in array

// or foreach
allPara.forEach(element => {
    console.log(element)
});

const allErr = document.querySelectorAll(".error");

//Other ways _______________________________________


// get an element by ID
const title = document.getElementById("page-title");
console.log(title)


// get an element by their class name
const errors = document.getElementsByClassName("error")   //its give as *HTMLCollection (you cant use foreach method )
console.log(errors)


// get an element by their tag name
const paras = document.getElementsByTagName("p")
console.log(paras)
console.log(paras[0])



/*
*HTMLColeection methods
.item()
.nameditem()

*Node List Methods
.item()
.entries()
.foEach()
.keyes()
.values()
*/


// ADD AND CHANGE PAGE CONTENT _____________________________________________________________________________________

