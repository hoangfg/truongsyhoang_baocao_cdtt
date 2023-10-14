import React from "react";

export default function ImageThumbnail({ onThumbnailClick }) {
  return (
    <div
      thumbslider
      className="small-image swiper-initialized swiper-horizontal swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs"
    >
      <ul
        className="small-image-wrapper flexitem swiper-wrapper"
        id="swiper-wrapper-1ae3fad108cc6feb1"
        aria-live="polite"
        style={{
          transform: "translate3d(0px, 0px, 0px)",
          transitionDuration: "0ms",
        }}
      >
        <li
          className="thumbnail-show swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
          role="group"
          aria-label="1 / 3"
          data-swiper-slide-index={0}
          style={{ width: "129.667px", marginRight: 32 }}
          onClick={() => onThumbnailClick(0)}
        >
          <img src="/assets/products/apparel4.jpg" alt="" />
        </li>
      </ul>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      />
    </div>
  );
}
