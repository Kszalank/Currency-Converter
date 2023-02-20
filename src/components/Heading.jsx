import React from "react";

function Heading({ variant, children }) {
  return variant === "title" ? (
    <h1 className>{children}</h1>
  ) : (
    <h2 className>{children}</h2>
  );
}

export default Heading;
