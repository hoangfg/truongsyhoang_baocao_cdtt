import React from "react";
import FeatureItem from "../../../components/FeatureItem";
import Loading from "../../../components/Loading";
import PostItem from "./PostItem";

function Post(props) {
  const {
    posts,
    productsToShow,
    sortBy,
    type,
    isLoadingPosts,
    slug,
    slugName,
  } = props;
  let filteredPosts = posts.filter((post) => post.status === 0);
  let sortedPosts = [...filteredPosts];
  switch (sortBy) {
    case "name_ASC":
      sortedPosts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name_DESC":
      sortedPosts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "up_ASC":
      sortedPosts.sort((a, b) => {
        const dateA = new Date(a.updated_at || a.created_at);
        const dateB = new Date(b.updated_at || b.created_at);
        return dateA - dateB;
      });
      break;
    case "up_DESC":
      sortedPosts.sort((a, b) => {
        const dateA = new Date(a.updated_at || a.created_at);
        const dateB = new Date(b.updated_at || b.created_at);
        return dateB - dateA;
      });
      break;
    default:
      break;
  }
  return (
    <>
      {isLoadingPosts === true ? (
        <Loading />
      ) : filteredPosts.length > 0 ? (
        <div className="products main flexwrap">
          {sortedPosts.slice(0, productsToShow).map((filteredItem) => (
            <PostItem key={filteredItem.id} {...filteredItem} />
          ))}
        </div>
      ) : (
        <div>Không có sản phẩm</div>
      )}
    </>
  );
}

export default Post;
