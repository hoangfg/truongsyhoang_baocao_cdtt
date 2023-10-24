import React from "react";
import bookService from "../../../services/bookService";

export default function ImageThumbnail({ onThumbnailClick, thumb }) {
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
          data-swiper-slide-index={0}
          style={{ width: "129.667px", marginRight: 32 }}
          onClick={() => onThumbnailClick(0)}
        >
          <img src={bookService.getPhotoUrl(thumb)} alt="" />
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
