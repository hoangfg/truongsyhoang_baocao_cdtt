import React from "react";

export default function Review() {
  return (
    <li className="has-child expand">
      <a href="#" className="icon-small">
        Review<span className="mini-text">2.2k</span>
      </a>
      <div className="content">
        <div className="reviews">
          <h4>Customers Reviews</h4>
          <div className="review-block">
            <div className="review-block-head">
              <div className="flexitem">
                <span className="rate-sum">4.9</span>
                <span>2.251 Reviews</span>
              </div>
              <a href="#review" className="secondary-button">
                Write review
              </a>
            </div>
            <div className="review-block-body">
              <ul>
                <li className="item">
                  <div className="review-form">
                    <p className="person">Review by Sarah</p>
                    <p className="mini-text">On 7/7/22</p>
                  </div>
                  <div className="review-rating rating">
                    <div className="stars" />
                  </div>
                  <div className="review-title">
                    <p>Awesome Product</p>
                  </div>
                  <div className="review-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam labore itaque perferendis ab sequi aliquid,
                      dignissimos eius nisi ipsum! Ea.
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="review-form">
                    <p className="person">Review by Sarah</p>
                    <p className="mini-text">On 7/7/22</p>
                  </div>
                  <div className="review-rating rating">
                    <div className="stars" />
                  </div>
                  <div className="review-title">
                    <p>Awesome Product</p>
                  </div>
                  <div className="review-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam labore itaque perferendis ab sequi aliquid,
                      dignissimos eius nisi ipsum! Ea.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="second-links">
                <a href="#" className="view-all">
                  View all reviews
                  <i className="ri-arrow-right-line" />
                </a>
              </div>
            </div>
            <div id="review-form" className="review-form">
              <h4>Write a review</h4>
              <div className="rating">
                <p>Are you satisfied enougn?</p>
                <div className="rate-this">
                  <input type="radio" name="rating" id="star5" />
                  <label htmlFor="star5">
                    <i className="ri-star-fill" />
                  </label>
                  <input type="radio" name="rating" id="star4" />
                  <label htmlFor="star4">
                    <i className="ri-star-fill" />
                  </label>
                  <input type="radio" name="rating" id="star3" />
                  <label htmlFor="star3">
                    <i className="ri-star-fill" />
                  </label>
                  <input type="radio" name="rating" id="star2" />
                  <label htmlFor="star2">
                    <i className="ri-star-fill" />
                  </label>
                  <input type="radio" name="rating" id="star1" />
                  <label htmlFor="star1">
                    <i className="ri-star-fill" />
                  </label>
                </div>
              </div>
              <form action id="review">
                <p>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </p>
                <p>
                  <label htmlFor="sumary">Sumary</label>
                  <input type="text" name="sumary" id="sumary" />
                </p>
                <p>
                  <label>Review</label>
                  <textarea name id cols={30} rows={10} defaultValue={""} />
                </p>
                <p>
                  <a href="#" className="primary-button">
                    Submit Review
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
