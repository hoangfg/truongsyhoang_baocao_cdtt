import React from "react";

import { getById } from "../../redux/actions/userAction";
import { useParams } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Card, Descriptions, Skeleton } from "antd";
import userService from "../../services/userService";
import ContentHeader from "../common/ContentHeader";
function ShowUser({ user, getById, isLoading }) {
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    getById(id);
  }, [id]);
  console.log("user", user);
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Card>
      <Descriptions title="User Info">
        <Descriptions.Item label="ID">{user.id}</Descriptions.Item>
        <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
        <Descriptions.Item label="Address">{user.address}</Descriptions.Item>
        <Descriptions.Item label="Gender">
          {user.gender === 1 ? "Male" : "Female"}
        </Descriptions.Item>
        <Descriptions.Item label="Image">
          <img
            src={userService.getPhotoUrl(user.image)}
            alt="User Image"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Role">
          {user.role && user.role.name}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {user.status === 0 ? "Active" : "Inactive"}
        </Descriptions.Item>
        <Descriptions.Item label="Created At">
          {user.createdAt}
        </Descriptions.Item>
        <Descriptions.Item label="Updated At">
          {user.updatedAt}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getById,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShowUser));
