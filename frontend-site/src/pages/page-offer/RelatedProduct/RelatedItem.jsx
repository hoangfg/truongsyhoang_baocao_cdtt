import React from "react";
import { Link } from "react-router-dom";

export default function RelatedItem() {
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to="/product/:id">
            <img src="/assets/products/apparel1.jpg" alt="" />
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
              <Link to="/product/:id">
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
          <span>25%</span>
        </div>
      </div>
      <div className="content">
        <div className="offer flexitem">
          <p className="mini-text">Offer ends at</p>
          <ul className="flexcenter">
            <li>1</li>
            <li>15</li>
            <li>27</li>
            <li>07</li>
          </ul>
        </div>
        <div className="rating">
          <div className="stars" />
          <span className="mini-text">(1,548)</span>
        </div>
        <h3 className="main-links">
          <Link href="#">Under Armour Man's Tech</Link>
        </h3>
        <div className="price">
          <span className="current">$56.50</span>
          <span className="normal mini-text">$76.00</span>
        </div>
        <div className="stock mini-text" data-stock={5000}>
          <div className="qty">
            <span>
              Sold: <strong className="qty-sold">3549</strong>
            </span>
            <span>
              Stock:
              <strong className="qty-available">107</strong>
            </span>
          </div>
          <div className="bar">
            <div className="available" style={{ width: "70.98%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
