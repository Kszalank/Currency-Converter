import React, { useState } from "react";
import Heading from "../components/Heading";
import Breadcrumbs from "../components/Breadcrumb";
import Input from "../components/Input";
import Select from "../components/Select";
import CurrentDate from "../components/Date";
import useCurrenciesList from "../hooks/useCurrenciesListHook";
import Loading from "../components/Loading";
import useCurrenciesComparison from "../hooks/useCurrenciesCoparisonHook";
import CurrencyChanger from "../components/CurrencyChanger";
import "../styles/DetailsPage.scss";

function DetailsPage() {
  const [selectedCurrency, setSelectedCurrency] = useState(
    localStorage.getItem("baseCurrency"),
  );
  const [convertedCurrency, setConvertedCurrency] = useState(
    localStorage.getItem("convertCurrency"),
  );
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState(
    localStorage.getItem("baseCurrencyValue"),
  );
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
    <div className="">
      <Heading variant="title">Currency Converter</Heading>
      <CurrentDate />
      <div className="breadcrumbs-container">
        <Breadcrumbs linkTo="/">Currencies list</Breadcrumbs>/
        <Breadcrumbs linkTo="/details" active>
          Details
        </Breadcrumbs>
      </div>

      <Heading variant="subtitle">Convert values</Heading>

      <div className="converter-container">
        <div>
          <Input
            value={selectedCurrencyValue}
            onChange={(event) => {
              setSelectedCurrencyValue(event.target.value);
              localStorage.setItem("baseCurrencyValue", selectedCurrencyValue);
            }}
          />
          <Select
            value={selectedCurrency}
            onChange={(event) => {
              setSelectedCurrency(event.target.value);
            }}
            options={options}
          />
        </div>
        <CurrencyChanger
          onClick={() => {
            setSelectedCurrency(convertedCurrency);
            setConvertedCurrency(selectedCurrency);
            localStorage.setItem("baseCurrency", convertedCurrency);
            localStorage.setItem("convertCurrency", selectedCurrency);
          }}
        />
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
    </div>
  );
}

export default DetailsPage;
