import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bookService from "../../../services/bookService";

export default function RelatedItem(props) {
  const navigate = useNavigate();

  const handleNavigate = (slug) => {
    navigate(`/product/${slug}`);
  };
  const book = props.book;
  const discountPercentage =
    ((book?.price - book?.priceSale) / book?.price) * 100;
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <a onClick={() => handleNavigate(book.slug)}>
            <img src={bookService.getPhotoUrl(book.imageFileName)} alt="" />
          </a>
        </div>
        <div className="hoverable">
          <ul>
            <li className="active">
              <Link href="#">
                <i className="ri-heart-line" />
              </Link>
            </li>
            <li>
              <a href={`/product/${book.slug}`}>
                <i className="ri-eye-line" />
              </a>
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
        {/* <div className="offer flexitem">
          <p className="mini-text">Offer ends at</p>
          <ul className="flexcenter">
            <li>1</li>
            <li>15</li>
            <li>27</li>
            <li>07</li>
          </ul>
        </div> */}
        <div className="rating">
          <div className="stars" />
          <span className="mini-text">(1,548)</span>
        </div>
        <h3 className="main-links">
          <a href={`/product/${book.slug}`}>{book.name}</a>
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
        <div className="stock mini-text" data-stock={5000}>
          <div className="qty">
            <span>
              Sold: <strong className="qty-sold">3549</strong>
            </span>
            <span>
              Stock:
              <strong className="qty-available">{book.quanlity}</strong>
            </span>
          </div>
          <div className="bar">
            <div className="available" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
