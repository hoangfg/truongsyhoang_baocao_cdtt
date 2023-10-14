import React from "react";

export default function SignInForm() {
  return (
    <div className="item left styled">
      <h1>Sign In</h1>
      <form action>
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
      </form>

      <div className="primary-checkout">
        <button className="primary-button">Sign In</button>
      </div>
    </div>
  );
}
