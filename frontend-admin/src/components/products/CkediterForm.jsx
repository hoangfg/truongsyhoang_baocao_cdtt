import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Col, Divider, Form, Input, Row, Select, Upload } from "antd";
import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
class CkediterForm extends Component {
  form = React.createRef();
  constructor(props) {
    super(props)
  
    this.state = {
      descriptionCkData: ""
    };
  }
  
  render() {
    const { book } = this.props;
    const {descriptionCkData} = this.state
    return (
      <Form layout="vertical" className="form" size="middle" ref={this.form}>
        <Row>
          <Col md={12}>
            <Form.Item
              label="Description"
              name="description"
              initialValue={descriptionCkData}
              labelCol={{ span: 24 }}
              // wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập thông tin sách.",
                },
                {
                  min: 2,
                  message: "thông tin sách có ít nhất 2 ký tự.",
                },
              ]}
            >
              <CKEditor
                editor={ClassicEditor}
                data={descriptionCkData}
                onReady={(editor) => {
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      "height",
                      "200px",
                      editor.editing.view.document.getRoot()
                    );
                  });
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ ...this.state, descriptionCkData: data });
                }}
              ></CKEditor>
            </Form.Item>
          </Col>
          <Col md={1}>
            <Divider type="vertical" style={{ height: "100%" }}></Divider>
          </Col>
          <Col md={11}>
            <Form.Item
              label="Detail"
              name="detail"
              initialValue={book.detail}
              labelCol={{ span: 24 }}
              // wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mô tả chi tiết sách.",
                },
                {
                  min: 2,
                  message: "chi tiết sách có ít nhất 2 ký tự.",
                },
              ]}
            >
              <CKEditor
                editor={ClassicEditor}
                data={book.detail} // Chuyển dữ liệu từ prop vào CKEditor
                onReady={(editor) => {
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      "height",
                      "200px",
                      editor.editing.view.document.getRoot()
                    );
                  });
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.props.onDetailChange(data); // Gọi hàm callback để cập nhật dữ liệu
                }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default CkediterForm;
