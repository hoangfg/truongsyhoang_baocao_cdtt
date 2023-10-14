import React from "react";
import CartItem from "./CartItem";

export default function CartTable() {
  return (
    <form action className="form-cart">
      <div className="item">
        <table id="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <CartItem/>
            
          </tbody>
        </table>
      </div>
    </form>
  );
}
