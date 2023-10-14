import React from "react";
import { Link } from "react-router-dom";

export default function Top1Trending() {
  return (
    <div className="item">
      <div className="offer">
        <p>Offer ands at</p>
        <ul className="flexcenter">
          <li>1</li>
          <li>15</li>
          <li>27</li>
          <li>60</li>
        </ul>
      </div>
      <div className="media">
        <div className="image">
          <Link to="/product/:id">
            <img src="./assets/products/apparel4.jpg" alt="1" />
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
        <div className="rating">
          <div className="stars" />
          <span className="mini-text">(2,548)</span>
        </div>
        <h3 className="main-links">
          <Link to="/product/:id">Happy Sailed Womens Sumer Boho Floral</Link>
        </h3>
        <div className="price">
          <span className="current">$129.99</span>
          <span className="normal mini-text">$189.99</span>
        </div>
        <div className="stock mini-text">
          <div className="qty">
            <span>
              Stock:
              <strong className="qty-avaible">107</strong>
            </span>
            <span>
              Sold:
              <strong className="qty-sold">3.459</strong>
            </span>
          </div>
          <div className="bar">
            <div className="available" />
          </div>
        </div>
      </div>
    </div>
  );
}
