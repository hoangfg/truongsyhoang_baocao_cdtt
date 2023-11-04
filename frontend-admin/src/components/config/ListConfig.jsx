import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

import ContentHeader from "../common/ContentHeader";
import ConfigList from "./ConfigList";
import { Button, Col, Modal, Row, Skeleton, message } from "antd";
import ConfigForm from "./ConfigForm";
import {
  insertConfig,
  getConfigs,
  deleteById,
  updateConfig,
  statusConfig,
} from "../../redux/actions/configAction";
import { connect } from "react-redux";
import configReducer from "../../redux/reducers/configReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";

class ListConfig extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      config: {},
    };
  }

  componentDidMount = () => {
    this.props.getConfigs();
  };
  // componentWillUnmount = () => {
  //   this.props.clearState();
  // };

  onCreate = (values) => {
    // console.log(values);
    if (values.id) {
      this.props.updateConfig(values);
    } else {
      console.log("val", values);
      this.props.insertConfig(values);
    }
    this.setState({ ...this.state, config: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, config: values, open: true });
  };

  onDeleteConfirm = (config) => {
    this.setState({ ...this.state, config: config });

    const message = "Bạn có muốn xóa : " + config.siteName + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteConfig,
      okText: "Xóa",
      cancelText: "Thoát",
      onCancel: this.onCancelModel,
    });
  };
  deleteConfig = () => {
    this.props.deleteById(this.state.config.id);
    this.setState({ ...this.state, config: {} });
  };
  onCancelModel = () => {
    this.setState({ ...this.state, config: {} });
  };
  handleStatusChange = async (record) => {
    this.props.statusConfig(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  render() {
    const { navigate } = this.props.router;
    const { open, topicList } = this.state;
    const { configs, isLoading } = this.props;
    console.log("topicList", configs.length);
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
              {configs.length < 1 ? (
                <Button
                  type="primary"
                  onClick={() => {
                    this.setState({ ...this.state, open: true });
                  }}
                >
                  Thêm
                </Button>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </div>

        <ConfigList
          dataSource={configs}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
        />

        <ConfigForm
          config={this.state.config}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, open: false, config: {} });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  configs: state.configReducer.configs,
  isLoading: state.commonReducer.isLoading,
});
// const mapStateToProps = (state) => (console.log(state));

const mapDispatchToProps = {
  insertConfig,
  getConfigs,
  deleteById,
  updateConfig,
  statusConfig,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListConfig));
