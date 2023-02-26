import React, { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Select from "../components/Selector";

function CurrenciesList() {
  const options = [
    { currency: "elo", label: "elo" },
    { currency: "siema", label: "siema" },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div>
      <Heading variant="title">Currency Converter</Heading>
      <Heading variant="subtitle">Choose base currency</Heading>
      <Select
        value={selectedCurrency}
        onChange={(event) => {
          setSelectedCurrency(event.target.value);
        }}
        options={options}
      />
      <div>Currency {selectedCurrency}</div>
      <Input
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
      />
      <div>Value {selectedValue}</div>
    </div>
  );
}

export default CurrenciesList;
