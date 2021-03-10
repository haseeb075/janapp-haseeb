import React, {useState} from 'react';

//child component
function Child(props) {
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState(props.counter.value);
  // [By Mosh Docs] [Must Read Controlled components]
  // Removing the local state & only rely on props that to receive data...
  // It receives all the data from the props and raise events when data needs to be changed
  // In this way, This component is entirely contolled by its parent
  
  //  React Docs [Must Read Controlled Compnents]
  // In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
  // We can combine the two by making the React state be the “single source of truth”.
  // Then the React component that renders a form also controls what happens in that form on subsequent user input.
  //  An input form element whose value is controlled by React in this way is called a “controlled component”.

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
      {/* OnIncrement Button */}
      <button
        className='btn btn-secondary'
        // onClick={() => {
        //   setValue(value + 1);
        // }}

        onClick={ ()=> props.onIncrement(props.counter.id)}
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
      {/* {console.log("props.id-------", props.counter.id)} */}
      {/* We don't hve id property in props object thats why we are changing the props.onDelete  */}
      {/* <button type="button" onClick={()=> props.onDelete(props.id) } className="btn btn-danger m-2">Delete</button> */}
      {/* Delete Button */}
      <button
        type='button'
        onClick={() => props.onDelete(props.counter.id)}
        className='btn btn-danger m-2'
      >
        Delete
      </button>
      {/* Reset Button */}
      <button
        type='button'
        className='btn btn-warning'
        onClick={() => props.onReset(props.counter.id)}
      >
        Reset
      </button>
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

export default Child;