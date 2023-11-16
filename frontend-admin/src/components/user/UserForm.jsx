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
  Radio,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import userService from "../../services/userService";
class UserForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      user: {},

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
    const { user, list } = this.props;
    const imageURL = userService.getPhotoUrl(user.image);
    const initialImage = {
      url: imageURL,
      uid: user.image,
    };
    console.log(user);
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
          key={"f" + user.id + user.name + user.image}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={user.id}
                hidden={user.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={11}>
              {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={user.id}
                hidden={user.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}
              <Form.Item
                label="Tên"
                name="name"
                initialValue={user.name}
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
                label="Tên đăng nhập"
                name="username"
                initialValue={user.username}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên đăng nhập.",
                  },
                  {
                    min: 2,
                    message: "Tên phải có ít nhất 2 ký tự.",
                  },
                ]}
              >
                {user.id ? (
                  <>
                    <Input readOnly></Input>
                  </>
                ) : (
                  <Input></Input>
                )}
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                name="password"
                initialValue={user.password}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu.",
                  },
                  {
                    min: 8,
                    message: "Mật khẩu có ít nhất 8 ký tự.",
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                initialValue={user.email}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email.",
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                initialValue={user.phone}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập Số điện thoại.",
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Địa chỉ"
                name="address"
                initialValue={user.address}
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
                <TextArea rows={2} />
              </Form.Item>
              <Divider></Divider>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Trạng thái"
                name="gender"
                labelCol={{ span: 24 }}
                initialValue={user.gender === 1 ? "1" : "0"}
              >
                <Radio.Group>
                  <Radio value="0">Nam</Radio>
                  <Radio value="1">Nữ</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Trạng thái"
                name="status"
                labelCol={{ span: 24 }}
                initialValue={user.status === 0 ? "0" : "1"}
              >
                <Select>
                  <Select.Option value="0">Hoạt động</Select.Option>
                  <Select.Option value="1">Không hoạt động</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="quyền"
                name="roleId"
                labelCol={{ span: 24 }}
                initialValue={user.role?.name}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn.",
                  },
                ]}
                hasFeedback
              >
                <Select placeholder="Chọn quyền">
                  {list &&
                    list.map((item) => (
                      <Select.Option value={item.id} key={"ro" + item.id}>
                        {item.name}
                      </Select.Option>
                    ))}
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
                // initialValue={user.status === "Visible" ? "0" : "1"}
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

// UserForm.propTypes = {
//   open: PropTypes.bool.isRequired,
//   onCreate: PropTypes.func.isRequired,
//   onCancel: PropTypes.func.isRequired,
// };

export default UserForm;
