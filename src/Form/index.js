import React, { useState } from "react";
import { Clock } from "../Clock";
import { FormBox, FormFieldset, Legend, FormLabel, FormInput, FormButton, Text } from "./styled";

export const Form = ({ calculateResult, ratesData }) => {
  const [amount, setAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("PLN");
    
  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(+amount, sourceCurrency);
  }
  const options = ratesData
        && Object.keys(ratesData.currencies).map(currency =>
            <option key={currency}>{currency}</option>);

  return (
    <FormBox onSubmit={onSubmit}>
      <Clock />
      <FormFieldset>
        <Legend>Uzupełnij dane:</Legend>
        {ratesData ? (<>
        <p>
          <FormLabel htmlFor="amount" className="form__label">Podaj kwotę w *:</FormLabel>
          <FormInput
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form__input"
            type="number" id="amount"
            name="amount"
            required
          />
        </p>
        <p>
          <FormLabel htmlFor="currency" className="form__label">Wybierz walutę:</FormLabel>
          <FormInput as="select"
            value={sourceCurrency}
            onChange={({ target }) => setSourceCurrency(target.value)}
            name="currency"
            id="currency">
              {options}
          </FormInput>
        </p>
        <p>
          <FormButton>Przelicz na PLN-y!!!</FormButton>
        </p>
        </>) : (
          <Text>
          {ratesData === "error"
              ? `Wystąpił błąd. Sprawdź połączenie internetowe,
              a jeśli to nie pomoże - spróbuj ponownie później.`
              :
              `Trwa pobieranie danych z Europejskiego Banku Centralnego.`
          }
      </Text>
        )}
      </FormFieldset>
    </FormBox>
  )

}