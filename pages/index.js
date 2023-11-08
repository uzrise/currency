import React from "react";
import CurrencyRates from "../components/CurrencyRates";
import SEO from "@/components/seo";

const Index = ({ rates }) => {
  return (
    <>
      <SEO subName="Kurslari" />
      <h1>Valyuta Kurslari</h1>
      <CurrencyRates rates={rates} />
    </>
  );
};

export async function getStaticProps() {
  // Valyuta kurslarini API orqali olish
  const response = await fetch(
    "https://api.fastforex.io/fetch-multi?from=USD&to=USD,RUB,EUR,UZS,CNY,JPY,KZT,TJS&api_key=632a2646ba-d39ea6c572-s3stj3"
  );
  const data = await response.json();
  const rates = data.results;
  return {
    props: { rates },
  };
}

export default Index;
