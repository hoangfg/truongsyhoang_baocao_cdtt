import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
export default function Slider() {
  useEffect(() => {
    const swiper = new Swiper(".myslider", {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }, []);
  return (
    <div className="slider">
      <div className="container">
        <div className="wrapper">
          <div className="myslider swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-f0026133bcba9a28"
              aria-live="polite"
            >
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 4"
                data-swiper-slide-index={0}
                style={{ width: 588 }}
              >
                <div className="item">
                  <div className="image object-cover">
                    <img src="./assets/slider/slider0.jpg" alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Shoes Fashion</h4>
                    <h2>
                      <span>Come and get !!!</span>
                      <br />
                      <span>Brand New Shoes</span>
                    </h2>
                    <Link href="#" className="primary-button">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="2 / 4"
                data-swiper-slide-index={1}
                style={{ width: 588 }}
              >
                <div className="item">
                  <div className="image object-cover">
                    <img src="./assets/slider/slider1.jpg" alt="1" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Quick Fashion</h4>
                    <h2>
                      <span>Fit Your Wardrode</span>
                      <br />
                      <span>With luxury items</span>
                    </h2>
                    <Link href="#" className="primary-button">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="3 / 4"
                data-swiper-slide-index={2}
                style={{ width: 588 }}
              >
                <div className="item">
                  <div className="image object-cover">
                    <img src="./assets/slider/slider2.jpg" alt="1" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Quick Offer</h4>
                    <h2>
                      <span>Wooden Minimal Sofa</span>
                      <br />
                      <span>Extra 50% off</span>
                    </h2>
                    <Link href="#" className="primary-button">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="4 / 4"
                data-swiper-slide-index={3}
                style={{ width: 588 }}
              >
                <div className="item">
                  <div className="image object-cover">
                    <img src="./assets/slider/slider3.jpg" alt="1" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Best Deals</h4>
                    <h2>
                      <span>Home Workout Accessoroses</span>
                      <br />
                      <span>Push the limit</span>
                    </h2>
                    <Link href="#" className="primary-button">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                aria-current="true"
              />
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet" />
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
