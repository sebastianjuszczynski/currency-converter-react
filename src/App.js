import React from 'react';
import Form from "./Form";




function App() {
  return (
    <main className="container">
      <h1 className="header">Kalkulator walut 💸</h1>
      <Form />
      <p className="result__info">Kursy walut - Tabela A kursów średnich walut obcych na podstawie notowań
        Narodowego Banku Polskiego obowiązujące od dnia 2020-11-27</p>

      <p className="result__paragraph">
        Wpisz kwotę w PLN-ach a następnie kliknij w przycisk "PRZELICZ"
    </p>
    </main>
  );
}

export default App;
