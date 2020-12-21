
import React from "react";
import { ResultBox } from "./styled";

export const Result = ({ result }) => {
  return result &&
      <ResultBox>
          Otrzymasz {`${result.targetAmount.toFixed(2)} ${result.currency}`}. Tylko ostrożnie ;)
      </ResultBox>;
}

