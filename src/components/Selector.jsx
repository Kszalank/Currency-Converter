import React from "react";
import uuid from "react-uuid";

function Select({ value, onChange, options }) {
  return (
    <select onChange={onChange} value={value}>
      {options.map((element, index) => (
        <option key={uuid()} label={options[index].label}>
          {options[index].value}
        </option>
      ))}
    </select>
  );
}

export default Select;
