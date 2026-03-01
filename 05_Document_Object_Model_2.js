//Adding & Changing Page Content__________________________________________________________________________________

const para = document.querySelector("p");

console.log(para.innerText);



para.innerText = "Hello all humans. ";      // we are changing inner text
para.innerText += "This is added by +.";    // we are adding to text


const paras = document.querySelectorAll("p");   // grabing all p in document and then changing their text

paras.forEach(p => {
    p.innerText= "Change them all."
});



const content = document.querySelector(".content"); // selecting div .content

content.innerHTML = `<h2>This is new content.</h2>` // changing HTML inside that div we selected


const people = ["mario","lucas","maveric"] 
 // creating array of names and then going thrugh with forEach method add HTML with names into div with class .content
people.forEach(name => {
    content.innerHTML +=`<p>Hello mi name is ${name.charAt(0).toUpperCase() + name.slice(1)}. </p>`
});  


//Getting & Setting Attributes__________________________________________________________________________________

const err = document.querySelector(".error")
const link = document.querySelector("a")

link.getAttribute("href")
link.setAttribute("href","https://yahoo.com/")

console.log(err.getAttribute("class"));
err.setAttribute("class","success")
console.log(err.getAttribute("class"));
err.setAttribute("style","color:red")

//Changing CSS Styles___________________________________________________________________________________________

