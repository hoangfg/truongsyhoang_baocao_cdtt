import React from "react";
import { Link } from "react-router-dom";
import bookService from "../services/bookService";

export default function FeatureItem(props) {
  const {
    id,
    imageFileName,
    name,
    price,
    priceSale,
    // quanlity,
    // authorName,
    // beginSale,
    // endSale,
    // entryPrice,
    // isbn,
    // languageName,
    // publisherName,
    // bookGenresName,
    slug,
  } = props;
  // console.log(slug);
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to={`/product/${slug}`}>
            {/* <img src="/assets/products/apparel1.jpg" alt="" /> */}
            <img src={bookService.getPhotoUrl(imageFileName)} alt="" />
          </Link>
        </div>
        <div className="hoverable">
          <ul>
            <li className="active">
              <Link href="#">
                <i className="ri-heart-line" />
              </Link>
            </li>
            <li>
              <Link to={`/product/${slug}`}>
                <i className="ri-eye-line" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="ri-shuffle-line" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="discount circle flexcenter">
          <span>25%</span>
        </div>
      </div>
      <div className="content">
        <div className="rating">
          <div className="stars" />
          <span className="mini-text">(1,548)</span>
        </div>
        <h3 className="main-links">
          <Link to={`/product/${slug}`}>{name}</Link>
        </h3>
        <div className="price">
          {priceSale !== 0 ? (
            <>
              <span className="current">{priceSale}</span>
              <span className="normal mini-text">{price}</span>
            </>
          ) : (
            <span className=" mini-text">{price}</span>
          )}
        </div>
      </div>
    </div>
  );
}
