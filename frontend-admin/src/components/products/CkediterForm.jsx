import { Button, Col, Divider, Form, Input, Row } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
class CkediterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // descriptionCkData: this.props.descriptionCkData || "",
      // detailCkData: this.props.detailCkData || "",
    };
  }

  // handleDescriptionChange = (event, editor) => {
  //   const data = editor.getData();
  //   this.setState({ descriptionCkData: data });
  // };

  render() {
    const { book } = this.props;

    return (
      <Row>
        <Col md={11}>
          <Form.Item
            label="Description"
            name="description"
            initialValue={book.description}
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
                  ["outdent", "indent"],
                  ["align", "horizontalRule", "lineHeight"],
                  ["table", "link", "image"],
                ],
              }}
              setContents={book.description}
            />
          </Form.Item>
        </Col>
        <Col md={1}>
          <Divider type="vertical" style={{ height: "100%" }}></Divider>
        </Col>
        <Col md={12}>
          <Form.Item
            label="Detail"
            name="detail"
            initialValue={book.detail}
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
              setContents={book.detail}
            />
          </Form.Item>
        </Col>
      </Row>
    );
  }
}

export default CkediterForm;
