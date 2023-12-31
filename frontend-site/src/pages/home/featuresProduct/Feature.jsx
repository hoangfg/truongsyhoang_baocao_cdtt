import React, { Component } from "react";
import { Link } from "react-router-dom";
import FeatureItem from "../../../components/FeatureItem";
import { render } from "@testing-library/react";

class Feature extends Component {
  render() {
    const { books, genres } = this.props;

    // console.log(books);
    let filteredBook = books.filter((item) => item.status === 0);
    let filteredGenre = genres.filter((item) => item.status === 0);
    console.log(filteredBook);
    console.log(filteredGenre);
    return (
      <div className="features">
        <div className="container">
          <div className="wrapper">
            <div className="column">
              <div className="sectop flexitem">
                <h2>
                  <span className="circle" />
                  <span>
                    {" "}
                    <Link to="/sale">Sản phẩm khuyến mãi</Link>
                  </span>
                </h2>
                <div className="second-links">
                  <Link to="/sale" className="view-all">
                    View all
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
              <div className="products main flexwrap">
                {filteredBook
                  .filter(
                    (filteredItem) =>
                      filteredItem.beginSale &&
                      filteredItem.priceSale &&
                      filteredItem.endSale &&
                      new Date(filteredItem.endSale) > new Date()
                  )
                  .sort((a, b) => b.id - a.id)
                  .slice(0, 4)
                  .map((filteredItem) => (
                    <>
                      <FeatureItem key={filteredItem.id} {...filteredItem} />
                    </>
                  ))}
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="column">
              <div className="sectop flexitem">
                <h2>
                  <span className="circle" />
                  <span>
                    {" "}
                    <Link to="/product">Sản phẩm mới</Link>
                  </span>
                </h2>
                <div className="second-links">
                  <Link href="#" className="view-all">
                    View all
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
              <div className="products main flexwrap">
                {filteredBook
                  .sort((a, b) => b.id - a.id)
                  .slice(0, 4)
                  .map((filteredItem) => (
                    <FeatureItem key={filteredItem.id} {...filteredItem} />
                  ))}
              </div>
            </div>
          </div>
          <div className="wrapper">
            {filteredGenre &&
              filteredGenre.map((item) => (
                <div className="column" key={item.id}>
                  <div className="sectop flexitem">
                    <h2>
                      <span className="circle" />
                      <span>
                        <Link to={`/genre/${item.slug}`}>{item.name}</Link>
                      </span>
                    </h2>
                    <div className="second-links">
                      <Link to={`/genre/${item.slug}`} className="view-all">
                        View all
                        <i className="ri-arrow-right-line" />
                      </Link>
                    </div>
                  </div>
                  <div className="products main flexwrap">
                    {filteredBook
                      .filter((book) => book.bookGenresName === item.name)
                      .slice(0, 8)
                      .map((filteredItem) => (
                        <FeatureItem key={filteredItem.id} {...filteredItem} />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Feature;
