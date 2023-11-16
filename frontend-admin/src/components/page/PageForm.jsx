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
import postService from "../../services/postService";
import SunEditor from "suneditor-react";
class PageForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      post: {},
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
    const { post } = this.props;
    const imageURL = postService.getPhotoUrl(post.image);
    const initialImage = {
      url: imageURL,
      uid: post.image,
    };

    return (
      <Modal
        open={open}
        title={<span style={{ fontSize: "20px" }}>Thêm trang đơn</span>}
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
          key={"f" + post.id + post.title + post.image}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={post.id}
                hidden={post.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
              <Form.Item
                label="Type"
                name="type"
                labelCol={{ span: 24 }}
                initialValue="page"
                hidden
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={11}>
              {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={post.id}
                hidden={post.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}
              <Form.Item
                label="Tên"
                name="title"
                initialValue={post.title}
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
                label="metakey"
                name="metakey"
                initialValue={post.metakey}
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
                  setContents={post.metakey}
                />
              </Form.Item>
              <Form.Item
                label="metadesc"
                name="metadesc"
                initialValue={post.metadesc}
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
                  setContents={post.metadesc}
                />
              </Form.Item>

              <Divider></Divider>

              {/* {!post.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {post.id && (
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
                label="Detail"
                name="detail"
                initialValue={post.detail}
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter a detail.",
                  },
                ]}
                hasFeedback
              >
                <SunEditor
                  setOptions={{
                    height: 500,
                    buttonList: [
                      ["undo", "redo", "font", "fontSize", "formatBlock"],
                      [
                        "bold",
                        "underline",
                        "italic",
                        "strike",
                        "subscript",
                        "superscript",
                      ],
                      ["fontColor", "hiliteColor", "textStyle", "removeFormat"],
                      ["outdent", "indent"],
                      ["align", "horizontalRule", "lineHeight"],
                      ["table", "link", "image"],
                    ],
                  }}
                  onChange={this.handleDetailChange}
                  setContents={post.detail}
                />
              </Form.Item>

              <Form.Item
                label="Trạng thái"
                name="status"
                labelCol={{ span: 24 }}
                initialValue={post.status === 0 ? "0" : "1"}
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
                // initialValue={post.status === "Visible" ? "0" : "1"}
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

// PageForm.propTypes = {
//   open: PropTypes.bool.isRequired,
//   onCreate: PropTypes.func.isRequired,
//   onCancel: PropTypes.func.isRequired,
// };

export default PageForm;
