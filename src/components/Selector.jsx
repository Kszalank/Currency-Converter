import React from "react";

function Select({ value, onChange, options }) {
  return (
    <select onChange={onChange} value={value}>
      {options.map(({ currency, label }) => (
        <option key={currency} label={label}>
          {currency}
        </option>
      ))}
    </select>
  );
}

export default Select;
