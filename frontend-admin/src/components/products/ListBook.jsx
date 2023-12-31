import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentHeader from "../common/ContentHeader";
import { Button, Col, Modal, Row, Skeleton } from "antd";

import BookList from "./BookList";
import withRouter from "../../helpers/withRouter";
import { connect } from "react-redux";
import bookReducer from "./../../redux/reducers/bookReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  getBooks,
  deleteById,
  updateBook,
  statusBook,
} from "./../../redux/actions/bookAction";
import StoreForm from "./StoreForm";
import { insertStore } from "./../../redux/actions/storeAction";
class ListBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openStoreForm: false,
      store: {},
    };
  }

  openStoreForm = (id) => {
    this.setState({
      openStoreForm: true,
      store: {
        ...this.state.store,
        bookId: id,
      },
    });
  };

  closeStoreForm = () => {
    this.setState({
      openStoreForm: false,
    });
  };
  onCreate = (values) => {
    this.props.insertStore(values);
    this.setState({ ...this.state, store: {}, open: false });
  };

  componentDidMount = () => {
    this.props.getBooks();
  };
  edit = (book) => {
    const { navigate } = this.props.router;
    navigate("/product/update/" + book.id);
  };
  add = () => {
    this.setState({
      openStoreForm: true,
      store: {},
    });
    const { navigate } = this.props.router;
    navigate("/product/add");
  };
  openDeleteConfirmModal = (book) => {
    this.setState({ ...this.state, book: book });

    const message = "Bạn có nuốn xóa nhà xuất bản: " + book.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteBook,
      okText: "Xóa",
      cancelText: "Thoát",
    });
  };
  deleteBook = () => {
    this.props.deleteById(this.state.book.id);
  };
  handleStatusChange = async (record) => {
    this.props.statusBook(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  delete = async (record) => {
    this.props.statusBook(record.id, { status: 2 });
  };
  restore = async (record) => {
    this.props.statusBook(record.id, { status: 1 });
  };
  show = (book) => {
    const { navigate } = this.props.router;
    navigate("/product/show/" + book.id);
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { books, isLoading, title, type } = this.props;
    let filteredItems = books.filter((item) => item.status !== 2);

    if (type === "trash") {
      filteredItems = books.filter((item) => item.status === 2);
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
          <Row type="flex" justify="space-between">
            <Col span={12}>
              <ContentHeader
                navigate={navigate}
                title={title}
                className="site-page_header"
              />
            </Col>
            <Col md={12} style={{ textAlign: "right" }}>
              <Button type="primary" onClick={this.add}>
                Thêm
              </Button>
            </Col>
          </Row>
        </div>

        <BookList
          books={filteredItems}
          openDeleteConfirmModal={this.openDeleteConfirmModal}
          onEdit={this.edit}
          handleStatusChange={this.handleStatusChange}
          openStoreForm={this.openStoreForm}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, open: false, page: {} });
          }}
          type={type}
          onRestore={this.restore}
          onDelete={this.delete}
        />
        {this.state.openStoreForm && (
          <StoreForm
            open={this.state.openStoreForm}
            onCancel={this.closeStoreForm}
            onCreate={this.onCreate}
            store={this.state.store}
            productId={this.state.book}
            // Add any other necessary props here
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.commonReducer.isLoading,
  books: state.bookReducer.books,
});

const mapDispatchToProps = {
  getBooks,
  deleteById,
  statusBook,
  insertStore,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListBook)
);
