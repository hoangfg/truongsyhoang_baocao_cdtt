import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import ContentHeader from "../common/ContentHeader";
import { Button, Col, Modal, Row, Skeleton } from "antd";

import {
  insertGenres,
  getGenres,
  deleteById,
  updateGenres,
  statusGenres,
} from "../../redux/actions/bookGenresAction";
import { connect } from "react-redux";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import GenresList from "./GenresList";
import GenresForm from "./GenresForm";

import bookGenresReducer from "./../../redux/reducers/bookGenresReducer";
class ListGenres extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      genres: {
        id: "",
        name: "",
        detail: "",
        status: 0,
      },
    };
  }
  componentDidMount = () => {
    this.props.getGenres();
  };
  componentWillUnmount = () => {
    // this.props.clearState();
  };
  onCreate = (values) => {
    console.log(values);
    if (values.id) {
      this.props.updateGenres(values);
    } else {
      this.props.insertGenres(values);
    }
    this.setState({ ...this.state, genres: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, genres: values, open: true });
  };
  
  onDeleteConfirm = (genres) => {
    this.setState({ ...this.state, genres: genres });
    const message = "Bạn có muốn xóa thể loại: " + genres.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteGenres,
      okText: "Xóa",
      cancelText: "Thoát",
    });
  };
  deleteGenres = () => {
    this.props.deleteById(this.state.genres.id);
  };
  handleStatusChange = async (record) => {
    this.props.statusGenres(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { isLoading, genres } = this.props;
    if (isLoading) {
      return (
        <>
          <ContentHeader
            navigate={navigate}
            title="Danh sách thể loại"
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
                title="Danh sách thể loại"
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
                Thêm thể loại
              </Button>
            </Col>
          </Row>
        </div>
        <GenresList
          dataSource={genres}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
        />
        <GenresForm
          dataSource={genres}
          genres={this.state.genres}
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
  genres: state.bookGenresReducer.genres,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getGenres,
  insertGenres,
  deleteById,
  updateGenres,
  statusGenres,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListGenres));
