import { Button } from "bootstrap";
import React, { useState } from "react";
import { jsPDF } from "jspdf";

function useStateHook2(props) {
  var { jsPDF } = require("jspdf");
  const initailValue = 0;
  const [count, setCount] = useState(initailValue);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count +5)
      setCount((prevValue) => prevValue + 1);
      // console.log(prevValue);
    }
  };

  function download(params) {
    var doc = new jsPDF();
    doc.text("Hello world!", 20, 20);
    doc.text("This is client-side Javascript, pumping out a PDF.", 20, 30);
    doc.addPage("a6", "l");
    doc.text("Do you like that?", 20, 20);
    doc.save("download.pdf");
  }

  return (
    <>
      <div>
        {/* UseState example with previous state */}
        <div>Count: {count}</div>
        <button onClick={() => setCount(initailValue)}>Reset</button>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button> */}

        {/* Better way to write above two values */}
        <button onClick={() => setCount((prevValue) => prevValue + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((prevValue) => prevValue - 1)}>
          Decrement
        </button>

        {/*Always passig a function which is a better a option */}
        <button onClick={incrementFive}>Increment 5</button>
      </div>

      {/*  jsPDF */}
      <div className="">
        <div className="rollnoslipScroll">
          <div className="general-height-30"></div>
         
        </div>

        <button type="button" onClick={download}>
          Download Zip file
        </button>
      </div>
    </>
  );
}

export default useStateHook2;
