import React from "react";
import "../styles/Heading.scss";

function Heading({ variant, children }) {
  return variant === "title" ? (
    <h1 className="heading">{children}</h1>
  ) : (
    <h2 className="heading">{children}</h2>
  );
}

export default Heading;
