import React, { Component } from "react";
import withRouter from "./../../helpers/withRouter";
// import { PageHeader } from 'ant-design/pro-layout';/=
// import { PageHeader, Layout } from 'antd';
import { PageHeader } from "@ant-design/pro-layout";
import { Divider } from "antd/lib";

import { Row, Button, Col, Form, Input, Select, Modal, Popconfirm } from "antd";

import ContentHeader from "../common/ContentHeader";
import {
  insertPublisher,
  getById,
  clearPublisher,
  updatePublisher,
} from "./../../redux/actions/publisherAction";
import { connect } from "react-redux";
import publisherReducer from "./../../redux/reducers/publisherReducer";
import commonReducer from "./../../redux/reducers/commonReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";

class AddOrEdit extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      publisher: {
        id: "",
        name: "",
        status: "Visible",
      },
      shouldUpdate: false,
    };
  }

  componentDidMount = () => {
    const { id } = this.props.router.params;
    if (id) {
      this.props.getById(id);
    } else {
      this.props.clearPublisher();
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.publisher &&
      prevState.publisher.id !== nextProps.publisher.id
    ) {
      return {
        ...prevState,
        publisher: nextProps.publisher,
      };
    } else if (!nextProps.publisher) {
      return {
        ...prevState,
        publisher: {
          id: "",
          name: "",
          status: "visible",
        },
      };
    }
    return null;
  }
  openUpdateConfirmModal = () => {
    const message = "Bạn có nuốn Cập nhật nhà xuất bản không?";
    Modal.confirm({
      title: "Cập nhật bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: () => {
        this.setState({ shouldUpdate: true }, () => {
          this.formRef.current.submit();
        });
      },
      okText: "Có",
      cancelText: "Không",
    });
  };
  confirmUpdate = () => {
    this.formRef.current.submit();
  };

  onSubmitForm = (values) => {
    const { navigate } = this.props.router;
    const { id } = this.state.publisher;
    console.log("id:", id);
    if (!id) {
      this.props.insertPublisher(values, navigate);
    } else if (this.state.shouldUpdate) {
      
      this.props.updatePublisher(id, values, navigate);
    }
    console.log(values);
  };
  render() {
    const { navigate } = this.props.router;
    const { isLoading } = this.props;
    const { publisher } = this.state;
    let title = "Thêm nhà xuất bản";
    if(publisher.id) {
      title="Sửa thông tin nhà xuất bản"
    }
    return (
      <div>
        {/* <PageHeader
          className="site-page_header"
          title="Add new publisher"
          onBack={() => navigate(-1)}
        /> */}
        <ContentHeader
          navigate={navigate}
          title={title}
          className="site-page_header "
        />
        <Form
          Layout="vertical"
          className="form"
          onFinish={this.onSubmitForm}
          key={publisher.id}
          ref={this.formRef}
          disabled={isLoading}
        >
          <Row>
            <Col md={12}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={publisher.id}
                hidden={ publisher.id ? false:true}
              >
                <Input readOnly></Input>
              </Form.Item>
              <Form.Item
                label="Tên"
                name="name"
                initialValue={publisher.name}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên.",
                  },
                  {
                    min: 2,
                    message: "Tên phải có ít nhất 2 ký tự.",
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Trạng thái"
                name="status"
                labelCol={{ span: 24 }}
                initialValue={publisher.status === "Visible" ? "0" : "1"}
              >
                <Select>
                  <Select.Option value="0">Hoạt động</Select.Option>
                  <Select.Option value="1">Không hoạt động</Select.Option>
                </Select>
              </Form.Item>
              <Divider></Divider>

              {!publisher.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {publisher.id && (
                <Button
                  htmlType="button"
                  type="primary"
                  style={{ float: "right" }}
                  loading={isLoading}
                  onClick={this.openUpdateConfirmModal}
                >
                  Cập nhật
                </Button>
              )}
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  publisher: state.publisherReducer.publisher,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  insertPublisher,
  getById,
  clearPublisher,
  updatePublisher,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddOrEdit)
);
