import React, { Component, useState } from "react";
import ImageBox from "./ImageBox/ImageBox";
import ProductDetail from "./ProductDetail/ProductDetail";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import Banners from "./../banners/Banners";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import { getAuthors } from "./../../redux/actions/authorAction";
import { getBooks, getBySlug } from "./../../redux/actions/bookAction";
import FsLightbox from "fslightbox-react";
import bookService from "../../services/bookService";

class PageOffer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      author: {},
      book: {},
      toggler: false,
    };
  }

  componentDidMount = () => {
    const { slug } = this.props.router.params;

    this.props.getAuthors();
    this.props.getBooks();
    this.props.getBySlug(slug);
  };

  render() {
    const { authors, books, isLoading, book } = this.props;
    let discountPercentage = 0;
    if (book.priceSale !== 0) {
      discountPercentage =
        ((book?.price - book?.priceSale) / book?.price) * 100;
    }

    console.log("book", book.publisher);
    return (
      <>
        <div className="single-product" key={"f" + book}>
          <div className="container">
            <div className="wrapper">
              <div className="breadcrumb">
                <ul className="flexitem">
                  <li>
                    <a href="#">Trang chủ</a>
                  </li>
                  <li>
                    <a href="#">{book.bookGenresName}</a>
                  </li>
                  <li>{book.name}</li>
                </ul>
              </div>
              {/* breadcrumb  */}
              <div className="column">
                <div className="products one">
                  <div className="flexwrap">
                    <div className="row">
                      <ImageBox
                        discountPercentage={discountPercentage}
                        image={book.imageFileName}
                      />
                    </div>
                    <div className="row">
                      <ProductDetail book={book} />
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
              <RelatedProduct
                books={books}
                genres={book.bookGenresName}
                id={book.id}
              />
            </div>
          </div>
        </div>
        {/* <Banners authors={authors} books={books} /> */}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  authors: state.authorReducer.authors,
  books: state.bookReducer.books,
  genres: state.bookGenresReducer.genres,
  isLoading: state.commonReducer.isLoading,
  book: state.bookReducer.book,
});

const mapDispatchToProps = {
  getAuthors,
  getBooks,
  getBySlug,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageOffer));
