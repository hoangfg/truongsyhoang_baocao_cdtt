import React from "react";

export default function CheckoutInfo() {
  return (
    <div className="item left styled">
      <h1>Shipping Address</h1>
      <form action>
        <p>
          <label htmlFor="email">
            Email Address
            <span />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
          />
        </p>
        <p>
          <label htmlFor="fname">
            First Name
            <span />
          </label>
          <input type="text" name="fname" id="fname" required />
        </p>
        <p>
          <label htmlFor="lname">
            Last Name
            <span />
          </label>
          <input type="text" name="lname" id="lname" required />
        </p>
        <p>
          <label htmlFor="address">
            Street Address
            <span />
          </label>
          <input type="text" name="address" id="address" required />
        </p>
        <p>
          <label htmlFor="city">
            City
            <span />
          </label>
          <input type="text" name="city" id="city" required />
        </p>
        <p>
          <label htmlFor="state">
            State/Province
            <span />
          </label>
          <input type="text" name="state" id="state" required />
        </p>
        <p>
          <label htmlFor="postal">
            Zip / Postal code
            <span />
          </label>
          <input type="number" name="postal" id="postal" required />
        </p>
        <p>
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
        </p>
        <p>
          <label htmlFor="phone">
            Phone
            <span />
          </label>
          <input type="number" name="phone" id="phone" required />
        </p>
        <p>
          <label>Order Notes (optional)</label>
          <textarea cols={30} rows={10} defaultValue={""} />
        </p>
        <p className="checkset">
          <input type="checkbox" name="anaccount" id="anaccount" />
          <label htmlFor="anaccount">Created an account</label>
        </p>
      </form>
      <div className="shipping-methods">
        <h2>Shopping Mothods</h2>
        <p className="checkset">
          <input type="radio" defaultChecked />
          <label htmlFor>$5.00 Flare Rate</label>
        </p>
      </div>
      <div className="primary-checkout">
        <button className="primary-button">Place Order</button>
      </div>
    </div>
  );
}
