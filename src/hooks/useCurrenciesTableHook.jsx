import { useState, useEffect } from "react";
import { baseUrl } from "../constants/baseUrl";

function useCurrenciesTable(currency) {
  const [baseCurrency, setbaseCurrency] = useState("");
  const [convertedCurrencyArray, setconvertedCurrencyArray] = useState([]);
  const [convertedValueArray, setconvertedValueArray] = useState([]);
  const [tableError, setError] = useState(false);
  const [tableLoading, setLoading] = useState(false);
  useEffect(() => {
    async function asynsCall() {
      try {
        setLoading(true);
        fetch(` ${baseUrl}/currencies/${currency}.json`)
          .then((res) => res.json())
          .then((data) => {
            setbaseCurrency(Object.keys(data)[1]);
            setconvertedCurrencyArray(Object.keys(Object.values(data)[1]));
            setconvertedValueArray(Object.values(Object.values(data)[1]));
          });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    asynsCall();
  }, [currency]);
  return {
    baseCurrency,
    convertedCurrencyArray,
    convertedValueArray,
    tableError,
    tableLoading,
  };
}

export default useCurrenciesTable;
