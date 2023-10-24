import React, { Component } from "react";
import FooterNewLater from "./footer/FooterNewLater";
import FooterWidget from "./footer/FooterWidget";
import FooterInfo from "./footer/FooterInfo";
import { connect } from "react-redux";
import withRouter from "../helpers/withRouter";
import { getConfigs } from "../redux/actions/configAction";
import { getPages } from "../redux/actions/pageAction";
import { getPosts } from "../redux/actions/postAction";
import { getPublishers } from "../redux/actions/publisherAction";
import configReducer from "../redux/reducers/configReducer";
import pageReducer from "./../redux/reducers/pageReducer";
import publisherReducer from "./../redux/reducers/publisherReducer";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  componentDidMount = () => {
    this.props.getConfigs();
    this.props.getPages();
    this.props.getPosts();
    this.props.getPublishers();
  };
  render() {
    const { configs, pages, publishers, isLoading, posts } = this.props;
    console.log("clgs", publishers);
    return (
      <footer>
        <FooterNewLater></FooterNewLater>
        <FooterWidget
          pages={pages}
          publishers={publishers}
          posts={posts}
        ></FooterWidget>
        <FooterInfo config={configs}></FooterInfo>
      </footer>
    );
  }
}
const mapStateToProps = (state) => ({
  configs: state.configReducer.configs,
  pages: state.pageReducer.pages,
  posts: state.postReducer.posts,
  publishers: state.publisherReducer.publishers,

  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getConfigs,
  getPages,
  getPosts,
  getPublishers,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Footer));
