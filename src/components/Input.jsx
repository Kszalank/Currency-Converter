import React from "react";

function Input({ value, onChange }) {
  return <input type="number" value={value} onChange={onChange} />;
}

export default Input;
