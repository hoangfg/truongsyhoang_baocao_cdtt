import React from "react";
import { Link } from "react-router-dom";
import bookService from "../../../services/bookService";

export default function Top1Trending(props) {
  const book = props.top;
  console.log("1", book);
  console.log("2", book?.id);
  const discountPercentage =
    ((book?.price - book?.priceSale) / book?.price) * 100;
  return (
    <div className="item">
      {/* <div className="offer">
        <p>Offer ands at</p>
        <ul className="flexcenter">
          <li>1</li>
          <li>15</li>
          <li>27</li>
          <li>60</li>
        </ul>
      </div> */}
      <div className="media">
        <div className="image">
          <Link to={`/product/${book?.slug}`}>
            <img src={bookService.getPhotoUrl(book?.imageFileName)} alt="" />
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
              <Link href="#">
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
        {book?.priceSale !== 0 && (
          <div className="discount circle flexcenter">
            <>
              <span>-{Math.round(discountPercentage)}%</span>
            </>
          </div>
        )}
      </div>
      <div className="content">
        <div className="rating">
          <div className="stars" />
          <span className="mini-text">(2,548)</span>
        </div>
        <h3 className="main-links">
          <Link to={`/product/${book?.slug}`}>{book?.name}</Link>
        </h3>
        <div className="price">
          {book?.priceSale !== 0 ? (
            <>
              <span className="current">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(book?.priceSale)}
              </span>
              <span className="normal mini-text">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(book?.price)}
              </span>
            </>
          ) : (
            <span className="current ">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(book?.price)}
            </span>
          )}
        </div>
        <div className="stock mini-text">
          <div className="qty">
            <span>
              Còn:
              <strong className="qty-avaible">{book?.quanlity}</strong>
            </span>
            <span>
              Sold:
              <strong className="qty-sold">3.459</strong>
            </span>
          </div>
          <div className="bar">
            <div className="available" />
          </div>
        </div>
      </div>
    </div>
  );
}
