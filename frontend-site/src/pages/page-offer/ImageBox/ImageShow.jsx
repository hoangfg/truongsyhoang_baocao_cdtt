import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import ImageShowItem from "./ImageShowItem";
import { useState } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";

export default function ImageShow({ currentImageIndex, props }) {
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
  const [toggler, setToggler] = useState(false);
  console.log("img1", image);
  return (
    <></>
  );
}
