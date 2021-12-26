import React, {useState, useEffect} from "react";

import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetups() {

    const [loading, setLoading] = useState(true);
    const[loadedmeetups, setLoadedmeetups] = useState([])

    useEffect(()=> {
        fetch("https://react-maxi-default-rtdb.firebaseio.com/meetups.json")
        .then((response) => {
            return response.json;
          }).then((data)=> {
              setLoading(false)
              setLoadedmeetups(data)
          });

    })
    // If we remove [], fetch inside useEffect will execute when component executes
    // If we add [] as second argument, react will check the values add to this array and 
    // compare them to their equivalents when this effect function was executed the last time
    // If thier is empty array thier are no dependencies and react will execute first argument/ 
    // arrow function when this component function rendered and executed for the first time and for
    // subsequent executions of this component
//  subsequent means coming after something in time; following.

// valid react component must be synchronous and must not return a promise but instead they have to 
//directly return a jsx so we cant use async await here for get api

    if(loading) {
        return(
            <section>
             <p>loading...</p>   
            </section>
        )
    }

return (
    <div>
      <p>All Meetups</p>
      <ul>
        {/* {dummy_data.map(meetup => {
              return <li >
              <p>{meetup.title}</p>   
             </li>
               
            })} */}
        <MeetupList meetups={loadedmeetups} />
      </ul>
    </div>
  );
}
