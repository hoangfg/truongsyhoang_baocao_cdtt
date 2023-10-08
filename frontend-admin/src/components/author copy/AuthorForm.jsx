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
import authorService from "../../services/authorService";
class AuthorForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      author: { id: "", name: "", detail: "", image: "" },
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
    const { author } = this.props;
    const imageURL = authorService.getPhotoUrl(author.image);
    const initialImage = {
      url: imageURL,
      uid: author.image,
    };
    return (
      <Modal
        open={open}
        title={<span style={{ fontSize: "20px" }}>Thêm tác giả</span>}
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
        style={{ marginBottom: "20px" }}
      >
        <Form
          ref={this.form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: "public" }}
          key={"f" + author.id + author.name + author.image}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={author.id}
                hidden={author.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={11}>
              {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={author.id}
                hidden={author.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}
              <Form.Item
                label="Tên"
                name="name"
                initialValue={author.name}
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
                label="Thông tin"
                name="detail"
                initialValue={author.detail}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập Thông tin của tác giả.",
                  },
                  {
                    min: 2,
                    message: "Thông tin của tác giả phải có ít nhất 2 ký tự.",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>

              <Divider></Divider>

              {/* {!author.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {author.id && (
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
                label="Trạng thái"
                name="status"
                labelCol={{ span: 24 }}
                initialValue={author.status === 0 ? "0" : "1"}
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
                // initialValue={author.status === "Visible" ? "0" : "1"}
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
            <Divider></Divider>
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

// AuthorForm.propTypes = {
//   open: PropTypes.bool.isRequired,
//   onCreate: PropTypes.func.isRequired,
//   onCancel: PropTypes.func.isRequired,
// };

export default AuthorForm;
