import { useState, useEffect } from "react";
import { baseUrl } from "../constants/baseUrl";

function useCurrenciesComparison(currency1, currency2) {
  const [convertedValue, setConvertedValue] = useState("");
  const [convertingError, setConvertingError] = useState(false);
  const [convertingLoading, setConvertingLoading] = useState(false);
  useEffect(() => {
    async function asynsCall() {
      try {
        setConvertingLoading(true);
        fetch(` ${baseUrl}/currencies/${currency1}/${currency2}.json`)
          .then((res) => res.json())
          .then((data) => {
            setConvertedValue(Object.values(data)[1]);
          });
      } catch (err) {
        setConvertingError(err);
      } finally {
        setConvertingLoading(false);
      }
    }
    asynsCall();
  }, [currency1, currency2]);
  return {
    convertedValue,
    convertingError,
    convertingLoading,
  };
}

export default useCurrenciesComparison;
