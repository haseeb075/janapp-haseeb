import React from 'react';
import AllContacts from "../components/AllContacts";


function AddContact(props) {

    // Array of Objects
var listOfContacts = {
  user: { username: "user9110252username", genrePref: "user9110252genre" },
  jon: { username: "Jon", genrePref: "rock" },
  lucy: { username: "Lucy", genrePref: "pop" },
  mike: { username: "Mike", genrePref: "rock" },
  luke: { username: "Luke", genrePref: "house" },
  james: { username: "James", genrePref: "house" },
  dave: { username: "Dave", genrePref: "bass" },
  sarah: { username: "Sarah", genrePref: "country" },
  natalie: { username: "Natalie", genrePref: "bass" },
};

let allUsers = [];

for (var element in listOfContacts)
{
    allUsers.push(listOfContacts[element])
}
console.log("allUsers from Addcontact",allUsers);
    

    return (
      <div>
        <form>
          <div className='form-group'>
            <label>Name</label>
            <input type='text' name='name' placeholder='name' />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' name='email' placeholder='email' />
          </div>
          <button className='btn btn-primary'>Add</button>
        </form>
        {/* {allUsers.map((user)=> <div>{user}</div> )} */}

        <AllContacts contacts={allUsers} 
           
        />
    
      </div>
    );
}

export default AddContact;