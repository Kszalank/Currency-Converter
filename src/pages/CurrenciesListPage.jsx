import React, { useState } from "react";
import Heading from "../components/Heading";
import Select from "../components/Selector";

function CurrenciesList() {
  const options = [
    { currency: "elo", label: "elo" },
    { currency: "siema", label: "siema" },
  ];
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div>
      <Heading variant="title">Currency Converter</Heading>
      <Heading variant="subtitle">Choose base currency</Heading>
      <Select
        value={selectedValue}
        onChange={(event) => {
          setSelectedValue(event.target.value);
        }}
        options={options}
      />
      <div>Value {selectedValue}</div>
    </div>
  );
}

export default CurrenciesList;
