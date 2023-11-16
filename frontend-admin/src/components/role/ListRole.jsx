import React from "react";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import {
  insertRole,
  getRoles,
  deleteById,
  updateRole,
} from "../../redux/actions/roleAction";
import { useState } from "react";
import { Component } from "react";
import { Button, Col, Modal, Row, Skeleton } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ContentHeader from "../common/ContentHeader";
import RoleList from "./RoleList";
import RoleForm from "./RoleForm";
class ListRole extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      role: {},
    };
  }
  componentDidMount = () => {
    this.props.getRoles();
  };

  onCreate = (values) => {
    console.log(values);
    if (values.id) {
      this.props.updateRole(values);
    } else {
      this.props.insertRole(values);
    }
    this.setState({ ...this.state, role: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, role: values, open: true });
  };

  onDeleteConfirm = (roles) => {
    this.setState({ ...this.state, role: roles });
    const message = "Bạn có muốn xóa ngôn ngữ: " + roles.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteRole,
      okText: "Xóa",
      cancelText: "Thoát",
    });
  };
  deleteRole = () => {
    this.props.deleteById(this.state.role.id);
  };
  handleStatusChange = async (record) => {
    this.props.statusRole(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { isLoading, roles } = this.props;
    if (isLoading) {
      return (
        <>
          <ContentHeader
            navigate={navigate}
            title="Danh sách quyền"
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
                title="Danh sách ngôn ngữ"
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
                Thêm quyền
              </Button>
            </Col>
          </Row>
        </div>
        <RoleList
          dataSource={roles}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
        />
        <RoleForm
          role={this.state.role}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, role: {}, open: false });
          }}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  roles: state.roleReducer.roles,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getRoles,
  insertRole,
  deleteById,
  updateRole,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListRole));
