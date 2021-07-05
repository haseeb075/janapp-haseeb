import React from "react";
import { AiFillDelete } from "react-icons/ai";
import user from "../../assets/images/user.png";

function ItemCard(props) {
  const { item } = props;
  return (
    <div>
      <div class="card" style={{ width: "16rem" }}>
        <div className="card-body">
           
          <span className='float-left'>
          <img
            src={user}
            className="img-fluid"
            alt="userImage"
            height="auto"
            width="25px"
          />
          <h6 className="card-subtitle mb-2 text-muted">{item.name}</h6>
          <p className="card-text">{item.price}</p>
          </span>
         
          <span className="float-right" style={{ color: "red" }}>
            <AiFillDelete />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
