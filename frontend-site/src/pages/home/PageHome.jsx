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
import { getSliders } from "./../../redux/actions/sliderAction";
import sliderReducer from "./../../redux/reducers/sliderReducer";

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
    this.props.getSliders();
  };
  render() {
    const { authors, books, genres, sliders, isLoading } = this.props;
    console.log(sliders);
    return (
      <>
        <Slider sliders={sliders}></Slider>
        <ListBrand />
        {/* <Trending books={books} /> */}
        <Feature genres={genres} books={books} />
        {/* <Banners authors={authors} books={books} /> */}
        <Modal />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  authors: state.authorReducer.authors,
  books: state.bookReducer.books,
  genres: state.bookGenresReducer.genres,
  sliders: state.sliderReducer.sliders,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getAuthors,
  getBooks,
  getGenres,
  getSliders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageHome));
