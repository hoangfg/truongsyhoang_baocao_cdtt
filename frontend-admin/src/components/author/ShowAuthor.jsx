import React from "react";

import { getById } from "../../redux/actions/authorAction";
import { useParams } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Card, Descriptions, Skeleton } from "antd";
import authorService from "../../services/authorService";
function ShowAuthor({ author, getById, isLoading }) {
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    getById(id);
  }, [id]);
  console.log("author", author);
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Card>
      <Descriptions title="User Info">
        <Descriptions.Item label="ID">{author.id}</Descriptions.Item>
        <Descriptions.Item label="Name">{author.name}</Descriptions.Item>

        <Descriptions.Item label="Image">
          <img
            src={authorService.getPhotoUrl(author.image)}
            alt="User Image"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        </Descriptions.Item>

        <Descriptions.Item label="Status">
          {author.status === 0 ? "Active" : "Inactive"}
        </Descriptions.Item>
        <Descriptions.Item label="Created At">
          {author.createdAt}
        </Descriptions.Item>
        <Descriptions.Item label="Updated At">
          {author.updatedAt}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  author: state.authorReducer.author,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getById,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShowAuthor));
