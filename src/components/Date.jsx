import React from "react";
import "../styles/Date.scss";
import calendar from "../assets/calendar.svg";

function CurrentDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("eng", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="date">
      <img src={calendar} alt="calendar" className="calendar" />
      <span className="current-date">
        {month} {day}, {year}
      </span>
    </div>
  );
}

export default CurrentDate;
