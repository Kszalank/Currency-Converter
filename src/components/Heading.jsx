import React from "react";

function Heading({ variant, children }) {
  return variant === "title" ? <h1>{children}</h1> : <h2>{children}</h2>;
}

export default Heading;
