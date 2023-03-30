import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumb";
import Heading from "../components/Heading";
import Input from "../components/Input";
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

function CurrenciesList() {
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

  const currenciesChange = [
    { names: "EUR-USD", value: 1, change: 0.341 },
    { names: "EUR-PLN", value: 1, change: 0.02 },
    { names: "EUR-CZK", value: 1, change: 0.01 },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div>
      <div className="breadcrumbs-container">
        <Breadcrumbs linkTo="/" active>
          Currencies list
        </Breadcrumbs>
        /<Breadcrumbs linkTo="/details">Details</Breadcrumbs>
      </div>

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
