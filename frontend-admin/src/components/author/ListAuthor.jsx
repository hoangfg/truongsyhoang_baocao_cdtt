import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

import ContentHeader from "../common/ContentHeader";
import AuthorList from "./AuthorList";
import { Button, Col, Row } from "antd";
import AuthorForm from "./AuthorForm";
import { insertAuthor, getAuthors } from "./../../redux/actions/authorAction";
import { connect } from "react-redux";
import authorReducer from "./../../redux/reducers/authorReducer";
class ListAuthor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
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

  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { authors, isLoading } = this.props;
    return (
      <>
        <ContentHeader
          navigate={navigate}
          title="Danh sách tác giả"
          className="site-page_header"
        />
        <Row>
          <Col md={24}>
            <Button
              type="primary"
              onClick={() => {
                this.setState({ ...this.state, open: true });
              }}
            >
              New Collection
            </Button>
          </Col>
        </Row>
        <AuthorList dataSource={authors} />

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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListAuthor));
