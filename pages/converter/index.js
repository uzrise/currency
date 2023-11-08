import CurrencyConverter from "@/components/CurrencyConverter";
import SEO from "@/components/seo";
import React from "react";

const Calculator = ({ rates }) => {
  return (
    <>
      <SEO subName="Kalkulyatori" />
      <h1>Valyuta Kalkulyatori</h1>
      <CurrencyConverter rates={rates} />
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://api.fastforex.io/fetch-multi?from=USD&to=USD,RUB,EUR,UZS,CNY,JPY,KZT,TJS&api_key=632a2646ba-d39ea6c572-s3stj3"
  );
  const data = await response.json();
  const rates = data.results;

  return {
    props: { rates },
  };
}

export default Calculator;
