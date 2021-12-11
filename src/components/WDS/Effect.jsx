import React, { useState, useEffect } from "react";

export default function Effect() {
  const [resourcetype, setResourcetype] = useState("posts");
const [items, setItems] = useState([])

  useEffect(
    () => {
    //   console.log("onMount");
      fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    },
    [resourcetype] //this empty array never actually changes between different renders,
    //    when something puts inside of it and when it changes, different render will be changed
  );

  return (
    <div>
      <button
        onClick={() => {
          setResourcetype("posts");
        }}
      >
        posts
      </button>
      <button
        onClick={() => {
          setResourcetype("users");
        }}
      >
        users
      </button>
      <button
        onClick={() => {
          setResourcetype("comments");
        }}
      >
        comments
      </button>
      <h1>{resourcetype}</h1>
      {items.map((item)=> {
          return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}
