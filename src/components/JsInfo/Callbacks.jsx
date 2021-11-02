// callback functions inlcuding synchorus and asynchorous callbacks

// what are callbacks
// in JS a callback is function passed to another function as an argument to be excuted later

const arr =[1,2,3,4,5,6,7]

// to find all odd no. we have to use filter method filter() which creates a new array of element implemented by a functions

// Following functions returns true if number is an odd number

//* function declaration
function isOddNumber(number) {
    return number % 2
}
// now you pass an odd fucntion to a filter method

const alloddnumbers = arr.filter(isOddNumber)

// from above line isOddNumber is a callback function into another function, where you just pass reference of function
// i.e. isOddNumber without paranthesis ()

// we can also use this as an anoymouse function like

const alloddnumbers = arr.filter(function isOddNumber(number) {
    return number * 2
})
console.log(alloddnumber); // [1,3,5,7]

//** In Es6, an callback function will be referred as arrow function
const alloddnumbers = arr.filter( (number) => number % 2  )


// callbacks in event handlers

function btndoSomething() {
    // executing an event
}

let btn = document.getElementById('#btn')
btn.addEventListener('click', btndoSomething)
// here btndoSomething is a callback

//Callback functions work in two ways 1- synchrnous 2- asynchronous

// Synchronous callbacks functions
// if your code runs sequentially from top to bottom that is synchronous .
//* The isOddNumber() function is an example of synchronous callback function
//** following example, the arrow function is a callback used in synchronous function

//** sort method completes before log excutes
 
let score = [1,2,34,4,5,65]

const todayscore = score.sort( (a,b) => a-b)
console.log(todayscore);

// Asynchronous Callbacks functions
// Asyncronouse means if javascript have to wait for a operation to comlplete, it will execute
// the rest of code while waiting and JS is a single threaded programming language. 
// It carries asynchronus operations via callback queue and event loop  

// Example develop a script to download a picture from remote server and proces it when download completes
// downloading a picture frm a remote server takes time so following code will runs
function download(url){
    setTimeout(() => {
    console.log(`downloading ${url}....`);      
    }, 3* 1000);
}
function process(picture){
 console.log(`processing ${picture}`);
}
// when you run this code you get the following output
let url = 'https://www.javascripttutorial.net/foo.jg';

download(url)
download(picture)
     
// output
// Processing https://javascripttutorial.net/foo.jg
// Downloading https://javascripttutorial.net/foo.jg ...
// Process() function executes before  the download() function. The correct squence should be
// 1- Download picture, wait for it to complete
// 2- process the picture



