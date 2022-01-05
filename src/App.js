import React, { useState } from "react";
import receipts from "./receiptData";
import Receipts from "./Receipts";
import Form from "./Form";
import "./styles.css";

export default function App() {
  const [receipt, setReceipt] = useState(receipts);

  function grabInput(input) {
    const foundPeople = receipts.filter((people) => {
      return people.person === input;
    });
    setReceipt(foundPeople);
  }

  function handleToggle() {
    console.log("hi");
  }

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form grabInput={grabInput} />
      <Receipts receipts={receipt} handleToggle={handleToggle} />
    </div>
  );
}
