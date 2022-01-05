import React from "react";
import Receipt from "./Receipt";
import "./styles.css";

function Receipts(props) {
  const mappedReceipts = props.receipts.map((object, index) => {
    return (
      <Receipt
        key={index}
        order={object.order}
        paid={object.paid}
        person={object.person}
      />
    );
  });

  return (
    <>
      <div className="flex-receipts">{mappedReceipts}</div>
    </>
  );
}

export default Receipts;
