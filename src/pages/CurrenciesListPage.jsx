import React, { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Select from "../components/Selector";
import {
  Table,
  TableContainer,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
} from "../components/Table";

function CurrenciesList() {
  const options = [
    { currency: "elo", label: "elo" },
    { currency: "siema", label: "siema" },
  ];
  const currenciesChange = [
    { names: "EUR-USD", value: 1, change: 0.341 },
    { names: "EUR-PLN", value: 1, change: 0.02 },
    { names: "EUR-CZK", value: 1, change: 0.01 },
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

      <TableContainer>
        <Table>
          <Thead>
            <Th>Currency</Th>
            <Th>Value</Th>
            <Th>Change</Th>
          </Thead>
          <Tbody>
            {currenciesChange.map(({ names, value, change }) => (
              <Tr key={names + value + change}>
                <Td key={names}>{names}</Td>
                <Td key={names + value}>{value}</Td>
                <Td key={names + change}>{change}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CurrenciesList;
