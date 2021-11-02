// Set Timeout without arguments

function Say(greeting){
 alert("say", greeting)
}
let timerId = setTimeout(Say , 1000)

// Set Timeout with arguments
function Hello(phrase, who){
    alert(phrase + ',' + who)
}

setTimeout(Hello, 1000, "hello", "world")

// first argument string
setTimeout("alert('hello')", 1000) //not suggested

setTimeout( () => alert(hello), 1000) // suggested

setTimeout( sayHi(), 1000) // this will not work bcz it needs a reference to a function which is sayHi & 
                            // & sayHi() runs a function

// clearTimeout
// setTimeout generates an id and clearTimeout cancel that execution

// setInterval 
// same syntax as setTimeout
// it allows to run a function multiple times after some time 

const Hello = name => {
    alert("Hello", name)
}
setInterval(Hello, 2000 , "haseeb")

clearInterval(timerid) //clears further function calls we call clear interval()