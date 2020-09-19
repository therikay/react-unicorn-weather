import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ];
  let months = [
    "Jan",
    "Febr",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

    
     return (
    <div>
        {hours}:{minutes} <br/> 
       {day} { date } { month }
    </div>
  );
}
