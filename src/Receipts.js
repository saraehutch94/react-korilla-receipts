import React from "react";
import Receipt from "./Receipt";

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
      <div>Hello Receipts</div>
      <div>{mappedReceipts}</div>
    </>
  );
}

export default Receipts;
