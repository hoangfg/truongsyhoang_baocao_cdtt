import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import ContentHeader from "../common/ContentHeader";
import { Button, Col, Modal, Row, Skeleton } from "antd";

import {
  insertLanguage,
  getLanguage,
  deleteById,
  updateLanguage,
  clearLanguage,
} from "../../redux/actions/bookLanguageAction";
import { connect } from "react-redux";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import LanguageList from "./LanguageList";
import LanguageForm from "./LanguageForm";

import bookLanguageReducer from "../../redux/reducers/bookLanguageReducer";
class ListLanguage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      language: {
        id: "",
        name: "",
        code: "",
      },
    };
  }
  componentDidMount = () => {
    this.props.getLanguage();
  };
  componentWillUnmount = () => {
    // this.props.clearState();
  };
  onCreate = (values) => {
    console.log(values);
    if (values.id) {
      this.props.updateLanguage(values);
    } else {
      this.props.insertLanguage(values);
    }
    this.setState({ ...this.state, language: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, language: values, open: true });
  };

  onDeleteConfirm = (languages) => {
    this.setState({ ...this.state, language: languages });
    const message = "Bạn có muốn xóa ngôn ngữ: " + languages.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteLanguage,
      okText: "Xóa",
      cancelText: "Thoát",
    });
  };
  deleteLanguage = () => {
    this.props.deleteById(this.state.language.id);
  };
  handleStatusChange = async (record) => {
    this.props.statusLanguage(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { isLoading, languages } = this.props;
    if (isLoading) {
      return (
        <>
          <ContentHeader
            navigate={navigate}
            title="Danh sách ngôn ngữ"
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
                title="Danh sách ngôn ngữ"
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
                Thêm ngôn ngữ
              </Button>
            </Col>
          </Row>
        </div>
        <LanguageList
          dataSource={languages}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
        />
        <LanguageForm
          languages={this.state.language}
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
  languages: state.bookLanguageReducer.languages,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getLanguage,
  insertLanguage,
  deleteById,
  updateLanguage,
  clearLanguage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListLanguage));
