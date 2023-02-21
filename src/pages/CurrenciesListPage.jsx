import React, { useState } from "react";
import Heading from "../components/Heading";
import Select from "../components/Selector";

function CurrenciesList() {
  const options = [
    { value: "elo", label: "elo" },
    { value: "siema", label: "siema" },
  ];
  const [value, setValue] = useState("");
  return (
    <div>
      <Heading variant="title">Currency Converter</Heading>
      <Heading variant="subtitle">Choose base currency</Heading>
      <Select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        options={options}
      />
      <div>Value {value}</div>
    </div>
  );
}

export default CurrenciesList;
