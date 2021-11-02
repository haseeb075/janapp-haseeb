//  json.stringify
//  change object into JSON Format
//  It supports Objects, Arrays, Primitives: strings, numbers, booleans, null
 let user = {
     name : "John",
     age: 30,
     isAdmin: false
 }
 let json = JSON.stringify(user)
 alert(typeofJson)
// Output
//  let user = {
//     "name" : "John",
//     "age" : 30,
//     "isAdmin" : false
// }