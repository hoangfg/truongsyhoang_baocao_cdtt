import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import SideBarPriceRange from "./SideBarPriceRange";

export default function SideBar({
  authors,
  genres,
  languages,
  publishers,
  onCheckboxChange,

  onLanguageChange,
  onGenreChange,
  onAuthorChange,
  onPublisherChange,
}) {
  // const [checkedItems, setCheckedItems] = useState({
  //   languages: [],
  //   genres: [],
  //   authors: [],
  //   publishers: [],
  // });

  let filteredGenres = genres.filter((item) => item.status === 0);

  let filteredAuthors = authors.filter((item) => item.status === 0);

  return (
    <div className="row sidebar">
      <div className="filter">
        <div className="filter-block" id="category">
          <h4>Languages</h4>
          <ul>
            <>
              {languages &&
                languages.map((item) => (
                  <>
                    <SideBarItem
                      key={"l" + item.id}
                      checkId={"l" + item.id}
                      name={item.name}
                      // checked={checkedItems.languages.includes(item.name)}
                      onChange={() => onLanguageChange(item.name)}
                    />
                  </>
                ))}
            </>
          </ul>
        </div>
        <div className="filter-block" id="activity">
          <h4>Genres</h4>
          <ul>
            <>
              {filteredGenres &&
                filteredGenres.map((item) => (
                  <SideBarItem
                    key={"g" + item.id}
                    checkId={"g" + item.id}
                    name={item.name}
                    // checked={checkedItems.genres.includes(item.name)}
                    onChange={() => onGenreChange(item.name)}
                  />
                ))}
            </>
          </ul>
        </div>
        <div className="filter-block">
          <h4>Author</h4>
          <ul>
            <>
              {filteredAuthors &&
                filteredAuthors.map((item) => (
                  <SideBarItem
                    key={"a" + item.id}
                    checkId={"a" + item.id}
                    name={item.name}
                    // checked={checkedItems.authors.includes(item.name)}
                    onChange={() => onAuthorChange(item.name)}
                  />
                ))}
            </>
          </ul>
        </div>
        <div className="filter-block">
          <h4>Publishers</h4>
          <ul>
            <>
              {publishers &&
                publishers
                  .filter((pub) => pub.status === "Visible")
                  .map((item) => (
                    <React.Fragment key={"p" + item.id}>
                      <SideBarItem
                        checkId={"p" + item.id}
                        name={item.name}
                        // checked={checkedItems.publishers.includes(item.name)}
                        onChange={() => onPublisherChange(item.name)}
                      />
                    </React.Fragment>
                  ))}
            </>
          </ul>
        </div>
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
