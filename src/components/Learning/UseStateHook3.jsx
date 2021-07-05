import React, { useState } from 'react';

function UseStateHook3(props) {
// Object can be string, number, boolean, object and array... This is Objects
// Imp Note: The setter function provided by useState hook doesnot automatically merge and update objects
    const [name , setName] = useState({
        firstName: '',
        lastName: ''
    })
    
    return (
        <div>
                  {/* UseState example with Object */}
                  {/* Lets handle the value attribute and onChange event*/}
            <form>
 
<h6>Your First Name is - {name.firstName}</h6> 
<input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})} />
{/* ...name => first spread name and set appropriate property , copy every property in the name object and then 
overide field name with a different value */}


<h6>Your Last name is -  {name.lastName}</h6>
<input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value})} />

            </form>
        
        </div>
    );
}

export default UseStateHook3;