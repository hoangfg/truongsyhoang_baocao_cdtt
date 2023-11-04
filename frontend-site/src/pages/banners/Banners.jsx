import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Author from "./Author";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { useEffect } from "react";
import { Component } from "react";

class Banners extends Component {
  render() {
    const { books, authors } = this.props;

    //  console.log(books);
    let filteredBook = books.filter((item) => item.status === 0);
    let filteredGenre = authors.filter((item) => item.status === 0);
    // console.log("authỏ", filteredGenre);
    // const swiper = new Swiper(".myslider", {
    //   modules: [Navigation, Pagination],
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
    return (
      <div className="banners">
        <div className="container">
          <div className="wrapper">
            <div className="column">
              {/* banners */}
              <div className="product-categories flexwrap">
                <Swiper
                  // autoplay={{
                  //   delay: 2500,
                  //   disableOnInteraction: false,
                  // }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  slidesPerView={2}
                >
                  {filteredGenre &&
                    filteredGenre.map((item) => (
                      <>
                        <SwiperSlide className="row">
                          <Author author={item} books={filteredBook} />
                        </SwiperSlide>
                      </>
                    ))}
                </Swiper>
              </div>
              {/* category */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Banners;
