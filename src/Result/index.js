
import React from "react";
import { ResultBox } from "./styled";

export const Result = ({ result }) => {
  return result &&
      <ResultBox>
          Otrzymujesz {`${result.targetAmount.toFixed(2)} ${result.currency}`}. Nie wydaj na głupoty :)
      </ResultBox>;
}

