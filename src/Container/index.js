import React from "react";
import "./style.css";
import Form from "../Form";
import Result from "../Result";

const Container = () => (
    <main className="container">
      <h1 className="header">Kalkulator walut 💸</h1>
      <Form />
      <Result />
    </main>
);

export default Container;