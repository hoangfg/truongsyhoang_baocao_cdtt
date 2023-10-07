import { FcAddImage } from "react-icons/fc";
import React, { Component, createRef } from "react";

import { Input, Modal, Form, Select, Col, Divider, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import SunEditor from "suneditor-react";

class TopicsForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      topic: {},
    };
  }

  render() {
    const { open, onCreate, onCancel, dataSource } = this.props;
    const { topic } = this.props;
    // console.log(dataSource);
    let filteredData = dataSource.filter((item) => item.status === 0);
    if (topic.id !== "") {
      filteredData = filteredData.filter(
        (item) => item.id !== topic.id && item.parentId !== topic.id
      );
    }
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
          key={"f" + topic.id + topic.name}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={topic.id}
                hidden={topic.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={24}>
              {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={topic.id}
                hidden={topic.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}
              <Form.Item
                label="Tên"
                name="name"
                initialValue={topic.name}
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
                label="Description"
                name="metakey"
                initialValue={topic.metakey}
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
                  setContents={topic.metakey}
                />
              </Form.Item>
              <Form.Item
                label="Description"
                name="metadesc"
                initialValue={topic.metadesc}
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
                  setContents={topic.metadesc}
                />
              </Form.Item>
              <Form.Item
                label="Mã cấp cha"
                name="parentId"
                labelCol={{ span: 24 }}
                initialValue={topic.parentId}
                hasFeedback
              >
                <Select placeholder="Chọn mã cấp cha">
                  {filteredData &&
                    filteredData.map((item) => (
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
                initialValue={topic.status === 0 ? "0" : "1"}
              >
                <Select>
                  <Select.Option value="0">Hoạt động</Select.Option>
                  <Select.Option value="1">Không hoạt động</Select.Option>
                </Select>
              </Form.Item>
              <Divider></Divider>

              {/* {!topic.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {topic.id && (
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

            <Divider></Divider>
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

export default TopicsForm;
