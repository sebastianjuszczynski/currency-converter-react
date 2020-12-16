
import React from "react";
import { Info, ResultParagraph } from "./styled";

export const Result = ({ result }) => (
  <>
    <Info>Kursy walut - Tabela A kursów średnich walut obcych na podstawie notowań
        Narodowego Banku Polskiego obowiązujące od dnia 2020-11-27</Info>

    <ResultParagraph>
      {result === undefined && (
        <>
          Wpisz kwotę w PLN-ach a następnie kliknij w przycisk "PRZELICZ"
        </>
      )}
      {result !== undefined && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
          <strong>
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
          </strong>
        </>
      )}
    </ResultParagraph>
  </>
);

