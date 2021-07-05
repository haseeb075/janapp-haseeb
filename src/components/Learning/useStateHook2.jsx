import { Button } from "bootstrap";
import React, { useState } from "react";

function useStateHook2(props) {
  const initailValue = 0;
  const [count, setCount] = useState(initailValue);

  const incrementFive = () =>{
    for(let i = 0 ; i< 5; i++){
      // setCount(count +5)
      setCount(prevValue => prevValue + 1)
      // console.log(prevValue);
    }
  }
  return (
    <div>

      {/* UseState example with previous state */}
        <div>

      Count: {count}
        </div>
      <button onClick={() =>setCount(initailValue)}>Reset</button>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}

{/* Better way to write above two values */}
      <button onClick={() =>  setCount(prevValue => prevValue + 1)}>Increment</button>
      <button onClick={() =>   setCount(prevValue => prevValue - 1)}>Decrement</button>

{/*Always passig a function which is a better a option */}
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default useStateHook2;
