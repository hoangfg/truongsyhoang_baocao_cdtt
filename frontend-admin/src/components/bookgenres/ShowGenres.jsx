import React from "react";

import { getById } from "../../redux/actions/bookGenresAction";
import { useParams } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Card, Descriptions, Skeleton } from "antd";
function ShowGenres({ genre, getById, isLoading }) {
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    getById(id);
  }, [id]);
  console.log("genre", genre);
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Card>
      <Descriptions title="Thông tin">
        <Descriptions.Item label="ID">{genre.id}</Descriptions.Item>
        <Descriptions.Item label="Name">{genre.name}</Descriptions.Item>
        <Descriptions.Item label="Detail">{genre.detail}</Descriptions.Item>
        <Descriptions.Item label="ParentId">{genre.parentId}</Descriptions.Item>

        <Descriptions.Item label="Status">
          {genre.status === 0 ? "Active" : "Inactive"}
        </Descriptions.Item>
        <Descriptions.Item label="Created At">
          {genre.createdAt}
        </Descriptions.Item>
        <Descriptions.Item label="Updated At">
          {genre.updatedAt}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  genre: state.bookGenresReducer.genre,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getById,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShowGenres));
