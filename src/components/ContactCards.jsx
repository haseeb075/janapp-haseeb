import React from "react";

function ContactCards(props) {
  //console props which are coming from parent component(app.js)
  console.log(props);
  return (
    <div>
      <div className="contact-cards">
        {/* props are coming from parent element */}
        <img
          src={props.contact.imageURL}
          width="auto"
          height="40"
          alt="lemon"
        />
        <h1>{props.contact.title}</h1>
        <p>{props.contact.para}</p>
        <p>{props.contact.number}</p>
      </div>
    </div>
  );
}

export default ContactCards;
