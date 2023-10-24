import React from "react";

export default function Price({ price, priceSale }) {
  return (
    <div className="price">
      {priceSale !== 0 ? (
        <>
          <span className="current">{priceSale}</span>
          <span className="normal">{price}</span>
        </>
      ) : (
        <span className="current">{price}</span>
      )}
    </div>
  );
}
