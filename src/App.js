import React, { useState } from 'react';
import { Result } from "./Result";
import Container from "./Container";
import { currencies } from "./currencies.js";
import { Form } from "./Form";





function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency
    });
  }

  return (
    <Container>
      
      <Form calculateResult={calculateResult} />
      
      <Result result={result} />
    </Container>
  );
}

export default App;
