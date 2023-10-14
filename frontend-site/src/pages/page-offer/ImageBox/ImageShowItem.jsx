import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";

export default function ImageShowItem() {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div
        className="image-show swiper-slide swiper-slide-next"
        role="group"
        aria-label="2 / 3"
        data-swiper-slide-index={0}
        style={{ width: 453 }}
      >
        <Link>
          <img
            src="/assets/products/apparel4.jpg"
            alt=""
            onClick={() => setToggler(!toggler)}
          />
        </Link>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={["/assets/products/apparel4.jpg"]}
      />
    </>
  );
}
