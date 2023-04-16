import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumb";
import Heading from "../components/Heading";

import Select from "../components/Select";

import {
  Table,
  TableContainer,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
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
  }));

  return loading || tableLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="breadcrumbs-container">
        <Breadcrumbs linkTo="/" active>
          Currencies list
        </Breadcrumbs>
        /<Breadcrumbs linkTo="/details">Details</Breadcrumbs>
      </div>

      <Heading variant="title">Currency Converter</Heading>
      <div className="currency-select">
        <Heading variant="subtitle">Choose base currency</Heading>
        <Select
          value={selectedCurrency}
          onChange={(event) => {
            setSelectedCurrency(event.target.value);
          }}
          options={options}
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
            {currenciesChange.map(({ names, value, change }) => (
              <Tr key={names + value + change}>
                <Td>{names}</Td>
                <Td>{value}</Td>
                <Td>{change}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CurrenciesList;
