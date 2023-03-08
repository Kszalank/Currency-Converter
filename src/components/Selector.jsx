import React from "react";
import "../styles/Selector.scss";

function Select({ value, onChange, options }) {
  return (
    <select onChange={onChange} value={value} className="selector">
      {options.map(({ currency, label }) => (
        <option key={currency} label={label}>
          {currency}
        </option>
      ))}
    </select>
  );
}

export default Select;
