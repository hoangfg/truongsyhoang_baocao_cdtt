import React from "react";
import { Link } from "react-router-dom";

export default function Top2Trending() {
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to="/product/:id">
            <img src="./assets/products/shoe1.jpg" alt="1" />
          </Link>
        </div>
        <div className="hoverable">
          <ul>
            <li className="active">
              <Link href="#">
                <i className="ri-heart-line" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="ri-eye-line" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="ri-shuffle-line" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="discount circle flexcenter">
          <span>31%</span>
        </div>
      </div>
      <div className="content">
        <h3 className="main-links">
          <Link to="/product/:id">
            Men Slip On Shoes Casual with Arch Support Insoles
          </Link>
        </h3>
        <div className="rating">
          <div className="stars" />
          <span className="mini-text">(2,548)</span>
        </div>
        <div className="price">
          <span className="current">$129.99</span>
          <span className="normal mini-text">$189.99</span>
        </div>
        <div className="mini-text">
          <p>2975 sold</p>
          <p>Free Shipping</p>
        </div>
      </div>
    </div>
  );
}
