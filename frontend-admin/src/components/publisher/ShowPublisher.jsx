import React from "react";

import { getById } from "./../../redux/actions/publisherAction";
import { useParams } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Card, Descriptions, Skeleton } from "antd";
import publisherService from "../../services/publisherService";
import ContentHeader from "../common/ContentHeader";
function ShowPublisher({ publisher, getById, isLoading }) {
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    getById(id);
  }, [id]);

  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Card>
      <Descriptions title="Thông tin nhà xuất bản">
        <Descriptions.Item label="ID">{publisher.id}</Descriptions.Item>
        <Descriptions.Item label="Name">{publisher.name}</Descriptions.Item>
        <Descriptions.Item label="Email">{publisher.email}</Descriptions.Item>
        <Descriptions.Item label="Phone">{publisher.phone}</Descriptions.Item>
        <Descriptions.Item label="Address">
          {publisher.address}
        </Descriptions.Item>

        <Descriptions.Item label="ParentId">
          {publisher.parentId && publisher.parentId}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {publisher.status === 0 ? "Active" : "Invisible"}
        </Descriptions.Item>
        <Descriptions.Item label="Created At">
          {publisher.createdAt}
        </Descriptions.Item>
        <Descriptions.Item label="Updated At">
          {publisher.updatedAt}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  publisher: state.publisherReducer.publisher,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getById,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShowPublisher));
