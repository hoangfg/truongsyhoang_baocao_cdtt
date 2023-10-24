import React, { useState } from "react";
import Rating from "./content/Rating";
import Stock from "./content/Stock";
import Price from "./content/Price";
import Sold from "./content/Sold";
import Offer from "./content/Offer";
import Type from "./content/Type";
import AddToCart from "./content/AddToCart";
import Information from "./content/description/Information";
import Detail from "./content/description/Detail";
import Customer from "./content/description/Customer";
import Review from "./content/description/Review";

export default function ProductDetail(props) {
  // const { name, description, detail } = this.book;
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  const { book } = props;
  console.log(book);
  return (
    <div className="item">
      <h1>{book.name}</h1>
      <div className="content">
        <Rating />
        <Stock />
        <Price price={book.price} priceSale={book.priceSale} />
        {/* <div class="colors">
                      <p>Color</p>
                      <div class="variant">
                        <form action="">
                          <p>
                            <input
                              type="radio"
                              name="color"
                              id="cogrey"
                            />
                            <label for="cogrey" class="circle"></label>
                          </p>
                          <p>
                            <input
                              type="radio"
                              name="color"
                              id="coblue"
                            />
                            <label for="coblue" class="circle"></label>
                          </p>
                          <p>
                            <input
                              type="radio"
                              name="color"
                              id="cogreen"
                            />
                            <label for="cogreen" class="circle"></label>
                          </p>
                        </form>
                      </div>
                    </div> */}
        <Sold quanlity={book.quanlity} />
        <Offer />
        {/* <Type /> */}
        <AddToCart />
        <div className="description collapse">
          <ul>
            {/* Information  */}
            <li
              className={`has-child ${
                activeSection === "information" ? "expand" : ""
              }`}
            >
              <a
                href="#0"
                className="icon-small"
                onClick={() => toggleSection("information")}
              >
                Information
              </a>
              <ul className="content">
                <li>
                  <span>Author: </span> <span>{book.authorName}</span>
                </li>
                <li>
                  <span>Publisher: </span> <span>{book.publisherName}</span>
                </li>
                <li>
                  <span>Language: </span> <span>{book.languageName}</span>
                </li>
                <li>
                  <span>Genres: </span> <span>{book.bookGenresName}</span>
                </li>
              </ul>
            </li>
            <li
              className={`has-child ${
                activeSection === "detail" ? "expand" : ""
              }`}
            >
              <a
                href="#0"
                className="icon-small"
                onClick={() => toggleSection("detail")}
              >
                Detail
              </a>
              <div className="content">
                <div dangerouslySetInnerHTML={{ __html: book.description }} />
              </div>
            </li>
            <li
              className={`has-child ${
                activeSection === "custom" ? "expand" : ""
              }`}
            >
              <a
                href="#0"
                className="icon-small"
                onClick={() => toggleSection("custom")}
              >
                Detail
              </a>
              <div className="content">
                {/* <table>
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>
                        Bust
                        <span className="mini-text">{"{cm}"}</span>
                      </th>
                      <th>
                        Waist
                        <span className="mini-text">{"{cm}"}</span>
                      </th>
                      <th>
                        Hip
                        <span className="mini-text">{"{cm}"}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>82.5</td>
                      <td>62</td>
                      <td>87.5</td>
                    </tr>
                    <tr>
                      <td>s</td>
                      <td>85</td>
                      <td>67.5</td>
                      <td>89</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>87.5</td>
                      <td>67.5</td>
                      <td>93</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>90</td>
                      <td>72.5</td>
                      <td>98</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>93</td>
                      <td>77.5</td>
                      <td>103</td>
                    </tr>
                  </tbody>
                </table> */}
                <div dangerouslySetInnerHTML={{ __html: book.detail }} />
              </div>
            </li>

            <li
              className={`has-child ${
                activeSection === "review" ? "expand" : ""
              }`}
            >
              <a
                href="#0"
                className="icon-small"
                onClick={() => toggleSection("review")}
              >
                Review
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
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Magnam labore itaque perferendis ab sequi
                              aliquid, dignissimos eius nisi ipsum! Ea.
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
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Magnam labore itaque perferendis ab sequi
                              aliquid, dignissimos eius nisi ipsum! Ea.
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
                          <textarea
                            name
                            id
                            cols={30}
                            rows={10}
                            defaultValue={""}
                          />
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
          </ul>
        </div>
      </div>
    </div>
  );
}
