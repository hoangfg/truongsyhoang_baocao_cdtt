import React, { Component } from "react";
import withRouter from "./../../helpers/withRouter";
// import { PageHeader } from 'ant-design/pro-layout';/=
// import { PageHeader, Layout } from 'antd';
import { PageHeader } from "@ant-design/pro-layout";
import { Divider } from "antd/lib";

import {
  Row,
  Button,
  Col,
  Form,
  Input,
  Select,
  Modal,
  Popconfirm,
  message,
} from "antd";

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
import publisherService from "../../services/publisherService";

class AddOrEdit extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      publisher: {
        id: "",
        name: "",
        status: "Visible",
        parentId: "",
      },
      publisherList: [],
      shouldUpdate: false,
    };
  }
  handleChangeParentId = (value) => {
    this.setState({
      publisher: {
        ...this.state.publisher,
        parentId: value,
      },
    });
  };
  loadData = async (id) => {
    // console.log("id1", id);
    let parent = parseInt(id);
    try {
      const PublisherService = new publisherService();
      const publisherListResponse = await PublisherService.getPublishes();

      const filteredPublisherList = publisherListResponse.data.filter(
        (publisher) =>
          parent !== publisher.id &&
          publisher.status === "Visible" &&
          publisher.parentId !== parent
        // {
        //   if (id === publisher.parentId) {
        //     console.log("44", publisher);
        //   }
        // }
      );

      console.log("1", filteredPublisherList);
      this.setState({
        ...this.state,
        publisherList: filteredPublisherList,
      });
    } catch (error) {
      // console.log(error);
      message.error("Error: " + error);
    }
  };

  componentDidMount = () => {
    const { id } = this.props.router.params;
    if (id) {
      this.props.getById(id);

      this.loadData(id);
    } else {
      this.props.clearPublisher();
      this.loadData();
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
          parentId: "",
        },
      };
    }
    return null;
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (
  //     nextProps.publisher &&
  //     prevState.publisher.id !== nextProps.publisher.id
  //   ) {
  //     return {
  //       ...prevState,
  //       publisher: nextProps.publisher,
  //     };
  //   } else if (!nextProps.publisher) {
  //     return {
  //       ...prevState,
  //       publisher: {
  //         id: "",
  //         name: "",
  //         status: "visible",
  //       },
  //     };
  //   }
  //   return null;
  // }
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

    if (!id) {
      this.props.insertPublisher(values, navigate);
    } else if (this.state.shouldUpdate) {
      console.log(values);
      this.props.updatePublisher(id, values, navigate);
    }
  };

  render() {
    const { navigate } = this.props.router;
    const { isLoading, title } = this.props;
    const { publisherList } = this.state;
    const { publisher } = this.state;

    let select = publisher.parentId;

    if (select !== null && select !== undefined) {
      select = publisher.parentId.id;
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
          ref={this.formRef}
          key={publisher.id}
          disabled={isLoading}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={12}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={publisher.id}
                hidden={publisher.id ? false : true}
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
                label="Email"
                name="email"
                initialValue={publisher.email}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email.",
                  },
                  {
                    min: 2,
                    message: "Email phải có ít nhất 2 ký tự.",
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                initialValue={publisher.phone}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại.",
                  },
                  {
                    min: 2,
                    message: "Số điện thoại phải có ít nhất 2 ký tự.",
                  },
                ]}
              >
                <Input></Input>
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
            <Col md={10}>
              <Form.Item
                label="Địa chỉ"
                name="address"
                initialValue={publisher.address}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập Địa chỉ.",
                  },
                  {
                    min: 2,
                    message: "Địa chỉ phải có ít nhất 2 ký tự.",
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Mã cấp cha"
                name="parentId"
                labelCol={{ span: 24 }}
                initialValue={select}
                hasFeedback
              >
                <Select
                  placeholder="Chọn mã cấp cha"
                  // value={publisher.parentId}
                >
                  {/* {console.log("", publisher.parentId)} */}
                  {publisherList &&
                    publisherList.map((item) => (
                      <Select.Option value={item.id} key={"pub" + item.id}>
                        {item.name}
                      </Select.Option>
                    ))}
                </Select>
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
