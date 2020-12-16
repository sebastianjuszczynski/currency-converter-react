
import React from "react";
import { ResultBox } from "./styled";

export const Result = ({ result }) => {
  return result &&
      <ResultBox>
          Otrzymujesz {`${result.value.toFixed(2)}`} złotych. Nie wydaj na głupoty :)
      </ResultBox>;
}

