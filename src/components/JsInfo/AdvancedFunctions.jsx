//Some examples of losing this
let user= {
    firstname: "bilal",
    sayHi() {
        alert(`hello, ${this.firstname}!`); 
    }
}
setTimeout(user.sayHi, 1000); //Hello undefined
// Solution Wrapper
setTimeout(function() {
    user.sayHi()
} , 1000)

// or
setTimeout(()=> user.sayHi(), 1000) //hello john
