import React from "react";
import ImageBox from './ImageBox/ImageBox';
import ProductDetail from './ProductDetail/ProductDetail';
import RelatedProduct from './RelatedProduct/RelatedProduct';
import Banners from './../banners/Banners';


export default function PageOffer() {
  return (
    <>
      <div className="single-product">
        <div className="container">
          <div className="wrapper">
            <div className="breadcrumb">
              <ul className="flexitem">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
                <li>Men slip on Shoes Casual with Arch Support Insoles</li>
              </ul>
            </div>
            {/* breadcrumb  */}
            <div className="column">
              <div className="products one">
                <div className="flexwrap">
                  <div className="row">
                    <ImageBox />
                  </div>
                  <div className="row">
                    <ProductDetail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-products">
        <div className="container">
          <div className="wrapper">
            <RelatedProduct />
          </div>
        </div>
      </div>
      <Banners />
    </>
  );
}
