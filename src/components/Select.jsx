import React from "react";
import "../styles/Select.scss";

function Select({ value, onChange, options }) {
  return (
    <select onChange={onChange} value={value} className="select">
      {options.map(({ currency, label }) => (
        <option key={currency} label={label.toUpperCase()}>
          {currency}
        </option>
      ))}
    </select>
  );
}

export default Select;
