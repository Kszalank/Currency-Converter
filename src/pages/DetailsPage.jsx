import React, { useState } from "react";
import Heading from "../components/Heading";
import Breadcrumbs from "../components/Breadcrumb";
import Input from "../components/Input";
import Select from "../components/Select";

function DetailsPage() {
  const options = [
    { currency: "elo", label: "elo" },
    { currency: "siema", label: "siema" },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState("");
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState("");
  const [convertedCurrencyValue, setConvertedCurrencyValue] = useState("");
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
      <div>
        <Input
          value={selectedCurrencyValue}
          onChange={(event) => setSelectedCurrencyValue(event.target.value)}
        />
        <Select
          value={selectedCurrency}
          onChange={(event) => {
            setSelectedCurrency(event.target.value);
          }}
          options={options}
        />
        <div>{`${selectedCurrencyValue} ${selectedCurrency}`}</div>
      </div>
      <div>
        <Input
          value={convertedCurrencyValue}
          onChange={(event) => setConvertedCurrencyValue(event.target.value)}
        />
        <Select
          value={convertedCurrency}
          onChange={(event) => {
            setConvertedCurrency(event.target.value);
          }}
          options={options}
        />
        <div>{`${convertedCurrencyValue} ${convertedCurrency}`}</div>
      </div>
    </div>
  );
}

export default DetailsPage;
