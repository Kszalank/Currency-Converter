import React, { useState } from "react";
import Heading from "../components/Heading";
import Breadcrumbs from "../components/Breadcrumb";
import Input from "../components/Input";
import Select from "../components/Select";
import CurrentDate from "../components/Date";
import useCurrenciesList from "../hooks/useCurrenciesListHook";
import Loading from "../components/Loading";

function DetailsPage() {
  const { list, loading, error } = useCurrenciesList();
  if (error) {
    alert("Could not load the page");
  }

  const options = list.map((item) => ({ currency: item, label: item }));

  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState("");
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState("");
  const [convertedCurrencyValue, setConvertedCurrencyValue] = useState("");
  return loading ? (
    <Loading />
  ) : (
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
