import React from "react";
import "./styles.css";

function Receipt(props) {
  return (
    <div className="ind-receipt">
      <div>Customer: {props.person}</div>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        Order:
        <li>{props.order.main}</li>
        <li>{props.order.protein}</li>
        <li>{props.order.rice}</li>
        <li>{props.order.sauce}</li>
      </ul>
      <div>Total: {props.order.cost}</div>
      <div>Paid: {String(props.paid)}</div>
    </div>
  );
}

export default Receipt;
