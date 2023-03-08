import React from "react";
import { Link } from "react-router-dom";
import "../styles/Breadcrumbs.scss";

function Breadcrumbs({ linkTo, active, children }) {
  return (
    <h3>
      <Link
        to={linkTo}
        className={`breadcrumbs ${active ? "breadcrumbs--active" : ""}`}
      >
        {children}
      </Link>
    </h3>
  );
}

export default Breadcrumbs;
