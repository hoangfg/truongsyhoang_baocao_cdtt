import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

import ContentHeader from "../common/ContentHeader";
import AuthorList from "./AuthorList";
import { Button, Col, Modal, Row } from "antd";
import AuthorForm from "./AuthorForm";
import {
  insertAuthor,
  getAuthors,
  deleteById,
} from "./../../redux/actions/authorAction";
import { connect } from "react-redux";
import authorReducer from "./../../redux/reducers/authorReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";
class ListAuthor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      author: {},
    };
  }
  componentDidMount = () => {
    this.props.getAuthors();
  };
  // componentWillUnmount = () => {
  //   this.props.clearState();
  // };
  onCreate = (values) => {
    console.log(values);
    this.props.insertAuthor(values);
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
    });
  };
  deleteAuthor = () => {
    this.props.deleteById(this.state.author.id);
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { authors, isLoading } = this.props;
    return (
      <>
        <div className="content-header">
          <Row type="flex" justify="space-between" align="middle">
            <Col span={12}>
              <ContentHeader
                navigate={navigate}
                title="Danh sách tác giả"
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
          dataSource={authors}
          onDeleteConfirm={this.onDeleteConfirm}
        />

        <AuthorForm
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, open: false });
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListAuthor));
