import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import PropTypes from "prop-types";
import ContentHeader from "../common/ContentHeader";
import AuthorList from "./AuthorList";
import { Button, Col, Row } from "antd";
import AuthorForm from "./AuthorForm";
class ListAuthor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  onCreate = (values) => {
    console.log(values);
  };

  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
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
        <AuthorList />

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
export default withRouter(ListAuthor);
