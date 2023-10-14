import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./Register";

export default function SignBox() {
  return (
    <div className="single-checkout">
      <div className="container">
        <div className="wrapper">
          <div className="breadcrumb">
            <ul className="flexitem">
              <li>
                <a href="#">Home</a>
              </li>
              <li>Sign In</li>
            </ul>
          </div>
          <div className="checkout flexwrap">
            <SignInForm />
            <SignUpForm />
            {/* <CheckoutProduct /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
