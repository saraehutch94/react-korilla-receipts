import React, { useState } from "react";
import receipts from "./receiptData";
import Receipts from "./Receipts";
import Form from "./Form";
import "./styles.css";

export default function App() {
  const [receipt, setReceipt] = useState(receipts);

  function grabInput(input) {
    console.log(input);
  }

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form grabInput={grabInput} />
      <Receipts receipts={receipt} />
    </div>
  );
}
