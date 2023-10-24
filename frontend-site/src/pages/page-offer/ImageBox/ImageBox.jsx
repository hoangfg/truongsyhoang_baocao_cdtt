import React, { useEffect, useState } from "react";
import ImageShow from "./ImageShow";
import ImageThumbnail from "./ImageThumbnail";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import bookService from "../../../services/bookService";

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
  const { image } = props;
  console.log("12", image);
  const [toggler, setToggler] = useState(false);
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };
  // console.log("img", props);
  // const { image } = this.props;
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[bookService.getPhotoUrl(image)]}
      />
      <div className="item is_sticky">
        <div className="price">
          <div className="discount">
            32% <br />
            OFF
          </div>
        </div>
        <div className="big-image swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden">
          <div
            className="big-image-wrapper swiper-wrapper"
            id="swiper-wrapper-500b6df2f3bf3333"
            aria-live="polite"
            style={{
              height: 680,
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
                style={{ width: 453 }}
              >
                <Link>
                  <img
                    src={bookService.getPhotoUrl(image)}
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
        <ImageThumbnail onThumbnailClick={handleThumbnailClick} thumb={image} />
      </div>
    </>
  );
}
