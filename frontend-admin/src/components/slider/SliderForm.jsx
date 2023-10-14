import { FcAddImage } from "react-icons/fc";
import React, { Component, createRef } from "react";

import { Input, Modal, Form, Select, Col, Divider, Row, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import sliderService from "../../services/sliderService";

class SliderForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      slider: {},
      previewImage: "",
      previewVisible: false,
    };
  }
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
    const { open, onCreate, onCancel, dataSource } = this.props;
    const { slider } = this.props;
    console.log("data", dataSource);
    let filteredData = dataSource.filter((item) => item.status === 0);
    console.log("filteredData", filteredData);
    if (slider.id !== "") {
      filteredData = filteredData.filter((item) => item.id !== slider.id);
    }
    const imageURL = sliderService.getPhotoUrl(slider.image);
    const initialImage = {
      url: imageURL,
      uid: slider.image,
    };
    return (
      <Modal
        open={open}
        title={<span style={{ fontSize: "20px" }}>Thêm tác giả</span>}
        okText="Lưu"
        cancelText="Thoát"
        onCancel={onCancel}
        className="custom-modal"
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
          minHeight: "100vh",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
        }}
      >
        <Form
          ref={this.form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: "public" }}
          key={"f" + slider.id + slider.name}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={slider.id}
                hidden={slider.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={24}>
              {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={slider.id}
                hidden={slider.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}

              <Row style={{ display: "flex", justifyContent: "space-around" }}>
               
                <Col xs={24} md={11}>
                  {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={slider.id}
                hidden={slider.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}
                  <Form.Item
                    label="Tên"
                    name="name"
                    initialValue={slider.name}
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
                    label="Liên kết"
                    name="link"
                    initialValue={slider.link}
                    labelCol={{ span: 24 }}
                    // wrapperCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập Thông tin của tác giả.",
                      },
                      {
                        min: 2,
                        message:
                          "Thông tin của tác giả phải có ít nhất 2 ký tự.",
                      },
                    ]}
                  >
                    <Input></Input>
                  </Form.Item>
                  <Form.Item
                    label="Vị trí"
                    name="position"
                    labelCol={{ span: 24 }}
                    initialValue={
                      slider.position === "slidershow" ? "slidershow" : ""
                    }
                  >
                    <Select>
                      <Select.Option value="slidershow">
                        slidershow
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Divider></Divider>

                  {/* {!slider.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {slider.id && (
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
                    label="Vị trí"
                    name="idToUseForSortOrder"
                    labelCol={{ span: 24 }}
                    initialValue={slider.idToUseForSortOrder}
                    hasFeedback
                  >
                    <Select placeholder="Chọn vị trị">
                      {filteredData &&
                        filteredData.map((item) => (
                          <Select.Option value={item.id} key={"pub" + item.id}>
                            Sau: {item.name}
                          </Select.Option>
                        ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Trạng thái"
                    name="status"
                    labelCol={{ span: 24 }}
                    initialValue={slider.status === 0 ? "0" : "1"}
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
                    // initialValue={page.status === "Visible" ? "0" : "1"}
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
              </Row>
              {/* {!slider.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {slider.id && (
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

export default SliderForm;
