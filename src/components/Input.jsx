import React from "react";
import "../styles/Input.scss";

function Input({ value, onChange }) {
  return <input value={value} onChange={onChange} className="input" />;
}

export default Input;
