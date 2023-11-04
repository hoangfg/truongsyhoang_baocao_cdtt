import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import ContentHeader from "../common/ContentHeader";
import { Button, Col, Modal, Row, Skeleton } from "antd";

import {
  insertSlider,
  getSliders,
  deleteById,
  updateSlider,
  statusSlider,
} from "../../redux/actions/sliderAction";
import { connect } from "react-redux";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import SlidersList from "./SliderList";
import SlidersForm from "./SliderForm";

class ListSliders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      slider: {},
    };
  }
  componentDidMount = () => {
    this.props.getSliders();
  };
  componentWillUnmount = () => {
    // this.props.clearState();
  };
  onCreate = (values) => {
    console.log(values);
    if (values.id) {
      this.props.updateSlider(values);
    } else {
      console.log("var>", values);
      this.props.insertSlider(values);
    }
    this.setState({ ...this.state, slider: {}, open: false });
  };
  onEdit = (values) => {
    this.setState({ ...this.state, slider: values, open: true });
  };

  onDeleteConfirm = (slider) => {
    this.setState({ ...this.state, slider: slider });
    const message =
      "Bạn có muốn xóa thể loại ảnh bìa: " + slider.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteSliders,
      okText: "Xóa",
      cancelText: "Thoát",
    });
  };
  deleteSliders = () => {
    this.props.deleteById(this.state.slider.id);
  };
  handleStatusChange = async (record) => {
    this.props.statusSlider(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { isLoading, sliders } = this.props;
    console.log("sliders", sliders);
    if (isLoading) {
      return (
        <>
          <ContentHeader
            navigate={navigate}
            title="Danh sách thể loại ảnh bìa"
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
                title="Danh sách thể loại ảnh bìa"
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
                Thêm 
              </Button>
            </Col>
          </Row>
        </div>
        <SlidersList
          slider={sliders}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
        />
        <SlidersForm
          dataSource={sliders}
          slider={this.state.slider}
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
  sliders: state.sliderReducer.sliders,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getSliders,
  insertSlider,
  deleteById,
  updateSlider,
  statusSlider,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListSliders));
