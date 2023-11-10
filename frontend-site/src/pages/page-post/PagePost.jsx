import React, { useEffect, useState } from "react";
import Banners from "../banners/Banners";
import Modal from "../../components/Modal";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";

import { getTopics } from "../../redux/actions/topicAction";
import { getPosts } from "../../redux/actions/postAction";
import Loading from "../../components/Loading";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import Post from "./product/Post";
function PagePost(props) {
  const {
    posts,
    topics,

    title,
    type,
    isLoadingBooks,
  } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [productsToShow, setProductsToShow] = useState(12);

  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const { slug } = useParams();

  useEffect(() => {
    props.getTopics();
  }, []);
  var slugName = "";

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };
  const handleSortChange = (e) => {
    const sortType = e.target.value;
    setSortBy(sortType);
  };
  console.log("posts", posts);
  console.log("topics", topics);
  return (
    <>
      <div className="single-category"></div>
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="holder">
              <div className="row sidebar">
                <div className="filter">
                  {/* <SideBar
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
                  /> */}
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
                            <option value="up_ASC">Mới tới củ</option>
                            <option value="up_DESC">Củ tới mới</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Post
                  posts={currentItems}
                  // selectedLanguages={selectedLanguages}
                  // selectedGenres={selectedGenres}
                  // selectedAuthors={selectedAuthors}
                  // selectedPublishers={selectedPublishers}
                  isLoadingBooks={isLoadingBooks}
                  // productsToShow={this.state.productsToShow}
                  sortBy={sortBy}
                  type={type}
                  slug={slug}
                  // genres={genres}
                  slugName={slugName}
                />
                {Math.ceil(posts.length / itemsPerPage) > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(posts.length / itemsPerPage)}
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
      {/* <Banners authors={authors} books={books} /> */}
      <Modal />
    </>
  );
}
const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  topics: state.topicReducer.topics,
  isLoadingPosts: state.postReducer.isLoading,
  isLoadingTopics: state.topicReducer.isLoading,
});
const mapDispatchToProps = {
  getTopics,
  getPosts,
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PagePost));
