import React, { useEffect, useState } from "react";
import Banners from "../banners/Banners";
import Modal from "../../components/Modal";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import { getAuthors } from "../../redux/actions/authorAction";
import { getPublishers } from "../../redux/actions/publisherAction";
import { getBooks } from "../../redux/actions/bookAction";
import { getGenres } from "../../redux/actions/bookGenresAction";
import { getLanguage } from "../../redux/actions/bookLanguageAction";
import SideBar from "./sidebar/SideBar";
import Product from "./product/Product";
import Loading from "../../components/Loading";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
function PageCategory(props) {
  const {
    authors,
    books,
    genres,
    publishers,
    languages,
    title,
    type,
    isLoadingBooks,
    isLoadingAuthors,
    isLoadingGenres,
    isLoadingLanguages,
    isLoadingPublishers,
  } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [productsToShow, setProductsToShow] = useState(12);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const { slug } = useParams();
  const handleCheckboxChange = (category, itemName) => {};

  const handleLanguageChange = (languageName) => {
    setSelectedLanguages((prev) =>
      prev.includes(languageName)
        ? prev.filter((item) => item !== languageName)
        : [...prev, languageName]
    );
  };

  const handleGenreChange = (genreName) => {
    setSelectedGenres((prev) =>
      prev.includes(genreName)
        ? prev.filter((item) => item !== genreName)
        : [...prev, genreName]
    );
  };

  const handleAuthorChange = (authorName) => {
    setSelectedAuthors((prev) =>
      prev.includes(authorName)
        ? prev.filter((item) => item !== authorName)
        : [...prev, authorName]
    );
  };

  const handlePublisherChange = (publisherName) => {
    setSelectedPublishers((prev) =>
      prev.includes(publisherName)
        ? prev.filter((item) => item !== publisherName)
        : [...prev, publisherName]
    );
  };

  // const handleSortChange = (e) => {
  //   const sortType = e.target.value;
  //   this.setState({ sortBy: sortType });
  // };
  const handleSortChange = (e) => {
    const sortType = e.target.value;
    setSortBy(sortType);
  };

  const loadMore = () => {
    setProductsToShow((prev) => prev + 9);
  };
  useEffect(() => {
    props.getAuthors();
    props.getBooks();
    props.getGenres();
    props.getLanguage();
    props.getPublishers();
  }, []);
  var slugName = "";

  if (type === "genres") {
    let genresFil = genres.find((genre) => genre.slug === slug);
    slugName = genresFil?.name;
  }

  if (type === "author") {
    let authorFil = authors.find((author) => author.slug === slug);
    slugName = authorFil?.name;
  }

  if (type === "publisher") {
    console.log("Publishers:", publishers); // Check if publishers array is defined and has data
    console.log("Slug:", slug); // Check the value of slug
    if (publishers && Array.isArray(publishers)) {
      let publisherFil = publishers.find(
        (publisher) => publisher.slug === slug
      );
      console.log("pub", publisherFil);
      slugName = publisherFil?.name;
    } else {
      console.error("Publishers is not defined or is not an array.");
    }
  }
  if (type === "language") {
    let languageFil = languages.find((language) => language.slug === slug);
    slugName = languageFil?.name;
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };
  if (type === "search") {
    slugName = slug;
  }
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
                      onCheckboxChange={handleCheckboxChange}
                      onLanguageChange={handleLanguageChange}
                      onGenreChange={handleGenreChange}
                      onAuthorChange={handleAuthorChange}
                      onPublisherChange={handlePublisherChange}
                      isLoadingAuthors={isLoadingAuthors}
                      isLoadingGenres={isLoadingGenres}
                      isLoadingLanguages={isLoadingLanguages}
                      isLoadingPublishers={isLoadingPublishers}
                      type={type}
                    />
                  </div>
                </div>
                <div className="section">
                  <div className="row">
                    <div className="cat-head">
                      <div className="breadcrumb">
                        <ul className="flexitem">
                          <li>
                            <a href="#">Trang chủ</a>
                          </li>
                          <li>
                            {title} {slugName}
                          </li>
                        </ul>
                      </div>
                      <div className="page-title">
                        <h1>
                          {title} {slugName}
                        </h1>
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
                            <select value={sortBy} onChange={handleSortChange}>
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
                  </div>
                  <Product
                    books={currentItems}
                    selectedLanguages={selectedLanguages}
                    selectedGenres={selectedGenres}
                    selectedAuthors={selectedAuthors}
                    selectedPublishers={selectedPublishers}
                    isLoadingBooks={isLoadingBooks}
                    // productsToShow={this.state.productsToShow}
                    sortBy={sortBy}
                    type={type}
                    slug={slug}
                    // genres={genres}
                    slugName={slugName}
                  />
                  {Math.ceil(books.length / itemsPerPage) > 1 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={Math.ceil(books.length / itemsPerPage)}
                      onPageChange={handlePageChange}
                      theme="bottom-border"
                      changeCurrentPage={changeCurrentPage}
                    />
                  )}
                  {/* <Paginate
                    totalPages={Math.ceil(books.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  /> */}
                  {/* {books.length > this.state.productsToShow && (
                    <div className="load-more flexcenter">
                      <a onClick={this.loadMore} className="secondary-button">
                        Load more
                      </a>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Banners authors={authors} books={books} /> */}
      <Modal />
    </>
  );
}
const mapStateToProps = (state) => ({
  authors: state.authorReducer.authors,
  books: state.bookReducer.books,
  genres: state.bookGenresReducer.genres,
  publishers: state.publisherReducer.publishers,
  languages: state.bookLanguageReducer.languages,
  isLoadingBooks: state.bookReducer.isLoading,
  isLoadingAuthors: state.authorReducer.isLoading,
  isLoadingPublishers: state.publisherReducer.isLoading,
  isLoadingGenres: state.bookGenresReducer.isLoading,
  isLoadingLanguages: state.bookLanguageReducer.isLoading,
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
