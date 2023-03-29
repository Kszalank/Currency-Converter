import React from "react";
import "../styles/Date.scss";

function CurrentDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("eng", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="date">
      {month} {day}, {year}
    </div>
  );
}

export default CurrentDate;
