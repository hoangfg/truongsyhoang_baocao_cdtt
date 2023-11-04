import React from "react";

export default function Sold({ quanlity }) {
  console.log("quanlity", quanlity);
  return (
    <div className="stock mini-text" data-stock={5000}>
      <div className="qty">
        <span>
          Đã bán:
          <strong className="qty-sold">3549</strong>
        </span>
        <span>
          Còn:
          <strong className="qty-available">{quanlity}</strong>
        </span>
      </div>
      <div className="bar">
        <div className="available" style={{ width: "70.98%" }} />
      </div>
    </div>
  );
}
