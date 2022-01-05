import React, { useState } from "react";
import receipts from "./receiptData";
import Receipts from "./Receipts";
import "./styles.css";

export default function App() {
  const [receipt, setReceipt] = useState(receipts);
  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Receipts receipts={receipt} />
    </div>
  );
}
