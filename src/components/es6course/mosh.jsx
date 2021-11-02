// const  -> block scope (use evrytime )
// let -> block scope (use when u want to reassign let)

// Objects (collection of key values pairs)

const person = {
    name: "Mosh",
    // oop terms  if we have functions in objects then we refer functions as methods
    walk : function() {},
    walk() {}
};
// how we can access
person.walk();
person.name = ""

const targetMember  = "name"
person[targetMember.valueOf] = 'John' //We use bracket notation when we dont know what property or method to access

// this keyword

const person = {
    name: "Mosh",
    walk() {
        console.log(this); //tjhe value of this keyword will be determind by how a function is called
    }
};

person.walk() //reference to person object

const walk = person.walk
console.log(walk); //calls a function inside an object
// calls 
walk(); //when we call this function as a stand alone it gives me undefined means it calls the global object which is  window object in browsers

// Every function in js in an object
// With bind method we can set the value of this permanently
const walk = person.walk.bind(person);
walk();

// Arrow Functions
//es5 syntax
const square = function(number) {
    return number*number;
}
//es6 syntax
// Example 1
const square = number => number * number
console.log(square(5));

// Example 2
const jobs = [
    {id: 1, isActive: true},
    {id:2, isActive:false},
    {id:3, isActive:true}
];
// es5
const activeJObs = jobs.filter( function(job) {
    return job.isActive
})
// es6
const activeJObs = jobs.filter( job => job.isActive)

// Arrow functions with this keyword
const person = {
    talk() {
        setTimeout(function () {
            console.log("this",this); //this returns a reference to the window object
        }, 1000)
    }
} //returns a window object

    // how we got reference to person object inside of this callback function

const person = {
    talk() {
        var self =  this
        setTimeout(function () {
           console.log("self",self); //this returns a reference to the window object //old way
        }, 1000)
    } 
}

const person = {
    talk() {
    // By using arrow function we dont have to bind this keyword
        setTimeout(() => {
           console.log("self",this); //this returns a reference to the window object //new way
        }, 1000)
    } 
}

person.talk()

// Array.map => it returns a new array and doesnt modify a new array

const colors = ['red','green', 'blue']
const colorsarray = colors.map(function(color) {
   return '<li>' + color + '</li>'
})

const colorsarray = colors.map(color => '<li>' + color + '</li>')

// using template literals instead of using single or double quotes, we use back tick charactes to render dynamically at runtime
const items = colors.map(color => `<li>${color}</li>`)
console.log(items)

// Object destructuring
const address = {
    street: '',
    city: '',
    country: ''
}
// the problem is  we have to repeatly define objects
const street = address.street
const city = city.street
const country = city.country
// in es6
const {street: st, city, country} = address;

// spread operator

const first = [1,2,3];
const last = [4,5,6];

// old way
const combined = first.concat(last)

// es6 way for combining an array
const combined = [...first, ...last];
const combined = [...first, 'A', ...last, 'B'];

//clone an array 
const clone =  [...first];
console.log(clone);
console.log(combined);

// combining an object
const first= {
    name: "haseeb",
}
const second = {
    job: "developer",
}

const combined = {...first, ...second, country: "pakistan"}
console.log(combined);

//cloning an object
const clone = {...first};

// Default exports vs named exports
// Default -> import ... from "../"
// Named -> import {...} from "../"
