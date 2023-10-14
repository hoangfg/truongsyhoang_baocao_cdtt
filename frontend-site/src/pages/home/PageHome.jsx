import React from "react";
import Slider from "./Slider";
import ListBrand from "./brand/ListBrand";
import Trending from "./trending/Trending";
import Feature from "./featuresProduct/Feature";
import Banners from "./../banners/Banners";
import Modal from "./../../components/Modal";

export default function PageHome() {
  return (
    <>
      <Slider></Slider>
      <ListBrand />
      <Trending />
      <Feature />
      <Banners />
      <Modal />
    </>
  );
}
