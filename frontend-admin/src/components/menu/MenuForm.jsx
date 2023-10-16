import { FcAddImage } from "react-icons/fc";
import React, { Component, createRef } from "react";

import { Input, Modal, Form, Select, Col, Divider, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

class GenresForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      menu: {},
    };
  }

  render() {
    const { open, onCreate, onCancel, dataSoure } = this.props;
    const { menu } = this.props;
    // console.log(dataSource);
    let filteredData = dataSoure.filter((item) => item.status === 0);
    if (menu.id !== "") {
      filteredData = filteredData.filter(
        (item) => item.id !== menu.id && item.parentId !== menu.id
      );
    }
    return (
      <Modal
        open={open}
        title={<span style={{ fontSize: "20px" }}>Sửa menu</span>}
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
          key={"f" + menu.id + menu.name}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={menu.id}
                hidden={menu.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={11}>
              <Form.Item
                label="Tên"
                name="name"
                initialValue={menu.name}
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
                initialValue={menu.link}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập liên kết.",
                  },
                  {
                    min: 2,
                    message: "Liên kết phải có ít nhất 2 ký tự.",
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
                  menu.position === "mainmenu" ? "mainmenu" : "footermenu"
                }
              >
                <Select>
                  <Select.Option value="mainmenu">Main menu</Select.Option>
                  <Select.Option value="footermenu">Footer menu</Select.Option>
                </Select>
              </Form.Item>
              <Divider></Divider>

              {/* {!menu.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {menu.id && (
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
                label="Mã cấp cha"
                name="parent_id"
                labelCol={{ span: 24 }}
                initialValue={menu.parentId}
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
                label="Sắp xếp: "
                name="idToUseForSortOrder"
                labelCol={{ span: 24 }}
                initialValue={menu.idToUseForSortOrder}
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
                initialValue={menu.status === 0 ? "0" : "1"}
              >
                <Select>
                  <Select.Option value="0">Hoạt động</Select.Option>
                  <Select.Option value="1">Không hoạt động</Select.Option>
                </Select>
              </Form.Item>
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

export default GenresForm;
