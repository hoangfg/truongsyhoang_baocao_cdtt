import React, { Component } from "react";
import { Link } from "react-router-dom";
import FeatureItem from "../../../components/FeatureItem";
import { render } from "@testing-library/react";

class Feature extends Component {

  render() {
    const { books, genres } = this.props;
    // console.log(books);
    let filteredBook = books.filter((item) => item.status === 0);
    let filteredGenre = genres.filter(
      (item) => item.status === 0 && item.parentId === 0
    );

    return (
      <div className="features">
        <div className="container">
          <div className="wrapper">
            {filteredGenre &&
              filteredGenre.map((item) => (
                <div className="column">
                  <div className="sectop flexitem">
                    <h2>
                      <span className="circle" />
                      <span>{item.name}</span>
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
                      .filter((book) => book.bookGenresName === item.name)
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
