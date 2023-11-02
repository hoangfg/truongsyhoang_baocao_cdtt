import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import Detail from "./../page-offer/ProductDetail/content/description/Detail";
import NavigationCat from "./section/NavigationCat";
import Product from "./product/Product";
import Banners from "./../banners/Banners";
import Modal from "../../components/Modal";
import { connect } from "react-redux";
import { getAuthors } from "./../../redux/actions/authorAction";
import { getPublishers } from "./../../redux/actions/publisherAction";
import { getBooks } from "./../../redux/actions/bookAction";
import { getGenres } from "./../../redux/actions/bookGenresAction";
import { getLanguage } from "./../../redux/actions/bookLanguageAction";
import withRouter from "../../helpers/withRouter";
const PageCategory = (props) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     productsToShow: 12,
  //     productsToAdd: 9,
  //     sortBy: "default",
  //     open: false,
  //     selectedLanguages: [], // Lưu trữ các ngôn ngữ được chọn
  //     selectedGenres: [], // Lưu trữ các thể loại được chọn
  //     selectedAuthors: [], // Lưu trữ các tác giả được chọn
  //     selectedPublishers: [], // Lưu trữ các nhà xuất bản được chọn
  //   };
  // }
  const [productsToShow, setProductsToShow] = useState(12);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    props.getAuthors();
    props.getBooks();
    props.getGenres();
    props.getPublishers();
    props.getLanguage();
  }, []);
  const handleCheckboxChange = (category, itemName) => {
    this.setState((prevState) => {
      const updatedItems = {
        ...prevState.checkedItems,
        [category]: [...prevState.checkedItems[category]],
      };

      if (updatedItems[category].includes(itemName)) {
        updatedItems[category] = updatedItems[category].filter(
          (name) => name !== itemName
        );
      } else {
        updatedItems[category] = [...updatedItems[category], itemName];
      }

      return { checkedItems: updatedItems };
    });
  };

  const handleLanguageChange = (languageId) => {
    this.setState((prevState) => ({
      selectedLanguages: prevState.selectedLanguages.includes(languageId)
        ? prevState.selectedLanguages.filter((id) => id !== languageId)
        : [...prevState.selectedLanguages, languageId],
    }));
  };

  const handleGenreChange = (genreId) => {
    this.setState((prevState) => ({
      selectedGenres: prevState.selectedGenres.includes(genreId)
        ? prevState.selectedGenres.filter((id) => id !== genreId)
        : [...prevState.selectedGenres, genreId],
    }));
  };

  const handleAuthorChange = (authorId) => {
    this.setState((prevState) => ({
      selectedAuthors: prevState.selectedAuthors.includes(authorId)
        ? prevState.selectedAuthors.filter((id) => id !== authorId)
        : [...prevState.selectedAuthors, authorId],
    }));
  };

  const handlePublisherChange = (publisherId) => {
    this.setState((prevState) => ({
      selectedPublishers: prevState.selectedPublishers.includes(publisherId)
        ? prevState.selectedPublishers.filter((id) => id !== publisherId)
        : [...prevState.selectedPublishers, publisherId],
    }));
  };

  // const handleSortChange = (e) => {
  //   const sortType = e.target.value;
  //   this.setState({ sortBy: sortType });
  // };
  const componentDidMount = () => {
    this.props.getAuthors();
    this.props.getBooks();
    this.props.getGenres();
    this.props.getPublishers();
    this.props.getLanguage();
  };
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const loadMore = () => {
    setProductsToShow((prev) => prev + 9);
  };

  // render() {
  //   const {
  //     title,
  //     authors,
  //     books,
  //     genres,
  //     isLoading,
  //     languages,
  //     publishers,
  //     type,
  //   } = this.props;

  //   const {
  //     selectedLanguages,
  //     selectedGenres,
  //     selectedAuthors,
  //     selectedPublishers,
  //     sortBy,
  //   } = this.state;
  const {
    authors,
    books,
    genres,
    isLoading,
    languages,
    publishers,
    type,
    title,
  } = props;

  const { name } = useParams();
  return (
    <>
      <div className="single-category">
        <div className="container">
          <div className="wrapper">
            <div className="column">
              <div className="holder">
                <div className="row sidebar">
                  <div className="filter">
                    <SideBar
                      authors={authors}
                      genres={genres}
                      languages={languages}
                      publishers={publishers}
                      // checkedItems={{
                      //   languages: selectedLanguages,
                      //   genres: selectedGenres,
                      //   authors: selectedAuthors,
                      //   publishers: selectedPublishers,
                      // }}
                      onCheckboxChange={this.handleCheckboxChange}
                      onLanguageChange={this.handleLanguageChange}
                      onGenreChange={this.handleGenreChange}
                      onAuthorChange={this.handleAuthorChange}
                      onPublisherChange={this.handlePublisherChange}
                    />

                    {/* <div className="filter-block">
                        <button
                          type="submit"
                          className="primary-button"
                          onclick="submitFilters()"
                        >
                          Submit
                        </button>
                      </div> */}
                  </div>
                </div>
                <div className="section">
                  <div className="row">
                    <div className="cat-head">
                      <div className="breadcrumb">
                        <ul className="flexitem">
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>{title}</li>
                        </ul>
                      </div>
                      <div className="page-title">
                        <h1>{title}</h1>
                      </div>
                      {/* <div className="cat-description">
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Magni et aut autem ex cumque quasi voluptatem
                            magnam excepturi. Optio numquam, minima iusto autem
                            repellendus harum debitis inventore. Illo, ducimus
                            consectetur. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Magni et aut autem ex cumque quasi
                            voluptatem magnam excepturi. Optio numquam, minima
                            iusto autem repellendus harum debitis inventore.
                            Illo, ducimus consectetur. Lorem ipsum dolor, sit
                            amet consectetur adipisicing elit. Magni et aut
                            autem ex cumque quasi voluptatem magnam excepturi.
                            Optio numquam, minima iusto autem repellendus harum
                            debitis inventore. Illo, ducimus consectetur.
                          </p>
                        </div> */}
                      <div className="cat-navigation flexitem">
                        <div className="item-filter desktop-hide">
                          <a href="#" className="filter-trigger label">
                            <i className="ri-menu-2-line ri-2x" />
                            <span>Filter</span>
                          </a>
                        </div>
                        <div className="item-sortir">
                          <div className="label">
                            <span className="mobile-hide">Sort by default</span>
                            <div className="desktop-hide">Default</div>
                          </div>
                          <select
                            value={sortBy}
                            onChange={this.handleSortChange}
                          >
                            <option value="default">Default</option>
                            <option value="name_ASC">Tên: A - Z</option>
                            <option value="name_DESC">Tên: Z - A</option>
                            <option value="price_ASC">Giá tăng dần</option>
                            <option value="price_DESC">Giá giảm dần</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Product
                    books={books}
                    selectedLanguages={selectedLanguages}
                    selectedGenres={selectedGenres}
                    selectedAuthors={selectedAuthors}
                    selectedPublishers={selectedPublishers}
                    productsToShow={this.state.productsToShow}
                    sortBy={sortBy}
                    type={type}
                  />

                  {books.length > this.state.productsToShow && (
                    <div className="load-more flexcenter">
                      <a onClick={this.loadMore} className="secondary-button">
                        Load more
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banners authors={authors} books={books} />
      <Modal />
    </>
  );
};
// }
const mapStateToProps = (state) => ({
  authors: state.authorReducer.authors,
  books: state.bookReducer.books,
  genres: state.bookGenresReducer.genres,
  isLoading: state.commonReducer.isLoading,
  publishers: state.publisherReducer.publishers,
  languages: state.bookLanguageReducer.languages,
});

const mapDispatchToProps = {
  getAuthors,
  getBooks,
  getGenres,
  getPublishers,
  getLanguage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageCategory));
