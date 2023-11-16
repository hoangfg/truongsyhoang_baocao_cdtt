import { BiEdit, BiShowAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import React, { Component } from "react";

import withRouter from "../../helpers/withRouter";

import { Button, Divider, Modal, Skeleton, Space, Switch, Table } from "antd";
import ContentHeader from "../common/ContentHeader";
import Column from "antd/es/table/Column";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { connect } from "react-redux";

import {} from "../../redux/actions/publisherAction";
import {
  deleteById,
  getPublishers,
  clearState,
  updatePublisher,
  statusPublisher,
} from "./../../redux/actions/publisherAction";
import { MdSettingsBackupRestore } from "react-icons/md";
import { Link } from "react-router-dom";
class Index extends Component {
  constructor() {
    super();

    this.state = {
      // dataSource: [
      //   { publisherId: 1, name: "computer", status: 0 },
      //   { publisherId: 2, name: "computer", status: 1 },
      //   { publisherId: 3, name: "computer", status: 0 },
      // ],
      publisher: {},
    };
  }

  edit = (publisher) => {
    const { navigate } = this.props.router;
    navigate("/publishers/update/" + publisher.id);
  };
  openDeleteConfirmModal = (publisher) => {
    this.setState({ ...this.state, publisher: publisher });

    const message =
      "Bạn có nuốn xóa nhà xuất bản: " + publisher.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deletePublisher,
      okText: "Xóa",
      cancelText: "Thoát",
    });
  };
  deletePublisher = () => {
    this.props.deleteById(this.state.publisher.id);
  };
  handleStatusChange = async (record) => {
    this.props.statusPublisher(record.id, {
      status: record.status === "Visible" ? "Invisible" : "Visible",
    });
  };
  onDelete = async (record) => {
    this.props.statusPublisher(record.id, {
      status: "Disabled",
    });
  };
  onRestore = async (record) => {
    this.props.statusPublisher(record.id, {
      status: "Invisible",
    });
  };
  componentDidMount = () => {
    this.props.getPublishers();
  };
  componentWillUnmount = () => {
    this.props.clearState();
  };
  render() {
    const { navigate } = this.props.router;
    const { publishers, isLoading, title, type } = this.props;
    console.log(publishers);
    let filteredPublisher = publishers
      ? publishers.filter((item) => item.status !== "Disabled")
      : [];

    // If the type is "trash", filter publishers with status === 2
    if (type === "trash") {
      filteredPublisher = publishers
        ? publishers.filter((item) => item.status === "Disabled")
        : [];
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
        <ContentHeader
          navigate={navigate}
          title={title}
          className="site-page_header"
        />
        <Table
          className="content-panel_table"
          dataSource={filteredPublisher}
          size="small"
          rowKey="id"
          pagination={{ pageSize: 8 }}
        >
          <Column
            title="ID"
            key="Id"
            dataIndex="id"
            width={50}
            align="center"
          ></Column>
          <Column
            title="Tên"
            key="name"
            dataIndex="name"
            align="center"
          ></Column>
          {type !== "trash" && (
            <Column
              title="Trạng thái"
              key="status"
              dataIndex="status"
              width={150}
              align="center"
              render={(text, record) => (
                <Space size="middle">
                  <Switch
                    checked={record.status === "Visible"}
                    onChange={() => this.handleStatusChange(record)}
                    loading={isLoading}
                  />
                </Space>
              )}
            ></Column>
          )}
          <Column
            title="Chức năng"
            key="action"
            dataIndex="status"
            width={150}
            align="center"
            render={(_, record) => (
              <Space size="middle">
                <>
                  <Link to={`/publishers/show/${record.id}`}>
                    <Button
                      key={record.key}
                      type="link"
                      style={{ marginRight: "8px" }}
                      // onClick={() => onShow(record)}
                    >
                      {/* <BiEdit type="primary" align="center" /> */}
                      <BiShowAlt type="success" align="center" />
                    </Button>
                  </Link>
                  <Button
                    key={record.key}
                    type="primary"
                    style={{ marginRight: "8px" }}
                    onClick={() => this.edit(record)}
                  >
                    <BiEdit type="primary" align="center" />
                  </Button>
                  <Button
                    loading={isLoading}
                    key={record.key}
                    type="primary"
                    danger
                    onClick={() => this.openDeleteConfirmModal(record)}
                  >
                    <RiDeleteBin2Line align="center" />
                  </Button>
                </>
              </Space>
            )}
          ></Column>
        </Table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  publishers: state.publisherReducer.publishers,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getPublishers,
  deleteById,
  clearState,
  updatePublisher,
  statusPublisher,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
