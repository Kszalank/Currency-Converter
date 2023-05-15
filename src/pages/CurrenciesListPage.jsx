import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumb";
import Heading from "../components/Heading";
import ConvertButton from "../components/ConvertButton";
import Select from "../components/Select";
import CurrentDate from "../components/Date";

import {
  Table,
  TableContainer,
  Thead,
  Th,
  Tbody,
  Tr,
  Tcurrency,
  Tvalue,
  Tchange,
} from "../components/Table";
import "../styles/CurrenciesListPage.scss";
import useCurrenciesList from "../hooks/useCurrenciesListHook";
import useCurrenciesTable from "../hooks/useCurrenciesTableHook";

import Loading from "../components/Loading";

function CurrenciesList() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const { list, loading, error } = useCurrenciesList();

  const {
    baseCurrency,
    convertedCurrencyArray,
    convertedValueArray,
    tableError,
    tableLoading,
  } = useCurrenciesTable(selectedCurrency);

  if (error || tableError) {
    alert("Could not load the page");
  }
  const options = list.map((item) => ({ currency: item, label: item }));
  const currenciesChange = convertedCurrencyArray.map((item, index) => ({
    names: `${baseCurrency.toUpperCase()} - ${item.toUpperCase()}`,
    value: 1,
    change: convertedValueArray[index].toFixed(2),
    chosenCurrency: item,
    baseCurrency,
  }));

  return loading || tableLoading ? (
    <Loading />
  ) : (
    <div>
      <Heading variant="title">Currency Converter</Heading>
      <CurrentDate />
      <div className="breadcrumbs-container">
        <Breadcrumbs linkTo="/" active>
          Currencies list
        </Breadcrumbs>
        /<Breadcrumbs linkTo="/details">Details</Breadcrumbs>
      </div>

      <Heading variant="subtitle">Choose base currency</Heading>
      <div className="select-div">
        <Select
          value={selectedCurrency}
          onChange={(event) => {
            setSelectedCurrency(event.target.value);
          }}
          options={options}
          page="list"
        />
      </div>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Currency</Th>
              <Th>Value</Th>
              <Th>Change</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currenciesChange.map(
              ({ names, value, change, chosenCurrency }) => (
                <Tr key={names + value + change}>
                  <Tcurrency>
                    <div className="table-currencies">
                      {names}
                      <ConvertButton
                        linkTo="/details"
                        onClick={() => {
                          localStorage.setItem(
                            "baseCurrency",
                            selectedCurrency,
                          );
                          localStorage.setItem(
                            "convertCurrency",
                            chosenCurrency,
                          );
                          localStorage.setItem("baseCurrencyValue", 1);
                        }}
                      />
                    </div>
                  </Tcurrency>
                  <Tvalue>{value}</Tvalue>
                  <Tchange>{change}</Tchange>
                </Tr>
              ),
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CurrenciesList;
