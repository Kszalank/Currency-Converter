import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import Breadcrumbs from "../components/Breadcrumb";
import Input from "../components/Input";
import Select from "../components/Select";
import CurrentDate from "../components/Date";

function DetailsPage() {
  const [list, setList] = useState("");

  useEffect(() => {
    fetch(
      ` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`,
    )
      .then((res) => res.json())
      .then((data) => {
        setList(Object.keys(data.eur));
      });
  }, []);
  const array = [...list];
  const options = [];
  array.forEach((value, index) => {
    options.push({ currency: list[index], label: list[index] });
  });

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
      <CurrentDate />
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
