import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

import ContentHeader from "../common/ContentHeader";
import UserList from "./UserList";
import { Button, Col, Modal, Row, Skeleton, message } from "antd";
import UserForm from "./UserForm";
import {
  insertUser,
  getUsers,
  deleteById,
  updateUser,
  statusUser,
} from "../../redux/actions/userAction";
import { getRoles } from "../../redux/actions/roleAction";
import userReducer from "../../redux/reducers/userReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import roleService from "../../services/roleService";
class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      user: {},
      List: [],
    };
  }
  componentDidMount = () => {
    this.props.getUsers();
    this.loadData();
  };
  loadData = async () => {
    try {
      const RoleService = new roleService();

      const rolesListResponse = await RoleService.getRoles();

      this.setState({
        ...this.state,

        List: rolesListResponse.data,
      });
    } catch (error) {
      console.log(error);
      message.error("Error: " + error);
    }
  };
  // componentWillUnmount = () => {
  //   this.props.clearState();
  // };
  onCreate = (values) => {
    // console.log(values);
    if (values.id) {
      this.props.updateUser(values);
    } else {
      this.props.insertUser(values);
    }
    this.setState({ ...this.state, user: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, user: values, open: true });
  };

  onDeleteConfirm = (user) => {
    this.setState({ ...this.state, user: user });

    const message = "Bạn có muốn xóa tác giả: " + user.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteUser,
      okText: "Xóa",
      cancelText: "Thoát",
      onCancel: this.onCancelModel,
    });
  };
  deleteUser = () => {
    this.props.deleteById(this.state.user.id);
    this.setState({ ...this.state, user: {} });
  };
  onCancelModel = () => {
    this.setState({ ...this.state, user: {} });
  };
  handleStatusChange = async (record) => {
    this.props.statusUser(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  delete = async (record) => {
    this.props.statusUser(record.id, { status: 2 });
  };
  restore = async (record) => {
    this.props.statusUser(record.id, { status: 1 });
  };
  show = (user) => {
    const { navigate } = this.props.router;
    navigate("/users/show/" + user.id);
  };
  render() {
    const { navigate } = this.props.router;
    const { open, List } = this.state;
    const { users, isLoading, title, type } = this.props;
    let filteredUsers = users.filter(
      (user) => user.status !== 2 && user.role != null
    );

    // If the type is "trash", filter users with status === 2
    if (type === "trash") {
      filteredUsers = users.filter(
        (user) => user.status === 2 && user.role != null
      );
    }
    if (isLoading) {
      return (
        <>
          <ContentHeader
            navigate={navigate}
            title={title}
            className="site-page_header"
          />
          <Skeleton />
        </>
      );
    }
    return (
      <>
        <div className="content-header">
          <Row type="flex" justify="space-between" align="middle">
            <Col span={12}>
              <ContentHeader
                navigate={navigate}
                title={title}
                className="site-page_header"
              />
            </Col>
            <Col md={12} style={{ textAlign: "right" }}>
              <Button
                type="primary"
                onClick={() => {
                  this.setState({ ...this.state, open: true });
                }}
              >
                Thêm tác giả
              </Button>
            </Col>
          </Row>
        </div>

        <UserList
          dataSource={filteredUsers}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          onShow={this.show}
          handleStatusChange={this.handleStatusChange}
          type={type}
          onRestore={this.restore}
          onDelete={this.delete}
        />

        <UserForm
          user={this.state.user}
          list={List}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, open: false, user: {} });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  roles: state.roleReducer.roles,
  users: state.userReducer.users,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  insertUser,
  getUsers,
  deleteById,
  updateUser,
  statusUser,
  getRoles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListUser));
