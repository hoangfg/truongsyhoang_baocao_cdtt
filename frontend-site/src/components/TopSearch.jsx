import React from "react";
import { Link } from "react-router-dom";

export default function TopSearch() {
  return (
    <div className="header-main mobile-hide">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="left">
            <div className="dpt-cat">
              <div className="dpt-head">
                <div className="main-text">All Department</div>
                <div className="mini-text mobile-hide">Total 1059 Products</div>
                <Link href="#" className="dpt-trigger mobile-hide">
                  <i className="ri-menu-3-line ri-xl" />
                </Link>
              </div>
              <div className="dpt-menu">
                <ul className="second-links">
                  <li className="has-child beauty">
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-bear-smile-line"> </i>
                      </div>
                      Beauty
                      <div className="icon-small">
                        <i className="ri-arrow-right-s-line"> </i>
                      </div>
                    </Link>
                    <ul>
                      <li>
                        <Link href="#">Makeup</Link>
                      </li>
                      <li>
                        <Link href="#">Skin Care</Link>
                      </li>
                      <li>
                        <Link href="#">Hair Care</Link>
                      </li>
                      <li>
                        <Link href="#">Fragrance</Link>
                      </li>
                      <li>
                        <Link href="#">Foot &amp; Hand Care</Link>
                      </li>
                      <li>
                        <Link href="#">Tools &amp; Accessories</Link>
                      </li>
                      <li>
                        <Link href="#">Shave &amp; Hair Removal</Link>
                      </li>
                      <li>
                        <Link href="#">Personal Care</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child electric">
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-bluetooth-connect-line"> </i>
                      </div>
                      Electronic
                      <div className="icon-small">
                        <i className="ri-arrow-right-s-line"> </i>
                      </div>
                    </Link>
                    <ul>
                      <li>
                        <Link href="#">Makeup</Link>
                      </li>
                      <li>
                        <Link href="#">Skin Care</Link>
                      </li>
                      <li>
                        <Link href="#">Hair Care</Link>
                      </li>
                      <li>
                        <Link href="#">Fragrance</Link>
                      </li>
                      <li>
                        <Link href="#">Foot &amp; Hand Care</Link>
                      </li>
                      <li>
                        <Link href="#">Tools &amp; Accessories</Link>
                      </li>
                      <li>
                        <Link href="#">Shave &amp; Hair Removal</Link>
                      </li>
                      <li>
                        <Link href="#">Personal Care</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child fashion">
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-t-shirt-air-line"> </i>
                      </div>
                      Women's Fashion
                      <div className="icon-small">
                        <i className="ri-arrow-right-s-line"> </i>
                      </div>
                    </Link>
                    <ul>
                      <li>
                        <Link href="#">Makeup</Link>
                      </li>
                      <li>
                        <Link href="#">Skin Care</Link>
                      </li>
                      <li>
                        <Link href="#">Hair Care</Link>
                      </li>
                      <li>
                        <Link href="#">Fragrance</Link>
                      </li>
                      <li>
                        <Link href="#">Foot &amp; Hand Care</Link>
                      </li>
                      <li>
                        <Link href="#">Tools &amp; Accessories</Link>
                      </li>
                      <li>
                        <Link href="#">Shave &amp; Hair Removal</Link>
                      </li>
                      <li>
                        <Link href="#">Personal Care</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-shirt-line"> </i>
                      </div>
                      Men's Fashion
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-user-5-line"> </i>
                      </div>
                      Girl's Fashion
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-user-6-line"> </i>
                      </div>
                      Boy's Fashion
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-heart-pulse-line"> </i>
                      </div>
                      Health &amp; Household
                    </Link>
                  </li>
                  <li className="has-child homekit">
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-home-8-line"> </i>
                      </div>
                      Home &amp; Kitchen
                      <div className="icon-small">
                        <i className="ri-arrow-right-s-line"> </i>
                      </div>
                    </Link>
                    <div className="mega">
                      <div className="flexcol">
                        <div className="row">
                          <h4>
                            <Link href="#">Kitchen &amp; Dining</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="#">Kitcheb</Link>
                            </li>
                            <li>
                              <Link href="#">Dining Room</Link>
                            </li>
                            <li>
                              <Link href="#">Pantry</Link>
                            </li>
                            <li>
                              <Link href="#">Great Room</Link>
                            </li>
                            <li>
                              <Link href="#">Breakfast Nook</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <h4>
                            <Link href="#">Living</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="#">Living Room</Link>
                            </li>
                            <li>
                              <Link href="#">Family Room</Link>
                            </li>
                            <li>
                              <Link href="#">Sunroom</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flexcol">
                        <div className="row">
                          <h4>
                            <Link href="#">Outdoor</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="#">Landscape</Link>
                            </li>
                            <li>
                              <Link href="#">Patio</Link>
                            </li>
                            <li>
                              <Link href="#">Deck</Link>
                            </li>
                            <li>
                              <Link href="#">Pool</Link>
                            </li>
                            <li>
                              <Link href="#">Backyard</Link>
                            </li>
                            <li>
                              <Link href="#">Porch</Link>
                            </li>
                            <li>
                              <Link href="#">Exterior</Link>
                            </li>
                            <li>
                              <Link href="#">Outdoor Kitchen</Link>
                            </li>
                            <li>
                              <Link href="#">Front Yard</Link>
                            </li>
                            <li>
                              <Link href="#">Driveway</Link>
                            </li>
                            <li>
                              <Link href="#">Poolhouse</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flexcol">
                        <div className="row">
                          <h4>
                            <Link href="#">Outdoor</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link href="#">Landscape</Link>
                            </li>
                            <li>
                              <Link href="#">Patio</Link>
                            </li>
                            <li>
                              <Link href="#">Deck</Link>
                            </li>
                            <li>
                              <Link href="#">Pool</Link>
                            </li>
                            <li>
                              <Link href="#">Backyard</Link>
                            </li>
                            <li>
                              <Link href="#">Porch</Link>
                            </li>
                            <li>
                              <Link href="#">Exterior</Link>
                            </li>
                            <li>
                              <Link href="#">Outdoor Kitchen</Link>
                            </li>
                            <li>
                              <Link href="#">Front Yard</Link>
                            </li>
                            <li>
                              <Link href="#">Driveway</Link>
                            </li>
                            <li>
                              <Link href="#">Poolhouse</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-android-line"> </i>
                      </div>
                      Pet Supplies
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-basketball-line"> </i>
                      </div>
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="icon-large">
                        <i className="ri-shield-star-line"> </i>
                      </div>
                      Best Seller
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="search-box">
              <form action className="search">
                <span className="icon-large">
                  <i className="ri-search-line" />
                </span>
                <input
                  type="search"
                  name
                  id
                  placeholder="Search for Products"
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
