import React from 'react'
import classes from './MeetupItem.module.css';
import CardMeetup from '../layout/ui/Cardmeetup'

export default function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <CardMeetup>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />

            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favourites</button>
            </div>
            </CardMeetup>
        
        </li>
    )
}
