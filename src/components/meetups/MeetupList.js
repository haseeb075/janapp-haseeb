import React from "react";
import NewMeetupform from "../maxi_millian/Forms/NewMeetupform";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title} address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
