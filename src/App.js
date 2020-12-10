import React, { useState } from 'react';
import Form from "./Form";
import Result from "./Result";
import Container from "./Container";




function App() {

  const [result, setNewResult] = useState('Wpisz kwotę w PLN-ach a następnie kliknij w przycisk "PRZELICZ"');

  const resultUpdate = (newAmount) => {
    setNewResult(result => result = `${newAmount} złotych to w przeliczeniu`);
  };

  return (
    <Container>
      <Form resultUpdate={resultUpdate} />
      <Result result={result} />
    </Container>
  );
}

export default App;
