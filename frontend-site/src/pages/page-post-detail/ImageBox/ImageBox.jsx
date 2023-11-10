import React, { useEffect, useState } from "react";
import ImageShow from "./ImageShow";

import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import bookService from "../../../services/bookService";
import postService from "../../../services/postService";

export default function ImageBox(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
  const { image, discountPercentage } = props;
  const [toggler, setToggler] = useState(false);
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[bookService.getPhotoUrl(image)]}
      />
      <div className="item is_sticky">
        <div className="big-image swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden">
          <div
            className="big-image-wrapper swiper-wrapper"
            id="swiper-wrapper-500b6df2f3bf3333"
            aria-live="polite"
            style={{
              height: 580,
              transitionDuration: "0ms",
              // transform: "translate3d(-906px, 0px, 0px)",
            }}
          >
            <>
              <div
                className="image-show imagePosition swiper-slide swiper-slide-next"
                role="group"
                // aria-label="2 / 3"
                data-swiper-slide-index={0}
                style={{ width: 353 }}
              >
                <Link>
                  <img
                    src={postService.getPhotoUrl(image)}
                    alt=""
                    onClick={() => setToggler(!toggler)}
                  />
                </Link>
              </div>
            </>
          </div>

          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
      </div>
    </>
  );
}
