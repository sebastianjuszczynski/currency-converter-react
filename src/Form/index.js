import React from "react";
import "./style.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Uzupełnij dane:</legend>
      <p>
        <label for="amount" className="form__label">Podaj kwotę w złotówkach*:</label>
        <input className="form__input" type="number" id="amount" name="amount" required />
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
        <button className="form__button">Przelicz</button>
      </p>
    </fieldset>
  </form>
);

export default Form;