import React, {useEffect} from "react";
import { FaBeer } from "react-icons/fa";


function ContactList(props) {
  const allUsers = props;

  console.log("====================================");
  console.log("contactlist>>>>",allUsers);
  console.log("====================================");


  useEffect(()=>{
    console.log('====================================');
    // console.log("useEffect>>>>",allUsers);
    console.log('====================================');
// allUsers.contacts.map((contact) => console.log(contact));

  },[])

  






  
  return <div className=''>{}</div>;
}

export default ContactList;
