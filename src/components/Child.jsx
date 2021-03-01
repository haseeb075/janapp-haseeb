import React, {useState} from 'react';

//child component
function NewParent(props) {

// const [count, setCount] = useState(0);
const [value , setValue] = useState(props.value);
// const [dvalue, setDvalue] = useState(props.onDelete);
// const userStyles={
//     color: "red", 
//     fontWeight: '10px'
// }

// const itemArray=["item1", "item2", "item3"]

// functions in javascript are objects so that they have properties and methods
// const formatCount =() =>{
    
// cater the id of props
// console.log(props.id);
  
// } 

    return (
      <div>
        {/* <span className="badge badge-primary"> {formatCount()} </span> */}
        {/* <span style={userStyles} className="badge badge-primary m-2">{count}  </span> */}

        <span
          style={{ fontSize: "20px", color: "yellow" }}
          className={
            value ? "badge badge-primary m-2" : "badge badge-warning m-2"
          }
        >
          {value}{" "}
        </span>
{/* Press it Button */}

        <button
          className='btn btn-secondary'
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Press it
        </button>

{/*Aashir Delete Button */}
        {/* <div
          data-id={props.id}
          className='btn btn-danger'
          //event .target.valeype=-
          onClick={(e) => props.onDelete(e.target.dataset.id)}

        
        >
          Delete
        </div> */}
{/* Mosh Delete Button */}
{console.log("props.id-------", props.id)}
{/* We don't hve id property in props object thats why we are changing the props.onDelete  */}
{/* <button type="button" onClick={()=> props.onDelete(props.id) } className="btn btn-danger m-2">Delete</button> */}
 


        {/* <button onClick={formatCount()}></button> */}

        {/* One method of conditional rendering using if-else statement */}
        {/* {itemArray.length === 0 ? "ItemArray is empty" : <ul>
                {itemArray.map(item => (
                            
                            <li key={item}>{item}</li>
                        
                    ))}
                </ul>} */}
        {/* 2nd method of conditional rendering using && operator*/}
        {/* {itemArray.length !== 0 && (
          <ul>
            {itemArray.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )} */}
      </div>
    );
}

export default NewParent;