import React from "react";

export default function CartSelect() {
  return (
    <div className="cart-summary styled">
      <div className="item">
        <div className="coupon">
          <input type="text" placeholder="Enter coupon" />
          <button>Apply</button>
        </div>
        <div className="shipping-rate collapse">
          <div className="has-child expand">
            <a href className="icon-small">
              Estimate Shipping and tax
            </a>
            <div className="content">
              <div className="contries">
                <form action>
                  <label htmlFor="country">Contry</label>
                  <select name="country" id="country">
                    <option value>--selected--</option>
                    <option value={1}>Arganistan</option>
                    <option value={2}>Aland Islan</option>
                    <option value={3}>Albania</option>
                    <option value={4} selected="selected">
                      United States
                    </option>
                    <option value={5}>Orther</option>
                  </select>
                </form>
              </div>
              <div className="states">
                <form action>
                  <label htmlFor="state">State/Province</label>
                  <select name="state" id="state">
                    <option value>--selected--</option>
                    <option value={1}>Alabama</option>
                    <option value={2}>Alaska</option>
                    <option value={3}>American Samoa</option>
                    <option value={4} selected="selected">
                      Arizona
                    </option>
                    <option value={5}>Arkansas</option>
                    <option value={5}>Orthers</option>
                  </select>
                </form>
              </div>
              <div className="postal-code">
                <form action="#">
                  <label htmlFor="postal" name="postal" id="postal">
                    Zip/Postal Code
                  </label>
                  <input type="number" name="postal" id="postal" />
                </form>
              </div>
              <div className="rate-options variant">
                <form action>
                  <p>
                    <span>Flat: $10.00</span>
                    <input
                      type="radio"
                      name="rate-option"
                      id="flat"
                      defaultChecked
                    />
                    <label htmlFor="flat" className="circle" />
                  </p>
                  <p>
                    <span>Best: $00.00</span>
                    <input type="radio" name="rate-option" id="best" />
                    <label htmlFor="best" className="circle" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-total">
          <table>
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>$2155.95</td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>$100.00</td>
              </tr>
              <tr>
                <th>
                  Shipping <span className="mini-text">[flat]</span>
                </th>
                <td>$10.00</td>
              </tr>
              <tr className="grand-total">
                <th>TOTAL</th>
                <td>$2065.95</td>
              </tr>
            </tbody>
          </table>
          <a href="/checkout.html" className="secondary-button">
            CHECKOUT
          </a>
        </div>
      </div>
    </div>
  );
}
