import React from "react";
import { Link } from "react-router-dom";

export default function FooterWidget() {
  return (
    <div className="widgets">
      <div className="container">
        <div className="wrapper">
          <div className="flexwrap">
            <div className="row">
              <div className="item mini-links">
                <h4>Help &amp; Contact</h4>
                <ul className="flexcol">
                  <li>
                    <Link href="#">Your Account</Link>
                  </li>
                  <li>
                    <Link href="#">Your Orders</Link>
                  </li>
                  <li>
                    <Link href="#">Shipping Rates</Link>
                  </li>
                  <li>
                    <Link href="#">Returns</Link>
                  </li>
                  <li>
                    <Link href="#">Assistant</Link>
                  </li>
                  <li>
                    <Link href="#">Help</Link>
                  </li>
                  <li>
                    <Link href="#">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="item mini-links">
                <h4>Product Categories</h4>
                <ul className="flexcol">
                  <li>
                    <Link href="#">Beauty</Link>
                  </li>
                  <li>
                    <Link href="#">Electronic</Link>
                  </li>
                  <li>
                    <Link href="#">Women's Fashion</Link>
                  </li>
                  <li>
                    <Link href="#">Men's Fashion</Link>
                  </li>
                  <li>
                    <Link href="#">Girl's Fashion</Link>
                  </li>
                  <li>
                    <Link href="#">Boy's Fashion</Link>
                  </li>
                  <li>
                    <Link href="#">Heath &amp; Household</Link>
                  </li>
                  <li>
                    <Link href="#">Home &amp; Kitchen</Link>
                  </li>
                  <li>
                    <Link href="#">Pet supplies</Link>
                  </li>
                  <li>
                    <Link href="#">Sports</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="item mini-links">
                <h4>Payment Info</h4>
                <ul className="flexcol">
                  <li>
                    <Link href="#">Bussiness Card</Link>
                  </li>
                  <li>
                    <Link href="#">Shop with point</Link>
                  </li>
                  <li>
                    <Link href="#">Reload Your Balance</Link>
                  </li>
                  <li>
                    <Link href="#">Paypal&gt;</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="item mini-links">
                <h4>Abour Us</h4>
                <ul className="flexcol">
                  <li>
                    <Link href="#">Company Info</Link>
                  </li>
                  <li>
                    <Link href="#">News</Link>
                  </li>
                  <li>
                    <Link href="#">Investor</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">Policies</Link>
                  </li>
                  <li>
                    <Link href="#">Customer reviews</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
