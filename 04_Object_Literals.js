// OBJECT_LITERALS___________________________________________________________________________________________________________________________

//key (name) value (jack), key value pair - which make PROPERTY of OBJECT (user)


let user = {
    name: "Jack",
    age: 23,
    location: "London",
    blogs: ['this is my comment', "what is this"]
};



console.log(user);              // showing object user

console.log(user.location);     // showing property 

console.log(user.age);          // showing property before its changed

user.age = 24;                  // changing property

console.log(user.age);          // showing property after change

console.log(user["name"]);      // another way of showin property

user["name"] = "Lukas";         // chaneging property

console.log(user["name"]);      // showing changed property 


// advatage of 2nd way is that if we have name of property in variable we can you it like this ->

const key = "location";         // key as string saved in variable  , we cant do taht with 1st way 

console.log(user[key]);         // accessing prperty 

console.log(typeof user);       // showing type




// METHODS_&_"THIS"_KEYWORDS_________________________________________________________________________________________________________________

// methods are fucntions associated with object , called by name of obect then . and then name of method
// word THIS is associated also with object IN WHCIH WHERE ITS USED
let user2 = {
    name: "Jack",
    age: 23,
    location: "London",
    blogs: ['this is my comment', "what is this"],
    login: function () {                                            // creating method 
        console.log("User is logged in.");
    },
    logedOut() {                                                    // simplyfied way to create method 
        console.log("User logged out.");
    },
    logBlogs() {
        console.log(`Here are users ${this.name} blogs :`);         // using this in method
        this.blogs.forEach(blog => console.log(blog))
    },
    showThis: function () {                                         // fucntion for whowing user.this
        console.log(this);

    },
    thisArrowFunc: () => {                                          // arrow funtion - works differently with THIS key word
        console.log(this);
    }
};


user2.login();                  // testing method 

user2.logedOut()                // testing method

user2.logBlogs();               // testing method
//  When we use a normal function as a method and invoke that method, JavaScript sets the value of the this keyword to the object that the method was used on. Like in previous cases. Now inside the function, therefore we can use the this keyword to refer to the object itself.


user2.showThis();               // showing THIS of user2 object

console.log(this);              // showing THIS of object window


user2.thisArrowFunc()           // testing arrow fucntion created in object user2, word THIS is associated with WINDOWS object.
// When we use arrow functions, the value of this does not change from the value it was at the point in the code that the arrow function was invoked right here. Now, in this case it was called a point when the value of this is the global window object. So if we try to use this inside here, when it's an arrow function, it will be the same value, theglobal window object. ( ako blockscope kde je zavoalana funkcia do toho blockscope v ramci objektor spada a k tomu objektu ptm odkazuje aj this)








// OBJECTS_IN_ARRAYS

let user3 = {
    name: "Jack",
    age: 23,
    location: "London",
    blogs: [
        { title: 'this is my comment', likes: 30 },
        { title: "what is this", likes: 4 }
    ],
    logBlogs() {
        console.log(`Here are users ${this.name} blogs :`);         // using this in method
        this.blogs.forEach(blog => console.log(blog.title, blog.likes))
    }
};


user3.logBlogs()


// MATH OBJECT

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const are = 7.7;

console.log(Math.round(are));                   // round number 0.4 down 0.5 up
console.log(Math.floor(are));                   // round number allways down
console.log(Math.ceil(are));                    // round number up
console.log(Math.trunc(are));                   // get rid of decimal and leave only intiger

console.log(Math.random());                     // created random number, allways between zero and one 
console.log(Math.round(Math.random()));         // allways 0 or 1 
console.log(Math.round(Math.random() * 100))    // multipy by 100 now its between 0 and 100

