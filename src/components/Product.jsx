import React from "react";

function Product({ x }) {
  console.log(x);
  return (
    <div>
      <p>{x.id}</p>

      <p>{x.name}</p>
      <p>{x.price}</p>
      <p>{x.description}</p>
    </div>
  );
}

export default Product;
