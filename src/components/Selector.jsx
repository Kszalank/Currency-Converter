import React from "react";

function Select({ selectedValue, onChange, options }) {
  return (
    <select onChange={onChange} value={selectedValue}>
      {options.map(({ value, label }) => (
        <option key={value} label={label}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default Select;
