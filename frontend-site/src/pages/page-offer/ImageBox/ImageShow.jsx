import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import ImageShowItem from "./ImageShowItem";
import { useState } from "react";

export default function ImageShow({ currentImageIndex }) {
  useEffect(() => {
    const swiper = new Swiper(".big-image", {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      initialSlide: currentImageIndex,
    });
  }, [currentImageIndex]);
  return (
    <div className="big-image swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden">
      <div
        className="big-image-wrapper swiper-wrapper"
        id="swiper-wrapper-500b6df2f3bf3333"
        aria-live="polite"
        style={{
          height: 680,
          transitionDuration: "0ms",
          transform: "translate3d(-906px, 0px, 0px)",
        }}
      >
        <ImageShowItem />
      </div>
      {/* <div
        className="swiper-button-next"
        tabIndex={0}
        role="button"
        aria-label="Next slide"
        aria-controls="swiper-wrapper-500b6df2f3bf3333"
      />
      <div
        className="swiper-button-prev"
        tabIndex={0}
        role="button"
        aria-label="Previous slide"
        aria-controls="swiper-wrapper-500b6df2f3bf3333"
      /> */}
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      />
    </div>
  );
}
