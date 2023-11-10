import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import SideBarPriceRange from "./SideBarPriceRange";
import Rhombus from "../../../components/Rhombus";

export default function SideBar({
  authors,
  genres,
  languages,
  publishers,
  onCheckboxChange,
  isLoadingAuthors,
  isLoadingGenres,
  isLoadingLanguages,
  isLoadingPublishers,
  onLanguageChange,
  onGenreChange,
  onAuthorChange,
  onPublisherChange,
  type,
}) {
  // const [checkedItems, setCheckedItems] = useState({
  //   languages: [],
  //   genres: [],
  //   authors: [],
  //   publishers: [],
  // });

  let filteredGenres = genres.filter((item) => item.status === 0);

  let filteredAuthors = authors.filter((item) => item.status === 0);

  let countIndex = 5;

  const [numToShowLanguages, setNumToShowLanguages] = useState(countIndex);
  const [numToShowGenres, setNumToShowGenres] = useState(countIndex);
  const [numToShowAuthors, setNumToShowAuthors] = useState(countIndex);
  const [numToShowPublishers, setNumToShowPublishers] = useState(countIndex);

  const handleShowMoreLanguages = () => {
    setNumToShowLanguages(languages.length);
  };

  const handleShowMoreGenres = () => {
    setNumToShowGenres(genres.length);
  };

  const handleShowMoreAuthors = () => {
    setNumToShowAuthors(authors.length);
  };
  const handleShowMorePublishers = () => {
    setNumToShowPublishers(publishers.length);
  };

  return (
    <div className="row sidebar">
      <div className="filter">
        {type !== "language" && (
          <div className="filter-block" id="category">
            <h4>Ngôn ngữ</h4>
            <ul>
              {isLoadingLanguages ? (
                <Rhombus />
              ) : (
                languages &&
                languages
                  .slice(0, numToShowLanguages)
                  .map((item) => (
                    <SideBarItem
                      key={"l" + item.id}
                      checkId={"l" + item.id}
                      name={item.name}
                      onChange={() => onLanguageChange(item.name)}
                    />
                  ))
              )}
              {languages.length > numToShowLanguages && (
                <li style={{ cursor: "pointer" }}>
                  <span onClick={handleShowMoreLanguages}>Xem thêm</span>
                </li>
              )}
            </ul>
          </div>
        )}
        {type !== "genres" && (
          <div className="filter-block" id="activity">
            <h4>Thể loại</h4>
            <ul>
              <>
                {isLoadingGenres ? (
                  <Rhombus />
                ) : (
                  genres &&
                  genres
                    .slice(0, numToShowGenres)
                    .map((item) => (
                      <SideBarItem
                        key={"g" + item.id}
                        checkId={"g" + item.id}
                        name={item.name}
                        onChange={() => onGenreChange(item.name)}
                      />
                    ))
                )}
                {genres.length > numToShowGenres && (
                  <li style={{ cursor: "pointer" }}>
                    <span onClick={handleShowMoreGenres}>Xem thêm</span>
                  </li>
                )}
              </>
            </ul>
          </div>
        )}
        {type !== "author" && (
          <div className="filter-block">
            <h4>Tác giả</h4>
            <ul>
              <>
                {isLoadingAuthors ? (
                  <Rhombus />
                ) : (
                  authors &&
                  authors
                    .slice(0, numToShowAuthors)
                    .map((item) => (
                      <SideBarItem
                        key={"a" + item.id}
                        checkId={"a" + item.id}
                        name={item.name}
                        onChange={() => onAuthorChange(item.name)}
                      />
                    ))
                )}
                {authors.length > numToShowAuthors && (
                  <li style={{ cursor: "pointer" }}>
                    <span onClick={handleShowMoreAuthors}>Xem thêm</span>
                  </li>
                )}
              </>
            </ul>
          </div>
        )}
        {type !== "publisher" && (
          <div className="filter-block">
            <h4>Nhà xuất bản</h4>
            <ul>
              <>
                {isLoadingPublishers ? (
                  <Rhombus />
                ) : (
                  publishers &&
                  publishers
                    .slice(0, numToShowPublishers)
                    .filter((pub) => pub.status === "Visible")
                    .map((item) => (
                      <React.Fragment key={"p" + item.id}>
                        <SideBarItem
                          checkId={"p" + item.id}
                          name={item.name}
                          onChange={() => onPublisherChange(item.name)}
                        />
                      </React.Fragment>
                    ))
                )}
                {publishers && publishers.length > numToShowPublishers && (
                  <li style={{ cursor: "pointer" }}>
                    <span onClick={handleShowMorePublishers}>Xem thêm</span>
                  </li>
                )}
              </>
            </ul>
          </div>
        )}
        {/* <div className="filter-block products" id="color">
          <h4>Color</h4>
          <ul className="bycolor variant flexitem">
            <li>
              <input type="radio" name="color" id="cogrey" />
              <label htmlFor="cogrey" className="circle" />
            </li>
            <li>
              <input type="radio" name="color" id="coblue" />
              <label htmlFor="coblue" className="circle" />
            </li>
            <li>
              <input type="radio" name="color" id="cogreen" />
              <label htmlFor="cogreen" className="circle" />
            </li>
            <li>
              <input type="radio" name="color" id="cored" />
              <label htmlFor="cored" className="circle" />
            </li>
            <li>
              <input type="radio" name="color" id="colight" />
              <label htmlFor="colight" className="circle" />
            </li>
          </ul>
        </div> */}
        {/* <div className="filter-block pricing">
          <h4>Price</h4>
          <SideBarPriceRange />
        </div> */}
      </div>
    </div>
  );
}
