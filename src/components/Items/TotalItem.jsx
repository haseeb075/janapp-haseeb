import React from "react";
import ItemCard from '../Items/ItemCard';

function TotalItem(props) {
  console.log("child renders");
console.log(props);
  // const { totalitems } = props;

  const renderTotalItems = props.totalitems.map((item) => {
    return (
      <div className="col-md-4">
      <ItemCard item={item}/>
      </div>
    );
  });

  return (
    <div className="container">
      {/* Not executing this function at the moment but refrencing it */}
      <div className="row">{renderTotalItems}</div>
    </div>
  );
}

export default TotalItem;
