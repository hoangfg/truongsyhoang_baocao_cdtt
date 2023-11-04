import React from "react";

export default function Price({ price, priceSale }) {
  return (
    <div className="price">
      {priceSale !== 0 ? (
        <>
          <span className="current">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(priceSale)}
          </span>
          <span className="normal mini-text">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(price)}
          </span>
        </>
      ) : (
        <span className="current ">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(price)}
        </span>
      )}
    </div>
  );
}
