import React from "react";

function AllContacts(props) {
  const allUsers = props;

  console.log("====================================");
  console.log("allUsers from AllContacts", allUsers);
  console.log("====================================");

  return (
    <div>
      {/* {allUsers.map((user)=> ( <div>{user}</div> ) )} */}

      <p>This is All Contacts page</p>

      <ul className="list-group">
        {Object.values(allUsers).map((user) => (
          <li className="list-group-item ">
            {user}
            {console.log("users>>", user)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllContacts;
