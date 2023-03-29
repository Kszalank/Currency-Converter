import React from "react";
import "../styles/Heading.scss";

function Heading({ variant, children }) {
  return variant === "title" ? (
    <h1 className="heading-1">{children}</h1>
  ) : (
    <h2 className="heading-2">{children}</h2>
  );
}

export default Heading;
