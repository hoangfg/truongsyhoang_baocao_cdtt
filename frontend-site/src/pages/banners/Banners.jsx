import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Author from "./Author";

import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { useEffect } from "react";

export default function Banners() {
  useEffect(() => {
    // const swiper = new Swiper(".myAuthor", {
    // //   modules: [Navigation, Pagination],
    //   loop: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
    // });
  }, []);
  return (
    <div className="banners">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="banner flexwrap">
              <div className="row">
                <div className="item">
                  <div className="image">
                    <img src="/assets/banner/banner1.jpg" alt />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Brutal Sale!</h4>
                    <h3>
                      <span>Get the deal in here </span>
                      <br />
                      Living Room Chair
                    </h3>
                    <Link href="#" className="primary-button">
                      Shop Now
                    </Link>
                  </div>
                  <Link href="#" className="over-link" />
                </div>
              </div>
              <div className="row">
                <div className="item get-gray">
                  <div className="image">
                    <img src="/assets/banner/banner2.jpg" alt />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Brutal Sale!</h4>
                    <h3>
                      <span>Sidcount everyday</span>
                      <br />
                      Office Outfit
                    </h3>
                    <Link href="#" className="primary-button">
                      Shop Now
                    </Link>
                  </div>
                  <Link href="#" className="over-link" />
                </div>
              </div>
            </div>
            {/* banners */}
            <div className="product-categories flexwrap">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                <SwiperSlide className="row">
                  <Author />
                </SwiperSlide>
                <SwiperSlide className="row">
                  <Author />
                </SwiperSlide>
                <SwiperSlide className="row">
                  <Author />
                </SwiperSlide>
                <SwiperSlide className="row">
                  <Author />
                </SwiperSlide>
                <SwiperSlide className="row">
                  <Author />
                </SwiperSlide>
                <SwiperSlide className="row">
                  <Author />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* category */}
          </div>
        </div>
      </div>
    </div>
  );
}
