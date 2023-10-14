import React from "react";
import CartTable from "./CartTable";
import CartSelect from "./CartSelect";

export default function Cart() {
  return (
    <div class="singlecart">
      <div class="container">
        <div class="wrapper">
          <div class="breadcrumb">
            <ul class="flexitem">
              <li>
                <a href="#">Home</a>
              </li>
              <li>Cart</li>
            </ul>
          </div>
          <div class="page-title">
            <h1>Shopping Cart</h1>
          </div>
          <div class="products one cart">
            <div class="flexwrap">
                <CartTable/>
                <CartSelect/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
