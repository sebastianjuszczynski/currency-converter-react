import React, { useState } from "react";
import "./style.css";

const Form = ({ resultUpdate }) => {
  const [newAmount, setNewAmount] = useState("Wpisz kwotę w PLN-ach a następnie kliknij w przycisk 'PRZELICZ'");

  const onFormSubmit = (event) => {
    event.preventDefault();
    resultUpdate(newAmount);
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Uzupełnij dane:</legend>
        <p>
          <label for="amount" className="form__label">Podaj kwotę w złotówkach*:</label>
          <input
            
            onChange={({ target }) => setNewAmount(target.value)}
            value={newAmount}
            className="form__input"
            type="number"
            id="amount"
            name="amount"
            required />
        </p>
        <p>
          <label for="currency" className="form__label">Waluta:</label>
          <select className="form__input" name="currency" id="currency">
            <option value="GBP">Funt brytyjski</option>
            <option value="EUR">Euro</option>
            <option value="USD">Dolar amerykański</option>
            <option value="CHF">Frank szwajcarski</option>
          </select>
        </p>
        <p>
          <button
          onClick={() => resultUpdate(newAmount)}
          className="form__button">Przelicz</button>
        </p>
      </fieldset>
    </form>
  );
};

export default Form;