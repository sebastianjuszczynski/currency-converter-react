import React from "react";
import "./style.css";


const Container = ({ children }) => (
  <main className="container">
    <h1 class="header">Kalkulator walut 💸</h1>
    {children}
  </main>
);

export default Container;