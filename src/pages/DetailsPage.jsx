import React from "react";
import Heading from "../components/Heading";
import Breadcrumps from "../components/Breadcrump";

function DetailsPage() {
  return (
    <div>
      <div className="breadcrumps-container">
        <Breadcrumps variant="" page="details">
          Currencies list
        </Breadcrumps>
        /
        <Breadcrumps variant="details" page="details">
          Details
        </Breadcrumps>
      </div>
      <Heading variant="title">Currency Converter</Heading>
      <Heading variant="subtitle">Convert values</Heading>
    </div>
  );
}

export default DetailsPage;
