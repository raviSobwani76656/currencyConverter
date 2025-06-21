import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyConverter from "./hooks/currencyConverter";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyConverter(from, to);
  const currencyOptions = ["USD", "INR", "EUR", "GBP", "JPY", "CAD", "AUD"];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const currencyConverterMethod = () => {
    if (!currencyInfo) return;
    const result = amount * currencyInfo;
    setConvertedAmount(result);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?_gl=1*5f0iwx*_ga*NDgyMTE2MjYzLjE3NTAzMTc3MjY.*_ga_8JE65Q40S6*czE3NTA1MDI0ODEkbzIkZzEkdDE3NTA1MDI1MzIkajkkbDAkaDA.')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              currencyConverterMethod();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currency={from}
                currencyOptions={currencyOptions}
                onAmountChange={setAmount}
                onCurrencyChange={setFrom}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                🔁 Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currency={to}
                currencyOptions={currencyOptions}
                onAmountChange={() => {}}
                onCurrencyChange={setTo}
                amountDisable={true}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
