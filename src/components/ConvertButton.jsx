import React from "react";
import { Link } from "react-router-dom";
import "../styles/ConvertButton.scss";

function ConvertButton({ linkTo, onClick }) {
  return (
    <div>
      <Link to={linkTo} className="convert-button-link" onClick={onClick}>
        &#62;
      </Link>
    </div>
  );
}

export default ConvertButton;
