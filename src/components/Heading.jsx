import React from "react";

function Heading({ variant, children }) {
  if (variant === "title") {
    return <h1 className="heading-1">{children}</h1>;
  }
  if (variant === "subtitle") {
    return <h2 className="heading-2">{children}</h2>;
  }
}

export default Heading;
