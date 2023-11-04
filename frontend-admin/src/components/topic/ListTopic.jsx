import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import ContentHeader from "../common/ContentHeader";
import { Button, Col, Modal, Row, Skeleton } from "antd";

import {
  insertTopics,
  getTopics,
  deleteById,
  updateTopics,
  statusTopics,
} from "../../redux/actions/topicAction";
import { connect } from "react-redux";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import TopicsList from "./TopicList";
import TopicsForm from "./TopicForm";

class ListTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      topic: {},
    };
  }
  componentDidMount = () => {
    this.props.getTopics();
  };
  componentWillUnmount = () => {
    // this.props.clearState();
  };
  onCreate = (values) => {
    console.log(values);
    if (values.id) {
      this.props.updateTopics(values);
    } else {
      this.props.insertTopics(values);
    }
    this.setState({ ...this.state, topic: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, topic: values, open: true });
  };

  onDeleteConfirm = (topic) => {
    this.setState({ ...this.state, topic: topic });
    const message =
      "Bạn có muốn xóa thể loại bài viết: " + topic.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteTopics,
      okText: "Xóa",
      cancelText: "Thoát",
    });
  };
  deleteTopics = () => {
    this.props.deleteById(this.state.topic.id);
  };
  handleStatusChange = async (record) => {
    this.props.statusTopics(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { isLoading, topics } = this.props;
    console.log("topics", topics);
    if (isLoading) {
      return (
        <>
          <ContentHeader
            navigate={navigate}
            title="Danh sách thể loại bài viết"
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
                title="Danh sách thể loại bài viết"
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
                Thêm thể loại bài viết
              </Button>
            </Col>
          </Row>
        </div>
        <TopicsList
          dataSource={topics}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
        />
        <TopicsForm
          dataSource={topics}
          topic={this.state.topic}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, language: {}, open: false });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  topics: state.topicReducer.topics,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getTopics,
  insertTopics,
  deleteById,
  updateTopics,
  statusTopics,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListTopics));
