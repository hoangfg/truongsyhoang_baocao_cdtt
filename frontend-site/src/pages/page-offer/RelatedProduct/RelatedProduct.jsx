import React from "react";
import RelatedItem from "./RelatedItem";
import { Link } from "react-router-dom";

export default function RelatedProduct({ books, genres, id }) {
  console.log("re", books);
  console.log("re1", genres);
  let filteredRelated = books.filter(
    (item) =>
      item.status === 0 && item.id !== id && item.bookGenresName === genres
  );
  
  return (
    <div className="column">
      {filteredRelated.length > 0 && (
        <div className="sectop flexitem">
          <h2>
            <span className="circle" />
            <span>Sản phẩm liên quan</span>
          </h2>
          <div className="second-links">
            <Link href="#" className="view-all">
              View all
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      )}
      <div className="products main flexwrap">
        {filteredRelated &&
          filteredRelated.map((item) => <RelatedItem book={item} />)}
      </div>
    </div>
  );
}
