import React from "react";
import { Link } from "react-router-dom";
// import AdminAuthBox from "../../scences/global/AdminAuthBox";

export default function TopNav() {
  return (
    <div className="header-top mobile-hide">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="left">
            <ul className="flexitem main-links">
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Featured Products</Link>
              </li>
              <li>
                <Link href="#">Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="flexitem main-links">
              <li>
                <Link href="#">Sign Up</Link>
              </li>
              <li>
                <Link href="#">My Account</Link>
              </li>
              <li>
                <Link href="#">Order Tracking</Link>
              </li>
              <li>
                <Link href="#">
                  USD
                  <span className="icon-small">
                    <i className="ri-arrow-down-s-line" />
                  </span>
                </Link>
                <ul>
                  <li className="current">
                    <Link href="#">USD</Link>
                  </li>
                  <li>
                    <Link href="#">EURO</Link>
                  </li>
                  <li>
                    <Link href="#">GBP</Link>
                  </li>
                  <li>
                    <Link href="#">IDR</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">
                  English
                  <span className="icon-small">
                    <i className="ri-arrow-down-s-line" />
                  </span>
                </Link>
                <ul>
                  <li className="current">
                    <Link href="#">English</Link>
                  </li>
                  <li>
                    <Link href="#">German</Link>
                  </li>
                  <li>
                    <Link href="#">Spanish</Link>
                  </li>
                  <li>
                    <Link href="#">Bahasa</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
