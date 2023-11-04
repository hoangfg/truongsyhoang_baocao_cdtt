import { FcAddImage } from "react-icons/fc";
import React, { Component, createRef } from "react";

import {
  Input,
  Modal,
  Form,
  Select,
  Col,
  Divider,
  Row,
  Upload,
  Image,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import configService from "../../services/configService";
import SunEditor from "suneditor-react";
class configForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      config: {},
      previewImage: "",
      previewVisible: false,
    };
  }
  //anfn
  handlePreview = (file) => {
    console.log(file);
    if (file.thumbUrl) {
      this.setState({
        ...this.state,
        previewImage: file.thumbUrl,
        previewVisible: true,
      });
    }
  };
  handleRemove = (value) => {
    console.log(value);
  };
  normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length > 1) {
      return [e.fileList[1]];
    }
    return e && e.fileList;
  };

  render() {
    const { open, onCreate, onCancel } = this.props;
    const { config } = this.props;
    const imageURL = configService.getPhotoUrl(config.image);
    const initialImage = {
      url: imageURL,
      uid: config.image,
    };

    return (
      <Modal
        open={open}
        title={<span style={{ fontSize: "20px" }}>Thêm </span>}
        okText="Lưu"
        cancelText="Thoát"
        onCancel={onCancel}
        onOk={() => {
          this.form.current
            .validateFields()
            .then((values) => {
              this.form.current.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        style={{
          position: "absolute",

          left: 0,
          right: 0,
          minWidth: "70vw",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Form
          ref={this.form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: "public" }}
          key={"f" + config.id + config.title + config.image}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={config.id}
                hidden={config.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={11}>
              {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={config.id}
                hidden={config.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}
              <Form.Item
                label="Tên"
                name="siteName"
                initialValue={config.siteName}
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
              <Row>
                <Col md={12}>
                  <Form.Item
                    label="Phone"
                    name="phone"
                    initialValue={config.phone}
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
                </Col>
                <Col md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    initialValue={config.email}
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
                </Col>
              </Row>

              <Form.Item
                label="metakey"
                name="metakey"
                initialValue={config.metakey}
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter a description.",
                  },
                ]}
                hasFeedback
              >
                <SunEditor
                  setOptions={{
                    height: 500,
                    buttonList: [
                      [
                        "bold",
                        "underline",
                        "italic",
                        "strike",
                        "subscript",
                        "superscript",
                      ],
                    ],
                  }}
                  setContents={config.metakey}
                />
              </Form.Item>
              <Form.Item
                label="metadesc"
                name="metadesc"
                initialValue={config.metadesc}
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter a description.",
                  },
                ]}
                hasFeedback
              >
                <SunEditor
                  setOptions={{
                    height: 500,
                    buttonList: [
                      [
                        "bold",
                        "underline",
                        "italic",
                        "strike",
                        "subscript",
                        "superscript",
                      ],
                      ["fontColor", "hiliteColor", "textStyle", "removeFormat"],
                    ],
                  }}
                  setContents={config.metadesc}
                />
              </Form.Item>

              <Divider></Divider>

              {/* {!config.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {config.id && (
                <Button
                  htmlType="button"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                  onClick={this.openUpdateConfirmModal}
                >
                  Cập nhật
                </Button> */}
              {/* )} */}
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Tác giả"
                name="author"
                initialValue={config.author}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
              >
                <Input></Input>
              </Form.Item>
              <Row>
                <Col md={12}>
                  <Form.Item
                    label="FaceBook"
                    name="facebook"
                    initialValue={config.facebook}
                    labelCol={{ span: 24 }}
                    // wrapperCol={{ span: 24 }}
                  >
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col md={12}>
                  <Form.Item
                    label="Twitter"
                    name="twitter"
                    initialValue={config.twitter}
                    labelCol={{ span: 24 }}
                    // wrapperCol={{ span: 24 }}
                  >
                    <Input></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Item
                    label="youtube"
                    name="youtube"
                    initialValue={config.youtube}
                    labelCol={{ span: 24 }}
                    // wrapperCol={{ span: 24 }}
                  >
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col md={12}>
                  <Form.Item
                    label="googleplus"
                    name="googleplus"
                    initialValue={config.googleplus}
                    labelCol={{ span: 24 }}
                    // wrapperCol={{ span: 24 }}
                  >
                    <Input></Input>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Trạng thái"
                name="status"
                labelCol={{ span: 24 }}
                initialValue={config.status === 0 ? "0" : "1"}
              >
                <Select>
                  <Select.Option value="0">Hoạt động</Select.Option>
                  <Select.Option value="1">Không hoạt động</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Hình ảnh"
                name="imageFile"
                initialValue={[initialImage]}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng thêm 1 hình ảnh.",
                  },
                ]}
                labelCol={{ span: 24 }}
                valuePropName="fileList"
                getValueFromEvent={this.normFile}
                // initialValue={config.status === "Visible" ? "0" : "1"}
              >
                {/* <ImgCrop rotationSlider> */}
                <Upload
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture-card"
                  // onChange={onChange}
                  onPreview={this.handlePreview}
                  onRemove={this.handleRemove}
                  accept=".jpg,.png,.gif"
                  maxCount={1}
                  beforeUpload={() => false}
                >
                  <uploadButton width="100px">
                    <FcAddImage size style={{ width: "70%" }} />
                  </uploadButton>
                </Upload>
                {/* </ImgCrop> */}
              </Form.Item>
            </Col>

            {this.state.previewVisible && (
              <Image
                src={this.state.previewImage}
                style={{ width: "300px" }}
                preview={{ visible: false }}
              ></Image>
            )}
          </Row>
        </Form>
      </Modal>
    );
  }
}

// configForm.propTypes = {
//   open: PropTypes.bool.isRequired,
//   onCreate: PropTypes.func.isRequired,
//   onCancel: PropTypes.func.isRequired,
// };

export default configForm;
