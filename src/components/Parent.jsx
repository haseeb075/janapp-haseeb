import React, {useState} from 'react';
import Child from "./Child";

//Parent Component
function Parent(props) {

    const counters =[
        {id: 1, value: 4 }, 
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]

    // I am taking my counter into usestate hook so that I can update my state
    const [counter, setCounter] = useState([...counters])


    // onDelete event called on onDelete
        // handleDelete = () =>{
        // console.log("Event Handler Called");
        // };

    // This callback function takes a value and passed as parameter
    // Receiving argument as a parameter
    const deleteCounter= (index) =>{
        if (index && (!isNaN(parseInt(index))))
        {
          // splice method adds or removes and array item and  returns the removed item
           const array = counter.splice(index,1)//splice: at pos2, remove 1 item
           setCounter(array) //setter function that sets an array
        }  

    }    
    return (
      <div>

{/* code snippet for && operator(type of check) */}
{/* {isLoggedIn && <button>Logout</button>} */}
{/* Explaaination : if left side is true then print right side */}


{/* counter */}
        {counter && counter.map((counter,i) => (
          <Child
            key={counter.id}
            id={i}
            // onDelete pa function laga rha hn jo k as a prop jai ga after call back that function... Taking value as an argument

            onDelete={(value) => deleteCounter(value)}
            value={counter.value}
            selected
          />
        ))}
      </div>
    );
}

export default Parent;