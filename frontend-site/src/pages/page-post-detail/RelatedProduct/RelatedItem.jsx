import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bookService from "../../../services/bookService";
import postService from "../../../services/postService";

export default function RelatedItem(props) {
  const navigate = useNavigate();

  const handleNavigate = (slug) => {
    navigate(`/product/${slug}`);
  };
  const post = props.post;
  console.log("g", post);
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to={`/post/${post.slug}`}>
            {/* <img src="/assets/posts/apparel1.jpg" alt="" /> */}
            <img src={postService.getPhotoUrl(post.image)} alt="" />
          </Link>
        </div>
        <div className="hoverable">
          <ul>
            <li className="active">
              <Link href="#">
                <i className="ri-heart-line" />
              </Link>
            </li>
            <li>
              <Link to={`/post/${post.slug}`}>
                <i className="ri-eye-line" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="ri-shuffle-line" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="rating">
          <div className="stars" />
          <span className="mini-text">(1,548)</span>
        </div>
        <h3 className="main-links">
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        <div className="price">
          {post.updatedAt !== null ? (
            <>
              <span className="current">{post.updatedAt}</span>
            </>
          ) : (
            <span className="current">{post.createdAt}</span>
          )}
        </div>
      </div>
    </div>
  );
}
