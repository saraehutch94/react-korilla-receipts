import React from "react";

function Receipt(props) {
  return (
    <>
      <div>Customer: {props.person}</div>
      <ul>
        Order:
        <li>{props.order.main}</li>
        <li>{props.order.protein}</li>
        <li>{props.order.rice}</li>
        <li>{props.order.sauce}</li>
      </ul>
      <div>Total: {props.order.cost}</div>
      <div>Paid: {String(props.paid)}</div>
    </>
  );
}

export default Receipt;
