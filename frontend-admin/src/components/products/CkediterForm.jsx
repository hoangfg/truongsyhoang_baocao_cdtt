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
    const { descriptionCkData, detailCkData } = this.state;
    const { book } = this.props;
    console.log(book);
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
            {/* <CKEditor
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
            /> */}
            <SunEditor
              setOptions={{
                height: 300,
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
                  ["align", "horizontalRule", "list", "lineHeight"],
                  ["table", "link", "image", "video"],
                  ["fullScreen", "showBlocks", "codeView"],
                 
                  ["save", "template"],
                ],
              }}
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
                height: 300,
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
                  ["align", "horizontalRule", "list", "lineHeight"],
                  ["table", "link", "image", "video"],
                  ["fullScreen", "showBlocks", "codeView"],
                  ["preview", "print"],
                  ["save", "template"],
                ],
              }}
              onChange={this.handleDetailChange}
            />
          </Form.Item>
        </Col>
      </Row>
    );
  }
}

export default CkediterForm;
