import React, { useState, useEffect } from "react";
import styles from "./CurrencyConverter.module.scss";

const CurrencyConverter = ({ rates }) => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("RUB");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const currencyList = Object.keys(rates);

  useEffect(() => {
    handleConvert();
  }, [fromCurrency, toCurrency, amount]);

  const handleConvert = () => {
    if (fromCurrency === toCurrency) {
      setResult(amount);
    } else {
      setResult((amount * rates[toCurrency]) / rates[fromCurrency]);
    }
  };

  const getCurrencyOptions = () => {
    return currencyList.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ));
  };

  return (
    <div className={styles.CurrencyConverter}>
      {" "}
      {/* SCSS modulni ishlatish */}
      <h2>Valyuta Kalkulyatori</h2>
      <div>
        <label>Qaysi valyutadan:</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {getCurrencyOptions()}
        </select>
      </div>
      <div>
        <label>Qaysi valyutaga:</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {getCurrencyOptions()}
        </select>
      </div>
      <div>
        <label>Narxi:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <p>
        {amount} {fromCurrency} = {result !== null ? result.toFixed(2) : ""}{" "}
        {toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
