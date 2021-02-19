import React from "react";

function Joke(props) {
  //   const numArr = [1, 2, 3, 4, 5, 6, 7];
  //   const doubled = numArr.map((num) => num * 2);
  //   console.log(doubled);

  return (
    <div>
      <div className="jokes-ahead">
        <p style={{ color: props.jokes.id ? "green" : "red" }}>
          Id: {props.jokes.id}
        </p>
        <p style={{ color: props.jokes.question ? "green" : "red" }}>
          Question: {props.jokes.question}
        </p>
        <p style={{ color: !props.jokes.punchline && "red" }}>
          Punchline: {props.jokes.punchline}
        </p>
      </div>
    </div>
  );
}

export default Joke;
