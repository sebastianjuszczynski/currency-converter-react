import React, { useState } from "react";
import { Clock } from "../Clock";
import { FormBox, FormFieldset, Legend, FormLabel, FormInput, FormButton, Text, Error, Info } from "./styled";
import { WaveTopBottomLoading } from 'react-loadingg';

export const Form = ({ calculateResult, ratesData }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("GBP");



  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }
  return (
    <FormBox onSubmit={onFormSubmit}>
      <Clock />
      <FormFieldset>

        <Legend>Uzupełnij dane:</Legend>
        {ratesData.state === "loading"
          ? (
          <>
          <WaveTopBottomLoading 
            color={"#08DD08"} 
            size={"small"}
            speed={1}
            style={{margin: "0 auto"}}
            />
          <Text>
            Poczekaj chwilkę... Ładuję dane z Banku...
          </Text>
          </>
          )
          : (
            ratesData.state === "error" ? (
              <Error>
                Sprawdź połączenie z internetem lub spróbuj ponownie.
              </Error>
            ) : (
                <>
                  <p>
                    <FormLabel htmlFor="amount" className="form__label">Podaj kwotę w złotówkach*:</FormLabel>
                    <FormInput
                      value={amount}
                      onChange={({ target }) => setAmount(target.value)}
                      type="number" id="amount"
                      name="amount"
                      required
                    />
                  </p>
                  <p>
                    <FormLabel htmlFor="currency" className="form__label">Wybierz walutę:</FormLabel>
                    <FormInput as="select"
                      value={currency}
                      onChange={({ target }) => setCurrency(target.value)}
                      name="currency"
                      id="currency">
                      {Object.keys(ratesData.rates).map(((currency) => (
                        <option
                          key={currency}
                          value={currency}
                        >
                          {currency}
                        </option>)))}
                    </FormInput>
                  </p>
                  <p>
                    <FormButton>Przelicz</FormButton>
                  </p>
                  <Info>
                    Kursy walut pochodzą z Europejskiego Banku Centralnego.<br />
                    Aktualne na dzień: {ratesData.date}
                  </Info>
                </>))}


      </FormFieldset>
    </FormBox>
  )

}