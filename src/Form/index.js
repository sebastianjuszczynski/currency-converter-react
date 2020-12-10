import React, { useState } from "react";
import { currencies } from "../currencies.js";
import "./style.css";

export const Form = ({ calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Uzupełnij dane:</legend>
          <p>
            <label for="amount" className="form__label">Podaj kwotę w złotówkach*:</label>
            <input
            value={amount}
            onChange={({target}) => setAmount(target.value)}
            className="form__input"
            type="number" id="amount"
            name="amount"
            required
            />
          </p>
          <p>
            <label for="currency" className="form__label">Waluta:</label>
            <select
            className="form__input"
            value={currency}
            onChange={({target}) => setCurrency(target.value)}
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
            </select>
          </p>
          <p>
            <button className="form__button">Przelicz</button>
          </p>
        </fieldset>
      </form>
  )

}