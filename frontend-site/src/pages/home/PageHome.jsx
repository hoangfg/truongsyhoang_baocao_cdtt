import React from "react";
import Slider from "./Slider";
import ListBrand from "./brand/ListBrand";
import Trending from "./trending/Trending";
import Feature from "./featuresProduct/Feature";
import Banners from "./../banners/Banners";
import Modal from "./../../components/Modal";
import { Component } from "react";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import { getAuthors } from "./../../redux/actions/authorAction";
import { getBooks } from "./../../redux/actions/bookAction";
import { getGenres } from "./../../redux/actions/bookGenresAction";

class PageHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      author: {},
    };
  }
  componentDidMount = () => {
    this.props.getAuthors();
    this.props.getBooks();
    this.props.getGenres();
  };
  render() {
    const { authors, books, genres, isLoading } = this.props;
    // console.log(genres);
    return (
      <>
        <Slider></Slider>
        <ListBrand />
        {/* <Trending /> */}
        <Feature genres={genres} books={books} />
        <Banners authors={authors} books={books} />
        <Modal />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  authors: state.authorReducer.authors,
  books: state.bookReducer.books,
  genres: state.bookGenresReducer.genres,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getAuthors,
  getBooks,
  getGenres,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageHome));
