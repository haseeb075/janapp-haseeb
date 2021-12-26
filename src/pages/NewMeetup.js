import React from 'react'
import { useNavigate } from 'react-router-dom';

import NewMeetupform from '../components/maxi_millian/Forms/NewMeetupform'

export default function NewMeetup() {

    // manupulate the browser history or navigatre programtically
    // To navigate after data was submitted
    const navigate = useNavigate();

    const addMeetupHandler = (meetupData) => {
        // fetch() a js default function which allow us to send https request
        // axios() a third party library which do the same things as fetch do

        //used for GET data
        // fetch returns a promise when promise completes it will execte then
        // We could also use async await
        fetch('https://react-maxi-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            // history.push => will push page into stack of pages and allow us to use to back button
            // history.replace() => will allow us to navigate but wouldnt allow us to use back button
            // (/) => target path as an argument now
            navigate.replace('/')
        });
    }
    return (
        <div>
           <p>add new meetup page</p> 
           <NewMeetupform onAddMeetup={addMeetupHandler}/>
        </div>
    )
}
