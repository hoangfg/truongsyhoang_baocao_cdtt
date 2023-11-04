import React from "react";
import Top1Trending from "./Top1Trending";
import { Link } from "react-router-dom";
import Top2Trending from "./Top2Trending";

export default function Trending(props) {
  const books = props.books;
  // console.log("1",books);
  const filterBook = books.filter((books) => books.status === 0);
  console.log(filterBook);
  return (
    <div className="trending">
      <div className="container">
        <div className="wrapper">
          <div className="sectop flexitem">
            <h2>
              <span className="circle" />
              <span>Sản phẩm mới</span>
            </h2>
          </div>
          <div className="column">
            <div className="flexwrap">
              <div className="row products big">
                <Top1Trending top={filterBook[0]} />
              </div>
              {/* <div className="row products mini">
                {filterBook.slice(1, 3).map((filteredItem) => (
                  <Top2Trending key={filteredItem.id} {...filteredItem} />
                ))}
              </div>
              <div className="row products mini">
                {filterBook.slice(4, 6).map((filteredItem) => (
                  <Top2Trending key={filteredItem.id} {...filteredItem} />
                ))}
              </div> */}
              <div className="row products mini">
                <Top2Trending />
              </div>
              <div className="row products mini">
                <Top2Trending />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
