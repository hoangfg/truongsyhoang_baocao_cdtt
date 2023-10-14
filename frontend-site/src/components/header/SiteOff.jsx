import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteOff() {
  return (
   <aside className="site-off desktop-hide">
  <div className="off-canvas">
    <div className="canvas-head flexitem">
      <div className="logo">
        <Link href="#"><span className="circle" />.HoangFG</Link>
      </div>
      <Link href="#" className="t-close flexcenter"><i className="ri-close-line" /></Link>
    </div>
    <div className="deparments">
      <div className="dpt-head">
        <div className="main-text">All Department</div>
        <div className="mini-text mobile-hide">Total 1059 Products</div>
        <Link href="#" className="dpt-trigger mobile-hide">
          {/* css 1135 */}
          <i className="ri-menu-3-line ri-xl" />
          <i className="ri-close-line ri-xl" />
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
              <li><Link href="#">Makeup</Link></li>
              <li><Link href="#">Skin Care</Link></li>
              <li><Link href="#">Hair Care</Link></li>
              <li><Link href="#">Fragrance</Link></li>
              <li><Link href="#">Foot &amp; Hand Care</Link></li>
              <li><Link href="#">Tools &amp; Accessories</Link></li>
              <li><Link href="#">Shave &amp; Hair Removal</Link></li>
              <li><Link href="#">Personal Care</Link></li>
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
              <li><Link href="#">Makeup</Link></li>
              <li><Link href="#">Skin Care</Link></li>
              <li><Link href="#">Hair Care</Link></li>
              <li><Link href="#">Fragrance</Link></li>
              <li><Link href="#">Foot &amp; Hand Care</Link></li>
              <li><Link href="#">Tools &amp; Accessories</Link></li>
              <li><Link href="#">Shave &amp; Hair Removal</Link></li>
              <li><Link href="#">Personal Care</Link></li>
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
              <li><Link href="#">Makeup</Link></li>
              <li><Link href="#">Skin Care</Link></li>
              <li><Link href="#">Hair Care</Link></li>
              <li><Link href="#">Fragrance</Link></li>
              <li><Link href="#">Foot &amp; Hand Care</Link></li>
              <li><Link href="#">Tools &amp; Accessories</Link></li>
              <li><Link href="#">Shave &amp; Hair Removal</Link></li>
              <li><Link href="#">Personal Care</Link></li>
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
                  <h4><Link href="#">Kitchen &amp; Dining</Link></h4>
                  <ul>
                    <li><Link href="#">Kitcheb</Link></li>
                    <li><Link href="#">Dining Room</Link></li>
                    <li><Link href="#">Pantry</Link></li>
                    <li><Link href="#">Great Room</Link></li>
                    <li><Link href="#">Breakfast Nook</Link></li>
                  </ul>
                </div>
                <div className="row">
                  <h4><Link href="#">Living</Link></h4>
                  <ul>
                    <li><Link href="#">Living Room</Link></li>
                    <li><Link href="#">Family Room</Link></li>
                    <li><Link href="#">Sunroom</Link></li>
                  </ul>
                </div>
              </div>
              <div className="flexcol">
                <div className="row">
                  <h4><Link href="#">Outdoor</Link></h4>
                  <ul>
                    <li><Link href="#">Landscape</Link></li>
                    <li><Link href="#">Patio</Link></li>
                    <li><Link href="#">Deck</Link></li>
                    <li><Link href="#">Pool</Link></li>
                    <li><Link href="#">Backyard</Link></li>
                    <li><Link href="#">Porch</Link></li>
                    <li><Link href="#">Exterior</Link></li>
                    <li><Link href="#">Outdoor Kitchen</Link></li>
                    <li><Link href="#">Front Yard</Link></li>
                    <li><Link href="#">Driveway</Link></li>
                    <li><Link href="#">Poolhouse</Link></li>
                  </ul>
                </div>
              </div>
              <div className="flexcol">
                <div className="row">
                  <h4><Link href="#">Outdoor</Link></h4>
                  <ul>
                    <li><Link href="#">Landscape</Link></li>
                    <li><Link href="#">Patio</Link></li>
                    <li><Link href="#">Deck</Link></li>
                    <li><Link href="#">Pool</Link></li>
                    <li><Link href="#">Backyard</Link></li>
                    <li><Link href="#">Porch</Link></li>
                    <li><Link href="#">Exterior</Link></li>
                    <li><Link href="#">Outdoor Kitchen</Link></li>
                    <li><Link href="#">Front Yard</Link></li>
                    <li><Link href="#">Driveway</Link></li>
                    <li><Link href="#">Poolhouse</Link></li>
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
    <nav>
      <ul className="flexitem second-links">
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Shop</Link></li>
        <li className="has-child">
          <Link href="#">Women
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
                      <li><Link href="#">Dress</Link></li>
                      <li><Link href="#">Tops &amp; Tees</Link></li>
                      <li><Link href="#">Jackets &amp; Coats</Link></li>
                      <li><Link href="#">Pants &amp; Capris</Link></li>
                      <li><Link href="#">Sweaters</Link></li>
                      <li><Link href="#">Costumes</Link></li>
                      <li><Link href="#">Hoodies &amp; Sweatshirts</Link></li>
                      <li><Link href="#">Pajamas &amp; Robes</Link></li>
                      <li><Link href="#">Shorts</Link></li>
                      <li><Link href="#">Swimwear</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="flexcol">
                  <div className="row">
                    <h4>Jewlry</h4>
                    <ul>
                      <li><Link href="#">Accessories</Link></li>
                      <li><Link href="#">Bags &amp; Purses</Link></li>
                      <li><Link href="#">Necklaces</Link></li>
                      <li><Link href="#">Rings</Link></li>
                      <li><Link href="#">Earrings</Link></li>
                      <li><Link href="#">Bracelets</Link></li>
                      <li><Link href="#">Body Jewelry</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="flexcol">
                  <div className="row">
                    <h4>Beauty</h4>
                    <ul>
                      <li><Link href="#">Bath Accessories</Link></li>
                      <li><Link href="#">Makeup &amp; Cosmetics</Link></li>
                      <li><Link href="#">Skin Care</Link></li>
                      <li><Link href="#">Hair Care</Link></li>
                      <li><Link href="#">Essantial Oils</Link></li>
                      <li><Link href="#">Fragrances</Link></li>
                      <li><Link href="#">Soaps &amp; Bath</Link></li>
                      <li><Link href="#">Bombs</Link></li>
                      <li>
                        <Link href="#">Face Masks &amp; Coverings</Link>
                      </li>
                      <li><Link href="#">Spa kits &amp; Gifts</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="flexcol">
                  <div className="row">
                    <h4>Top Brands</h4>
                    <ul className="women-brands">
                      <li><Link href="#">Nike</Link></li>
                      <li><Link href="#">Louis Vultton</Link></li>
                      <li><Link href="#">Hermes</Link></li>
                      <li><Link href="#">Gucci</Link></li>
                      <li><Link href="#">Zalando</Link></li>
                      <li><Link href="#">Tiffany &amp; Co,</Link></li>
                      <li><Link href="#">Zara</Link></li>
                      <li><Link href="#">H&amp;M</Link></li>
                      <li><Link href="#">Cartier</Link></li>
                      <li><Link href="#">Chanel</Link></li>
                      <li><Link href="#">Hurley</Link></li>
                    </ul>
                    <Link href="#" className="view-all">view all brands
                      <i className="ri-arrow-right-line" /></Link>
                  </div>
                </div>
                <div className="flexcol products">
                  <div className="row">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <Link href="#">
                          <img src="assets/products/apparel4.jpg" alt />
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
        <li><Link href="#">Men</Link></li>
        <li>
          <Link href="#">Sport
            <div className="fly-item"><span>New!</span></div>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="thetop-nav">
      <div className="left">
        <ul className="flexitem main-links">
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Featured Products</Link></li>
          <li><Link href="#">Wishlist</Link></li>
        </ul>
      </div>
      <div className="right">
        <ul className="flexitem main-links">
          <li><Link href="#">Sign Up</Link></li>
          <li><Link href="#">My Account</Link></li>
          <li><Link href="#">Order Tracking</Link></li>
          <li>
            <Link href="#">USD
              <span className="icon-small"><i className="ri-arrow-down-s-line" /></span></Link>
            <ul>
              <li className="current"><Link href="#">USD</Link></li>
              <li><Link href="#">EURO</Link></li>
              <li><Link href="#">GBP</Link></li>
              <li><Link href="#">IDR</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#">English
              <span className="icon-small"><i className="ri-arrow-down-s-line" /></span></Link>
            <ul>
              <li className="current"><Link href="#">English</Link></li>
              <li><Link href="#">German</Link></li>
              <li><Link href="#">Spanish</Link></li>
              <li><Link href="#">Bahasa</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</aside>

  )
}
