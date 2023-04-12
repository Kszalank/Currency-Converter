import { useState, useEffect } from "react";
import baseUrl from "../constants/baseUrl";

function useCurrenciesList() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        fetch(` ${baseUrl}/currencies/eur.json`)
          .then((res) => res.json())
          .then((data) => {
            setList(Object.keys(data.eur));
          });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { list, error, loading };
}

export default useCurrenciesList;
