import React from "react";
import "../styles/Select.scss";

function Select({ value, onChange, options, page }) {
  return (
    <select onChange={onChange} value={value} className={`select-${page}`}>
      {options.map(({ currency, label }) => (
        <option
          className="option-element"
          key={currency}
          label={label.toUpperCase()}
        >
          {currency}
        </option>
      ))}
    </select>
  );
}

export default Select;
