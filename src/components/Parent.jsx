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
    //for Delete
    const [counter, setCounter] = useState([...counters])

    //for Reset
    const [reset, setReset] = useState([...counters])


    // onDelete event called on onDelete
      const handleDelete = (counterId) =>{
        // console.log("Event Handler Called");
        
        // filter method returns new array with the condition applied to it 
        const filteredCounter= counter.filter(c=> c.id !== counterId);
        setCounter(filteredCounter);      

        // console.log('====================================');
        // console.log(filteredCounter);
        // console.log('====================================');
        };
      
        //onReset event called on onReset
        const handleReset = () => {
        const resetcounter =  reset.map(c => {
            c.value = 0;
            return c;
          } )
          
        }

    // This callback function takes a value and passed as parameter
    // Receiving argument as a parameter
    // const deleteCounter= (index) =>{
    //     if (index && (!isNaN(parseInt(index))))
    //     {
          // splice method adds or removes and array item and  returns the removed item
           
          // const counterArr = counters.indexOf(index)
          //splice: at pos2, remove 1 item
          // if(index > -1){
          //   counterArr.splice(index, 1);
          // }
          // console.log('====================================');
          // console.log(counterArr);
          // console.log('====================================');
          //  setCounter(counterArr);
            //setter function that sets an array
            // for (let i = 0; i < counter.length; i++) {
            //   // const element = counter[i];
            //   if ( counter[i].id === index){
            //     console.log("counter indexes" ,counter[i].indexOf());
            //   }
              
            // }
    //     }  

    // }    
    return (
      <div>
        {/* code snippet for && operator(type of check) */}
        {/* {isLoggedIn && <button>Logout</button>} */}
        {/* Explaaination : if left side is true then print right side */}

        {/* counter */}
        {counter &&
          counter.map((counter, i) => (
            <Child
              // these both(key and id) are on unnecessary repititions
            key={counter.id} 
            //key attribute is used internally by react, you cannot access it in counter component
              
            //id is passed as a seperate prop, both of these are the properties of counter object
            // id={counter.id} 
          
              // onDelete pa function laga rha hn jo k as a prop jai ga after call back that function... Taking value as an argument
               onDelete={(value) => handleDelete(value)}
              // value={counter.value}
               //value is passed as a seperate prop, both of these are the properties of counter object 

               onReset={(value) => handleReset(value)}
              selected={counter.selected}

              //The whole point of using object is to encapsulte related values
              //encapsulate whole object
              counter={counter} 
            />
          ))}
      </div>
    );
}

export default Parent;