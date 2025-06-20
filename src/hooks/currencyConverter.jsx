import { useState, useEffect } from "react";

const currencyConverter = (currency = "INR") => {
  const [rate, setRate] = useState();

  useEffect(()=>{
    fetch(`https://api.frankfurter.app/latest?from=USD&to=${currency}`)
      .then((res) => res.json())
      .then((data) => setRate(data.rates[currency])),}
    [currency]
  );
  return rate;
};

export default currencyConverter;
