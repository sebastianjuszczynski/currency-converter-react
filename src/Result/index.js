
import React from "react";
import { ResultBox } from "./styled";

export const Result = ({ result }) => {
  return result &&
      <ResultBox>
          Otrzymujesz {`${result.value.toFixed(2)} ${result.sourceCurrency}`}. Nie wydaj na głupoty :)
      </ResultBox>;
}

