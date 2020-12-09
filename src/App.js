import React from 'react';
import Form from "./Form";
import Result from "./Result";
import Container from "./Container";




function App() {
  return (
    <Container>
      <h1 className="header">Kalkulator walut 💸</h1>
      <Form />
      <Result />
    </Container>
  );
}

export default App;
