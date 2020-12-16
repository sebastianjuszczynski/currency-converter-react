import React, { useState } from 'react';
import { Result } from "./Result";
import Container from "./Container";
import { useRatesData } from "./useRatesData";
import { Form } from "./Form";





function App() {

  const [result, setResult] = useState("");
  const ratesData = useRatesData();

  const calculateResult = (amount, sourceCurrency) => {
    const plnRates = ratesData.currencies;
    const resultValue = amount / plnRates[sourceCurrency];
    setResult({
        value: resultValue,
    });
};

  return (
    <Container>
      <Form calculateResult={calculateResult} ratesData={ratesData} />
      <Result result={result} />
    </Container>
  );
}

export default App;
