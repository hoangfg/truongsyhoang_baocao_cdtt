import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Col, Divider, Form, Input, Row, Select, Upload } from "antd";
import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CustomForm from "./CustomForm";

class CkediterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptionCkData: "",
      detailCkData: "",
    };
  }

  handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    this.setState({ descriptionCkData: data });
  };

  handleDetailChange = (event, editor) => {
    const data = editor.getData();
    this.setState({ detailCkData: data });
  };

  render() {
    const { descriptionCkData, detailCkData } = this.state;

    return (
      <Row>
        <Col md={12}>
          <Form.Item
            label="Description"
            name="description"
            initialValue={descriptionCkData}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập.",
              },
            ]}
            hasFeedback
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
              onChange={this.handleDescriptionChange}
            />
          </Form.Item>
        </Col>
        <Col md={1}>
          <Divider type="vertical" style={{ height: "100%" }}></Divider>
        </Col>
        <Col md={11}>
          <Form.Item
            label="Detail"
            name="detail"
            initialValue={detailCkData}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập.",
              },
            ]}
            hasFeedback
          >
            <CKEditor
              editor={ClassicEditor}
              data={detailCkData}
              onReady={(editor) => {
                editor.editing.view.change((writer) => {
                  writer.setStyle(
                    "height",
                    "200px",
                    editor.editing.view.document.getRoot()
                  );
                });
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
