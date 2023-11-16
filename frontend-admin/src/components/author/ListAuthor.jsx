import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

import ContentHeader from "../common/ContentHeader";
import AuthorList from "./AuthorList";
import { Button, Col, Modal, Row, Skeleton } from "antd";
import AuthorForm from "./AuthorForm";
import {
  insertAuthor,
  getAuthors,
  deleteById,
  updateAuthor,
  statusAuthor,
} from "./../../redux/actions/authorAction";
import { connect } from "react-redux";
import authorReducer from "./../../redux/reducers/authorReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";
class ListAuthor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      author: {
        id: "",
        name: "",
        image: "",
        detail: "",
        status: 0,
      },
    };
  }
  componentDidMount = () => {
    this.props.getAuthors();
  };
  // componentWillUnmount = () => {
  //   this.props.clearState();
  // };
  onCreate = (values) => {
    // console.log(values);
    if (values.id) {
      this.props.updateAuthor(values);
    } else {
      this.props.insertAuthor(values);
    }
    this.setState({ ...this.state, author: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, author: values, open: true });
  };

  onDeleteConfirm = (author) => {
    this.setState({ ...this.state, author: author });

    const message = "Bạn có muốn xóa tác giả: " + author.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteAuthor,
      okText: "Xóa",
      cancelText: "Thoát",
      onCancel: this.onCancelModel,
    });
  };
  deleteAuthor = () => {
    this.props.deleteById(this.state.author.id);
    this.setState({ ...this.state, author: {} });
  };
  onCancelModel = () => {
    this.setState({ ...this.state, author: {} });
  };
  handleStatusChange = async (record) => {
    this.props.statusAuthor(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  delete = async (record) => {
    this.props.statusAuthor(record.id, { status: 2 });
  };
  restore = async (record) => {
    this.props.statusAuthor(record.id, { status: 1 });
  };
  show = (author) => {
    const { navigate } = this.props.router;
    navigate("/authors/show/" + author.id);
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { authors, isLoading, type, title } = this.props;
    let filteredAuthors = authors.filter((author) => author.status !== 2);

    // If the type is "trash", filter authors with status === 2
    if (type === "trash") {
      filteredAuthors = authors.filter((author) => author.status === 2);
    }
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

        <AuthorList
          dataSource={filteredAuthors}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
          type={type}
          onRestore={this.restore}
          onDelete={this.delete}
        />

        <AuthorForm
          author={this.state.author}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, open: false, author: {} });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authors: state.authorReducer.authors,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  insertAuthor,
  getAuthors,
  deleteById,
  updateAuthor,
  statusAuthor,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListAuthor));
