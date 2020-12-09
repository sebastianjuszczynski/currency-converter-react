import React from "react";
import "./style.css";


const Container = ({ children }) => (
  <main className="container">
    <h1 className="header">Kalkulator walut 💸</h1>
    {children}
  </main>
);

export default Container;