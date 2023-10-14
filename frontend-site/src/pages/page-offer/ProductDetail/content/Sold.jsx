import React from "react";

export default function Sold() {
  return (
    <div className="stock mini-text" data-stock={5000}>
      <div className="qty">
        <span>
          Sold:
          <strong className="qty-sold">3549</strong>
        </span>
        <span>
          Stock:
          <strong className="qty-available">107</strong>
        </span>
      </div>
      <div className="bar">
        <div className="available" style={{ width: "70.98%" }} />
      </div>
    </div>
  );
}
