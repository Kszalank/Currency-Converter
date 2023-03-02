import React from "react";
import { Link } from "react-router-dom";
import "../styles/Breadcrumps.scss";

function Breadcrumps({ page, variant, children }) {
  if (page === "currencies-list") {
    return variant === "details" ? (
      <h3>
        <Link to="/details" className="breadcrumps breadcrumps--unused">
          {children}
        </Link>
      </h3>
    ) : (
      <h3>
        <Link to="/" className="breadcrumps">
          {children}
        </Link>
      </h3>
    );
  }
  return variant === "details" ? (
    <h3>
      <Link to="/details" className="breadcrumps">
        {children}
      </Link>
    </h3>
  ) : (
    <h3>
      <Link to="/" className="breadcrumps breadcrumps--unused">
        {children}
      </Link>
    </h3>
  );
}

export default Breadcrumps;
