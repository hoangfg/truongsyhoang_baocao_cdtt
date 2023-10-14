import React from "react";

export default function Register() {
  return (
    <div className="item right">
      <h1>Sign Up</h1>
      <form action>
        <p>
          <label htmlFor="username">
            Username
            <span />
          </label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            required
          />
        </p>
        <p>
          <label htmlFor="email">
            Email
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
          <label htmlFor="password">
            Password
            <span />
          </label>
          <input type="password" name="password" id="password" required />
        </p>
        <p>
          <label htmlFor="cpassword">
            Confim Password
            <span />
          </label>
          <input type="password" name="cpassword" id="cpassword" required />
        </p>
      </form>

      <div className="primary-checkout">
        <button className="primary-button">Sign In</button>
      </div>
    </div>
  );
}
