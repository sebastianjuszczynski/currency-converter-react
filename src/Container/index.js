import React from "react";
import { ContainerBox, Header } from "./styled";

const Container = ({ children }) => (
  <ContainerBox>
    <Header>Kalkulator walut 💸</Header>
    {children}
  </ContainerBox>
);

export default Container;