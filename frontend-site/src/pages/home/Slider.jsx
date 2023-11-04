import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import sliderService from "../../services/sliderService";
export default function Slider(props) {
  const sliders = props.sliders;
  const filterSliders = sliders.filter((sliders) => sliders.status === 0);
  useEffect(() => {
    const swiper = new Swiper(".myslider", {
      modules: [Autoplay, Pagination, Navigation],
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
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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
              {filterSliders.map((item) => (
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 4"
                  data-swiper-slide-index={0}
                  style={{ width: 588 }}
                >
                  <div className="item">
                    <div className="image object-cover">
                      <Link to={item.link}>
                        <img
                          src={sliderService.getPhotoUrl(item?.image)}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="text-content flexcol">
                      <h4>{item.name}</h4>
                      {/* <h2>
                        <span>Come and get !!!</span>
                        <br />
                        <span>Brand New Shoes</span>
                      </h2> */}
                      <Link to={item.link} className="primary-button">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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
