import React from "react";
import { Link } from "react-router-dom";

export default function FeatureItem() {
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
          <span>25%</span>
        </div>
      </div>
      <div className="content">
        <div className="rating">
          <div className="stars" />
          <span className="mini-text">(1,548)</span>
        </div>
        <h3 className="main-links">
          <Link to="/product/:id">Under Armour Man's Tech</Link>
        </h3>
        <div className="price">
          <span className="current">$56.50</span>
          <span className="normal mini-text">$76.00</span>
        </div>
      </div>
    </div>
  );
}
