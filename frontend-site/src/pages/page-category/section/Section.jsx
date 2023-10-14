import React from "react";
import Breadcrumb from "./Breadcrumb";
import Detail from "./Detail";
import NavigationCat from "./NavigationCat";

export default function Section() {
  return (
    <div className="section">
      <div className="row">
        <div className="cat-head">
          <div className="breadcrumb">
            <Breadcrumb />
          </div>
          <Detail />
          <div className="cat-navigation flexitem">
            <NavigationCat />
          </div>
        </div>
      </div>
      <div className="products main flexwrap">
        <div className="item">
          <div className="media">
            <div className="thumbnail object-cover">
              <a href="#">
                <img src="assets/products/apparel1.jpg" alt />
              </a>
            </div>
            <div className="hoverable">
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="ri-heart-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-eye-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-shuffle-line" />
                  </a>
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
              <a href="#">Under Armour Man's Tech</a>
            </h3>
            <div className="price">
              <span className="current">$56.50</span>
              <span className="normal mini-text">$76.00</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="media">
            <div className="thumbnail object-cover">
              <a href="#">
                <img src="assets/products/apparel2.jpg" alt />
              </a>
            </div>
            <div className="hoverable">
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="ri-heart-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-eye-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-shuffle-line" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="discount circle flexcenter">
              <span>17%</span>
            </div>
          </div>
          <div className="content">
            <div className="rating">
              <div className="stars" />
              <span className="mini-text">(1,548)</span>
            </div>
            <h3 className="main-links">
              <a href="#">Women's Lightweight knit Hoodie Sweater Pullover</a>
            </h3>
            <div className="price">
              <span className="current">$37.50</span>
              <span className="normal mini-text">$45.50</span>
            </div>
            {/* additional structure */}
            <div className="footer">
              <ul className="mini-text">
                <li>Polyester, Cotton</li>
                <li>Pull On closure</li>
                <li>Fashion Personality</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="media">
            <div className="thumbnail object-cover">
              <a href="#">
                <img src="assets/products/apparel1.jpg" alt />
              </a>
            </div>
            <div className="hoverable">
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="ri-heart-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-eye-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-shuffle-line" />
                  </a>
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
              <a href="#">Under Armour Man's Tech</a>
            </h3>
            <div className="price">
              <span className="current">$56.50</span>
              <span className="normal mini-text">$76.00</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="media">
            <div className="thumbnail object-cover">
              <a href="#">
                <img src="assets/products/apparel2.jpg" alt />
              </a>
            </div>
            <div className="hoverable">
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="ri-heart-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-eye-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-shuffle-line" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="discount circle flexcenter">
              <span>17%</span>
            </div>
          </div>
          <div className="content">
            <div className="rating">
              <div className="stars" />
              <span className="mini-text">(1,548)</span>
            </div>
            <h3 className="main-links">
              <a href="#">Women's Lightweight knit Hoodie Sweater Pullover</a>
            </h3>
            <div className="price">
              <span className="current">$37.50</span>
              <span className="normal mini-text">$45.50</span>
            </div>
            {/* additional structure */}
            <div className="footer">
              <ul className="mini-text">
                <li>Polyester, Cotton</li>
                <li>Pull On closure</li>
                <li>Fashion Personality</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="media">
            <div className="thumbnail object-cover">
              <a href="#">
                <img src="assets/products/apparel1.jpg" alt />
              </a>
            </div>
            <div className="hoverable">
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="ri-heart-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-eye-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-shuffle-line" />
                  </a>
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
              <a href="#">Under Armour Man's Tech</a>
            </h3>
            <div className="price">
              <span className="current">$56.50</span>
              <span className="normal mini-text">$76.00</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="media">
            <div className="thumbnail object-cover">
              <a href="#">
                <img src="assets/products/apparel2.jpg" alt />
              </a>
            </div>
            <div className="hoverable">
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="ri-heart-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-eye-line" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-shuffle-line" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="discount circle flexcenter">
              <span>17%</span>
            </div>
          </div>
          <div className="content">
            <div className="rating">
              <div className="stars" />
              <span className="mini-text">(1,548)</span>
            </div>
            <h3 className="main-links">
              <a href="#">Women's Lightweight knit Hoodie Sweater Pullover</a>
            </h3>
            <div className="price">
              <span className="current">$37.50</span>
              <span className="normal mini-text">$45.50</span>
            </div>
            {/* additional structure */}
            <div className="footer">
              <ul className="mini-text">
                <li>Polyester, Cotton</li>
                <li>Pull On closure</li>
                <li>Fashion Personality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="load-more flexcenter">
        <a href="#" className="secondary-button">
          Load more
        </a>
      </div>
    </div>
  );
}
