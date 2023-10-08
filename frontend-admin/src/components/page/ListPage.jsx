import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

import ContentHeader from "../common/ContentHeader";
import PageList from "./PageList";
import { Button, Col, Modal, Row, Skeleton, message } from "antd";
import PageForm from "./PageForm";
import {
  insertPage,
  getPages,
  deleteById,
  updatePage,
  statusPage,
} from "../../redux/actions/pageAction";
import { connect } from "react-redux";
import pageReducer from "../../redux/reducers/pageReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";


class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      page: {},
     
    };
  }

  componentDidMount = () => {
    this.props.getPages();

    
  };
  // componentWillUnmount = () => {
  //   this.props.clearState();
  // };
  

  onCreate = (values) => {
    // console.log(values);
    if (values.id) {
      this.props.updatePage(values);
    } else {
      console.log("val", values);
      this.props.insertPage(values);
    }
    this.setState({ ...this.state, page: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, page: values, open: true });
  };

  onDeleteConfirm = (page) => {
    this.setState({ ...this.state, page: page });

    const message = "Bạn có muốn xóa tác giả: " + page.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deletePage,
      okText: "Xóa",
      cancelText: "Thoát",
      onCancel: this.onCancelModel,
    });
  };
  deletePage = () => {
    this.props.deleteById(this.state.page.id);
    this.setState({ ...this.state, page: {} });
  };
  onCancelModel = () => {
    this.setState({ ...this.state, page: {} });
  };
  handleStatusChange = async (record) => {
    this.props.statusPage(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  render() {
    const { navigate } = this.props.router;
    const { open, topicList } = this.state;
    const { pages, isLoading } = this.props;
    console.log("topicList", topicList);
    if (isLoading) {
      return (
        <>
          <ContentHeader
            navigate={navigate}
            title="Danh sách nhà xuất bản"
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
                title="Danh sách nhà xuất bản"
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

        <PageList
          dataSource={pages}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
        />

        <PageForm
          topicList={topicList}
          page={this.state.page}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, open: false, page: {} });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  pages: state.pageReducer.pages,
  isLoading: state.commonReducer.isLoading,
});
// const mapStateToProps = (state) => (console.log(state));

const mapDispatchToProps = {
  insertPage,
  getPages,
  deleteById,
  updatePage,
  statusPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListPage));
