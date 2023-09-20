import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import PropTypes from "prop-types";
import ContentHeader from "../common/ContentHeader";
import AuthorList from "./AuthorList";
class ListAuthor extends Component {
  render() {
    const { navigate } = this.props.router;
    return (
      <>
        <ContentHeader
          navigate={navigate}
          title="Danh sách tác giả"
          className="site-page_header"
        />
        <AuthorList />
      </>
    );
  }
}
export default withRouter(ListAuthor);
