import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import ContentHeader from "../common/ContentHeader";
import { Button, Col, Modal, Row, Skeleton } from "antd";

import {
  insertStore,
  getStore,
  deleteById,
  updateStore,
} from "../../redux/actions/storeAction";
import { connect } from "react-redux";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import StoreList from "./StoreList";
import StoreForm from "./StoreForm";

class ListStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      store: {},
    };
  }
  componentDidMount = () => {
    this.props.getStore();
  };
  componentWillUnmount = () => {
    // this.props.clearState();
  };
  onCreate = (values) => {
    console.log("v", values.id);
    if (values.id) {
      console.log("v1", values);
      this.props.updateStore(values);
    }
    this.setState({ ...this.state, store: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, store: values, open: true });
  };

  // onDeleteConfirm = (stores) => {
  //   this.setState({ ...this.state, store: stores });
  //   const message = "Bạn có muốn xóa ngôn ngữ: " + stores.name + " không?";
  //   Modal.confirm({
  //     title: "Xóa bản ghi?",
  //     icon: <ExclamationCircleOutlined />,
  //     content: message,
  //     onOk: this.deleteStore,
  //     okText: "Xóa",
  //     cancelText: "Thoát",
  //   });
  // };
  deleteStore = () => {
    this.props.deleteById(this.state.store.id);
  };
  handleStatusChange = async (record) => {
    this.props.statusStore(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };

  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { isLoading, stores } = this.props;
    console.log("stores", stores);
    // const bookName = this.state.store.book.name;
    // console.log("bookname", bookName);
    if (isLoading) {
      return (
        <>
          <ContentHeader
            navigate={navigate}
            title="Danh sách ngôn ngữ"
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
                Thêm ngôn ngữ
              </Button>
            </Col>
          </Row>
        </div>
        <StoreList
          dataSource={stores}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
        />
        <StoreForm
          store={this.state.store}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, store: {}, open: false });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  stores: state.storeReducer.stores,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getStore,
  insertStore,
  deleteById,
  updateStore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListStore));
