import React from "react";
// import ReactDOM from "react-dom";

function startreact(props) {
  const firstname = "haseeb";
  const lastname = "iqbal";
  const date = new Date();
  const hours = date.getHours();
  let timeofday;

  //  styles
  const styles = {
    fontSize: 18,
    backgroundColor: "#000",
  };

  // conditions
  if (hours < 12) {
    timeofday = "morning";
    styles.color = "#FEE227";
  } else if (hours > 12 && hours < 17) {
    timeofday = "evening";
    styles.color = "#EF7215";
  } else {
    timeofday = "night";
    styles.color = "#23395d";
  }

  return (
    <div>
      <h1 style={{ color: "red" }}> My name is {firstname + " " + lastname}</h1>
      <p>knowing myself for almost 25 years</p>
      <p style={styles}>Good {timeofday}</p>

      <p>Current time is {date.getHours() % 12} o'clock</p>

      {/*   <ul style={{ float: "left" }}>
       <li>Turkey</li>
         <li>Hunza</li>
         <li>Gilgit Baltistan</li>
       </ul>  */}
    </div>
  );
}

export default startreact;
