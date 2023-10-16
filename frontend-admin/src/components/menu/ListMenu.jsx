import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

import ContentHeader from "../common/ContentHeader";
import MenuList from "./MenuList";
import { Button, Col, Modal, Row, Skeleton, message } from "antd";
import MenuForm from "./MenuForm";

import { connect } from "react-redux";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import publisherService from "../../services/publisherService";
import authorService from "../../services/authorService";
import bookGenresService from "../../services/bookGenresService";
import bookLanguageService from "../../services/bookLanguageService";
import topicService from "../../services/topicService";
import pageService from "../../services/pageService";
import PageList from "./../page/PageList";
import {
  insertMenu,
  getMenus,
  deleteById,
  updateMenu,
  statusMenu,
} from "./../../redux/actions/menuAction";
class ListMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      menu: {
        name: "",
        link: "",
        position: "",
        type: "",
        table_id: "",
      },
      position: "mainmenu",
      publisherList: [], // Thêm mảng publisherList vào state
      authorList: [], // Thêm mảng authorList vào state
      genresList: [], // Thêm mảng genresList vào state
      languageList: [],
      TopicList: [],
      PageList: [],
      selectedItems: [],
    };
  }
  componentDidMount = () => {
    this.props.getMenus();
    this.loadData();
  };
  loadData = async () => {
    try {
      const PublisherService = new publisherService();
      const publisherListResponset = await PublisherService.getPublishes();

      const AuthorService = new authorService();
      const authorListResponse = await AuthorService.getAuthors();

      const BookGenresService = new bookGenresService();
      const genresListResponse = await BookGenresService.getGenres();

      const BookLanguageService = new bookLanguageService();
      const languageListResponse = await BookLanguageService.getLanguage();

      const TopicService = new topicService();
      const topicListResponse = await TopicService.getTopics();

      const PageService = new pageService();
      const pageListResponse = await PageService.getPages();

      this.setState({
        ...this.state,
        publisherList: publisherListResponset.data,
        authorList: authorListResponse.data,
        genresList: genresListResponse.data,
        languageList: languageListResponse.data,
        TopicList: topicListResponse.data,
        PageList: pageListResponse.data,
      });
    } catch (error) {
      // console.log(error);
      message.error("Error: " + error);
    }
  };

  onCreate = (values) => {
    console.log("v", values);
    if (values.id) {
      this.props.updateMenu(values);
      // console.log("edit", values);
    } else {
      this.props.insertMenu(values);
    }
    this.setState({ ...this.state, menu: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, menu: values, open: true });
  };

  onDeleteConfirm = (menu) => {
    this.setState({ ...this.state, menu: menu });

    const message = "Bạn có muốn xóa tác giả: " + menu.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteMenu,
      okText: "Xóa",
      cancelText: "Thoát",
      onCancel: this.onCancelModel,
    });
  };
  deleteMenu = () => {
    this.props.deleteById(this.state.menu.id);
    this.setState({ ...this.state, menu: {} });
  };
  onCancelModel = () => {
    // this.setState({ ...this.state, menu: {} });
  };
  handleStatusChange = async (record) => {
    this.props.statusMenu(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  onChange = (e, item) => {
    this.setState({
      position: e.target.value,
    });
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { menus, isLoading } = this.props;
    const {
      menu,
      publisherList,
      authorList,
      genresList,
      languageList,
      PageList,
      TopicList,
      selectedItems,
    } = this.state;
    // console.log("menus", menus);
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
                title="Danh sách Menu"
                className="site-page_header"
              />
            </Col>
          </Row>
        </div>

        <MenuList
          dataSoure={menus}
          menu={menu}
          publisherList={publisherList}
          authorList={authorList}
          genresList={genresList}
          languageList={languageList}
          PageList={PageList}
          TopicList={TopicList}
          onSubmit={this.handleSubmit}
          selectedItems={selectedItems}
          onChange={this.onChange}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
          onCreate={this.onCreate}
        />

        <MenuForm
          dataSoure={menus}
          menu={this.state.menu}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, open: false, menu: {} });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  menus: state.menuReducer.menus,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getMenus,
  insertMenu,
  deleteById,
  updateMenu,
  statusMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListMenu));
//   mapStateToProps,
//   mapDispatchToProps
