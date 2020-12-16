import React, { useState } from "react";
import { currencies } from "../currencies.js";
import { Clock } from "../Clock";
import { FormBox, FormFieldset, Legend, FormLabel, FormInput, FormButton } from "./styled";

export const Form = ({ calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <FormBox onSubmit={onSubmit}>
      <Clock />
      <FormFieldset>
        <Legend>Uzupełnij dane:</Legend>
        <p>
          <FormLabel htmlFor="amount" className="form__label">Podaj kwotę w złotówkach*:</FormLabel>
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
          <FormLabel htmlFor="currency" className="form__label">Waluta:</FormLabel>
          <FormInput as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
            name="currency"
            id="currency">
            {currencies.map((currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            )))}
          </FormInput>
        </p>
        <p>
          <FormButton>Przelicz</FormButton>
        </p>
      </FormFieldset>
    </FormBox>
  )

}