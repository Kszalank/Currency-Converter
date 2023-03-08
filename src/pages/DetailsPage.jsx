import React from "react";
import Heading from "../components/Heading";
import Breadcrumbs from "../components/Breadcrumb";

function DetailsPage() {
  return (
    <div>
      <div className="breadcrumbs-container">
        <Breadcrumbs linkTo="/">Currencies list</Breadcrumbs>/
        <Breadcrumbs linkTo="/details" active>
          Details
        </Breadcrumbs>
      </div>
      <Heading variant="title">Currency Converter</Heading>
      <Heading variant="subtitle">Convert values</Heading>
    </div>
  );
}

export default DetailsPage;
