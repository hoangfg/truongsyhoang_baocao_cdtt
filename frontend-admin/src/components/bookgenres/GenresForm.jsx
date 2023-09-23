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
 
} from "antd";
import TextArea from "antd/es/input/TextArea";

class GenresForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      genres: { id: "", name: "", detail: "", status: 0 },
    };
  }

  render() {
    const { open, onCreate, onCancel } = this.props;
    const { genres } = this.props;

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
          key={"f" + genres.id + genres.name}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={genres.id}
                hidden={genres.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={11}>
              {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={genres.id}
                hidden={genres.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}
              <Form.Item
                label="Tên"
                name="name"
                initialValue={genres.name}
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
                initialValue={genres.detail}
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

              {/* {!genres.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {genres.id && (
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
                initialValue={genres.status === 0 ? "0" : "1"}
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
