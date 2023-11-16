import React from "react";

import { getById } from "./../../redux/actions/bookAction";
import { useParams } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Card, Descriptions, Skeleton } from "antd";
function ShowBook({ book, getById, isLoading }) {
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    getById(id);
  }, [id]);
  console.log("book", book);
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Card>
      <Descriptions title="Thông tin">
        <Descriptions.Item label="ID">{book.id}</Descriptions.Item>
        <Descriptions.Item label="Name">{book.name}</Descriptions.Item>
        <Descriptions.Item label="Detail">{book.detail}</Descriptions.Item>

        <Descriptions.Item label="Status">
          {book.status === 0 ? "Active" : "Inactive"}
        </Descriptions.Item>
        <Descriptions.Item label="Created At">
          {book.createdAt}
        </Descriptions.Item>
        <Descriptions.Item label="Updated At">
          {book.updatedAt}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  book: state.bookReducer.book,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getById,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShowBook));
