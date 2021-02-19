import React, {useState} from 'react';

function NewParent(props) {

// const [count, setCount] = useState(0);
const [value , setValue] = useState(props.value);
// const userStyles={
//     color: "red", 
//     fontWeight: '10px'
// }

const itemArray=["item1", "item2", "item3"]

// functions in javascript are objects so that they have properties and methods
// const formatCount =() =>{
    console.log(props);
  
// } 
    return (
        <div>
            {/* <span className="badge badge-primary"> {formatCount()} </span> */}
            {/* <span style={userStyles} className="badge badge-primary m-2">{count}  </span> */}
            
            <span style={{fontSize: '20px', color: "yellow"}} className={value ? "badge badge-primary m-2" : "badge badge-warning m-2"}>{value}  </span>
            <button className="btn btn-secondary" onClick={()=> {setValue(value+1)}}>Press it</button>
            
{/* <button onClick={formatCount()}></button> */}

            {/* One method of conditional rendering using if-else statement */}
            {/* {itemArray.length === 0 ? "ItemArray is empty" : <ul>
                {itemArray.map(item => (
                            
                            <li key={item}>{item}</li>
                        
                    ))}
                </ul>} */}
                {/* 2nd method of conditional rendering using && operator*/}
            {itemArray.length !== 0 && <ul>
                {itemArray.map(item => (
                            
                            <li key={item}>{item}</li>
                                   
                    ))}
                </ul>} 
        </div>
    );
}

export default NewParent;