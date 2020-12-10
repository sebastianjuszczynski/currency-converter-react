import React from "react";
import "./style.css";

const Result = ({ resultUpdate, result }) => (
  <>
    <p className="result__info">Kursy walut - Tabela A kursów średnich walut obcych na podstawie notowań
        Narodowego Banku Polskiego obowiązujące od dnia 2020-11-27</p>

    <p className="result__paragraph" onChange={resultUpdate}>
  {result}
    </p>
  </>
);

export default Result;