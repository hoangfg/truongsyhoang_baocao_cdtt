import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

import ContentHeader from "../common/ContentHeader";
import PageList from "./PageList";
import { Button, Col, Modal, Row, Skeleton, message } from "antd";
import PageForm from "./PageForm";
import {
  insertPost,
  getPosts,
  deleteById,
  updatePost,
  statusPost,
} from "../../redux/actions/postAction";
import { connect } from "react-redux";
import postReducer from "../../redux/reducers/postReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";

class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      post: {},
    };
  }

  componentDidMount = () => {
    this.props.getPosts();
  };
  // componentWillUnmount = () => {
  //   this.props.clearState();
  // };

  onCreate = (values) => {
    // console.log(values);
    if (values.id) {
      this.props.updatePost(values);
    } else {
      console.log("val", values);
      this.props.insertPost(values);
    }
    this.setState({ ...this.state, post: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, post: values, open: true });
  };

  onDeleteConfirm = (post) => {
    this.setState({ ...this.state, post: post });

    const message = "Bạn có muốn xóa trang đơn: " + post.name + " không?";
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
    this.props.deleteById(this.state.post.id);
    this.setState({ ...this.state, post: {} });
  };
  onCancelModel = () => {
    this.setState({ ...this.state, post: {} });
  };
  handleStatusChange = async (record) => {
    this.props.statusPost(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  render() {
    const { navigate } = this.props.router;
    const { open, topicList } = this.state;
    const { posts, isLoading } = this.props;
    let filteredItems = posts.filter(
      (item) => item.status !== 2 && item.type === "page"
    );
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
                Thêm trang đơn
              </Button>
            </Col>
          </Row>
        </div>

        <PageList
          dataSource={filteredItems}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
        />

        <PageForm
          topicList={topicList}
          post={this.state.post}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, open: false, post: {} });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  isLoading: state.commonReducer.isLoading,
});
// const mapStateToProps = (state) => (console.log(state));

const mapDispatchToProps = {
  insertPost,
  getPosts,
  deleteById,
  updatePost,
  statusPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListPage));
