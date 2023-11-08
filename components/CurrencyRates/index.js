import React, { useState } from "react";
import styles from "./CurrencyRates.module.scss";

const CurrencyRates = ({ rates }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const currencyList = Object.keys(rates);

  return (
    <div className={styles.CurrencyRates}>
      <h2>Valyuta Kurslari</h2>
      <div>
        <label>Tanlangan valyuta:</label>
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <h3>1 {selectedCurrency} ning nisbatan:</h3>
      <ul>
        {currencyList.map((currency) => (
          <li key={currency}>
            1 {selectedCurrency} ={" "}
            {selectedCurrency === currency
              ? 1
              : (rates[currency] / rates[selectedCurrency]).toFixed(5)}{" "}
            {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyRates;
