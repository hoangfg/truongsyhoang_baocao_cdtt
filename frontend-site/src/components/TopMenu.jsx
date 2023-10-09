import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";

export default function TopMenu() {
  return (
    <div className="header-nav">
      <div className="container">
        <div className="wrapper flexitem">
          <Link href="#" className="trigger desktop-hide">
            <i className="ri-menu-2-line" />
          </Link>
          <div className="left flexitem">
            <div className="logo">
              <Link href="#">
                <span className="circle" />
                .HoangFG
              </Link>
            </div>
            <nav className="mobile-hide">
              <ul className="flexitem second-links">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">Shop</Link>
                </li>
                <li className="has-child">
                  <Link href="#">
                    Women
                    <div className="icon-small">
                      <i className="ri-arrow-down-s-line" />
                    </div>
                  </Link>
                  <div className="mega">
                    <div className="container">
                      <div className="wrapper">
                        <div className="flexcol">
                          <div className="row">
                            <h4>Women's Clothing</h4>
                            <ul>
                              <li>
                                <Link href="#">Dress</Link>
                              </li>
                              <li>
                                <Link href="#">Tops &amp; Tees</Link>
                              </li>
                              <li>
                                <Link href="#">Jackets &amp; Coats</Link>
                              </li>
                              <li>
                                <Link href="#">Pants &amp; Capris</Link>
                              </li>
                              <li>
                                <Link href="#">Sweaters</Link>
                              </li>
                              <li>
                                <Link href="#">Costumes</Link>
                              </li>
                              <li>
                                <Link href="#">Hoodies &amp; Sweatshirts</Link>
                              </li>
                              <li>
                                <Link href="#">Pajamas &amp; Robes</Link>
                              </li>
                              <li>
                                <Link href="#">Shorts</Link>
                              </li>
                              <li>
                                <Link href="#">Swimwear</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flexcol">
                          <div className="row">
                            <h4>Jewlry</h4>
                            <ul>
                              <li>
                                <Link href="#">Accessories</Link>
                              </li>
                              <li>
                                <Link href="#">Bags &amp; Purses</Link>
                              </li>
                              <li>
                                <Link href="#">Necklaces</Link>
                              </li>
                              <li>
                                <Link href="#">Rings</Link>
                              </li>
                              <li>
                                <Link href="#">Earrings</Link>
                              </li>
                              <li>
                                <Link href="#">Bracelets</Link>
                              </li>
                              <li>
                                <Link href="#">Body Jewelry</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flexcol">
                          <div className="row">
                            <h4>Beauty</h4>
                            <ul>
                              <li>
                                <Link href="#">Bath Accessories</Link>
                              </li>
                              <li>
                                <Link href="#">Makeup &amp; Cosmetics</Link>
                              </li>
                              <li>
                                <Link href="#">Skin Care</Link>
                              </li>
                              <li>
                                <Link href="#">Hair Care</Link>
                              </li>
                              <li>
                                <Link href="#">Essantial Oils</Link>
                              </li>
                              <li>
                                <Link href="#">Fragrances</Link>
                              </li>
                              <li>
                                <Link href="#">Soaps &amp; Bath</Link>
                              </li>
                              <li>
                                <Link href="#">Bombs</Link>
                              </li>
                              <li>
                                <Link href="#">Face Masks &amp; Coverings</Link>
                              </li>
                              <li>
                                <Link href="#">Spa kits &amp; Gifts</Link>
                              </li>
                            </ul>
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
                                  <img
                                    src=".../assets/products/apparel4.jpg"
                                    alt="g"
                                  />
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
                </li>
                <li>
                  <Link href="#">Men</Link>
                </li>
                <li>
                  <Link href="#">
                    Sport
                    <div className="fly-item">
                      <span>New!</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="right">
            <ul className="flexitem second-links">
              <li className="mobile-hide">
                <Link href="#">
                  <div className="icon-large">
                    <i className="ri-heart-line" />
                  </div>
                  <div className="fly-item">
                    <div className="item-number">0</div>
                  </div>
                </Link>
              </li>
              <li className="iscart">
                <Link href="#">
                  <div className="icon-large">
                    <i className="ri-shopping-cart-line" />
                    <div className="fly-item">
                      <div className="item-number">5</div>
                    </div>
                  </div>
                  <div className="icon-text">
                    <div className="mini-text">Total</div>
                    <div className="cart-total">$1.622</div>
                  </div>
                  <MiniCart></MiniCart>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
