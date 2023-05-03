import React from "react";
import "../styles/CurrencyChanger.scss";
import arrows from "../assets/arrows.svg";

function CurrencyChanger({ onClick }) {
  return (
    <button type="button" className="currency-changer" onClick={onClick}>
      <img src={arrows} alt="arrows" className="arrows" />
    </button>
  );
}

export default CurrencyChanger;
