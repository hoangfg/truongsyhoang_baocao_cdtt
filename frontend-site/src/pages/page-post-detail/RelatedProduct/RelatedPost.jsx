import React from "react";
import RelatedItem from "./RelatedItem";
import { Link } from "react-router-dom";

export default function RelatedPost({ posts, topic, id }) {
  let filteredRelated = posts.filter(
    (item) => item.status === 0 && item.id !== id && item?.topic?.name === topic
  );
  console.log(filteredRelated);
  return (
    <div className="column">
      {filteredRelated.length > 0 && (
        <div className="sectop flexitem">
          <h2>
            <span className="circle" />
            <span>Bài viết liên quan</span>
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
          filteredRelated.map((item) => <RelatedItem post={item} />)}
      </div>
    </div>
  );
}
