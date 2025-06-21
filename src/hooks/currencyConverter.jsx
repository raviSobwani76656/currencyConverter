import { useState, useEffect, useLayoutEffect } from "react";

const useCurrencyConverter = (fromCurrency = "USD", toCurrency = "INR") => {
  const [rate, setRate] = useState();

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setRate(1);
      return;
    }

    fetch(
      `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setRate(data.rates[toCurrency]);
      })
      .catch((err) => {
        console.error("Error Ocurred", err);
        setRate(null);
      });
  }, [fromCurrency]);

  return rate;
};

export default useCurrencyConverter;
