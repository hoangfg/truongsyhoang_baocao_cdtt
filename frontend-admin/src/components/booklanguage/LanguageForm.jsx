import { FcAddImage } from "react-icons/fc";
import React, { Component, createRef } from "react";

import { Input, Modal, Form, Select, Col, Divider, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

class LanguageForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      language: { id: "", name: "", code: "" },
    };
  }

  render() {
    const { open, onCreate, onCancel } = this.props;
    const { languages } = this.props;

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
          key={"f" + languages.id + languages.name + languages.code}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={languages.id}
                hidden={languages.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={11}>
              {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={language.id}
                hidden={language.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}
              <Form.Item
                label="Mã quốc gia"
                name="code"
                initialValue={languages.code}
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
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Tên"
                name="name"
                initialValue={languages.name}
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

              <Divider></Divider>
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

export default LanguageForm;
