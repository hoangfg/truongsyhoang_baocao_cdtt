import React from "react";
import { Link } from "react-router-dom";
import ChildSubMenu from "./ChildSubMenu";

export default function SubMenu() {
  return (
    <div className="mega">
      <div className="container">
        <div className="wrapper">
          <div className="flexcol submenu">
            <div className="row">
              <h4>Women's Clothing</h4>
              <ul>
                <ChildSubMenu />
              </ul>
            </div>
          </div>
          <div className="flexcol submenu">
            <div className="row">
              <h4>Jewlry</h4>
            </div>
          </div>
          <div className="flexcol submenu">
            <div className="row">
              <h4>Beauty</h4>
            </div>
          </div>

          <div className="flexcol">
            <div className="row">
              <h4>Top Brands</h4>
              <ul className="women-brands">
                <li>
                  <Link href="#">Nike</Link>
                </li>
                <li>
                  <Link href="#">Louis Vultton</Link>
                </li>
                <li>
                  <Link href="#">Hermes</Link>
                </li>
                <li>
                  <Link href="#">Gucci</Link>
                </li>
                <li>
                  <Link href="#">Zalando</Link>
                </li>
                <li>
                  <Link href="#">Tiffany &amp; Co,</Link>
                </li>
                <li>
                  <Link href="#">Zara</Link>
                </li>
                <li>
                  <Link href="#">H&amp;M</Link>
                </li>
                <li>
                  <Link href="#">Cartier</Link>
                </li>
                <li>
                  <Link href="#">Chanel</Link>
                </li>
                <li>
                  <Link href="#">Hurley</Link>
                </li>
              </ul>
              <Link href="#" className="view-all">
                view all brands
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
          <div className="flexcol products">
            <div className="row">
              <div className="media">
                <div className="thumbnail object-cover">
                  <Link href="#">
                    <img src="./assets/products/apparel4.jpg" alt="g" />
                  </Link>
                </div>
              </div>
              <div className="text-content">
                <h4>Most wanted!</h4>
                <Link href="#" className="primary-button">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
