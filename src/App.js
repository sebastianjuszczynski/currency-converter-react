import React, { useState } from 'react';
import { Result } from "./Result";
import Container from "./Container";
import { useRatesData } from "./useRatesData";
import { Form } from "./Form";





function App() {

  const [result, setResult] = useState("");
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
     const rate = ratesData.rates[currency];
     setResult({
         sourceAmount: +amount,
         targetAmount: amount * rate,
         currency,
     })
  };

  return (
    <Container>
      <Form calculateResult={calculateResult} ratesData={ratesData} />
      <Result result={result} />
    </Container>
  );
}

export default App;
