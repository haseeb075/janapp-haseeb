import React, { useState } from "react";

function StateComponent(props) {
  //   const [log, setLog] = useState({ isLoggedIn: true });
  //   let value;
  //   if (log.isLoggedIn) {
  //     setLog((value = "in"));
  //   } else {
  //     setLog((value = "out"));
  //   }

  const [count, setCount] = useState(0);
  //   important rules: =>Only call hooks on top level (dont call loops, conditions & nested functions)
  //   important rules: => only call hooks from react functions(call them within react functional components
  //  & not just any regular javascript functions)

  return (
    <div>
      {/* <p> You are logged {value}</p> */}

      <button onClick={() => setCount(count + 1)}>click me {count}</button>
    </div>
  );
}

export default StateComponent;
