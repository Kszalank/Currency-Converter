import React, { useState } from "react";
import Heading from "../components/Heading";
import Breadcrumbs from "../components/Breadcrumb";
import Input from "../components/Input";
import Select from "../components/Select";
import CurrentDate from "../components/Date";
import useCurrenciesList from "../hooks/useCurrenciesListHook";
import Loading from "../components/Loading";
import useCurrenciesComparison from "../hooks/useCurrenciesCoparisonHook";

function DetailsPage() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [convertedCurrency, setConvertedCurrency] = useState("usd");
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState("");
  const { list, loading, error } = useCurrenciesList();

  const { convertedValue, convertingLoading, convertingError } =
    useCurrenciesComparison(selectedCurrency, convertedCurrency);

  if (error || convertingError) {
    alert("Could not load the page");
  }

  const options = list.map((item) => ({ currency: item, label: item }));

  return loading || convertingLoading ? (
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
      </div>
      <div>
        <Input
          value={(convertedValue * selectedCurrencyValue).toFixed(2)}
          onChange={(event) => event.target.value}
        />
        <Select
          value={convertedCurrency}
          onChange={(event) => {
            setConvertedCurrency(event.target.value);
          }}
          options={options}
        />
      </div>
    </div>
  );
}

export default DetailsPage;
