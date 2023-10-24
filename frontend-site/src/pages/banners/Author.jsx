import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import authorService from "./../../services/authorService";

class Author extends Component {
  getFilteredBooks = () => {
    const { author, books } = this.props;
    return books.filter((book) => book.authorName === author.name);
  };
  render() {
    const { author } = this.props;
    const listBook = this.getFilteredBooks();
    // console.log("fs", listBook);
    const bookNames = listBook.map((bookItem) => (
      <li key={bookItem.id}>
        <Link to={`/book/${bookItem.id}`}>{bookItem.name}</Link>
      </li>
    ));
    return (
      // <div className="row">
      <>
        <div className="item">
          <div className="image">
            <img src={authorService.getPhotoUrl(author.image)} alt />
            {/* <img  src="/assets/banner/procat1.jpg" alt /> */}
          </div>
          <div className="content mini-links">
            <h4>{author.name}</h4>
            <ul className="flexcol">{bookNames}</ul>
            <div className="second-links">
              <Link href="#" className="view-all">
                View all
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>
      </>
      // </div>
    );
  }
}
export default Author;
