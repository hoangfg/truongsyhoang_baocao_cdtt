import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
} from "antd";
import React, { Component } from "react";
import CustomForm from "./CustomForm";

class StoreForm extends Component {
  form = React.createRef();
  render() {
    const { book } = this.props;

    return (
      // <CustomForm>
      <Row>
        <Col md={12}>
          <Form.Item
            label="Entry Price "
            name="entryPrice"
            initialValue={book.entryPrice}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập giá nhập.",
              },
              {
                type: "number",
                min: 1,
                message: "Giá nhập phải là một số dương lớn hơn 0.",
              },
            ]}
            hasFeedback
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Quanlity"
            name="quanlity"
            initialValue={book.quanlity}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số lượng.",
              },
              {
                type: "number",
                min: 1,
                message: "số lượng phải là một số dương lớn hơn 0.",
              },
            ]}
            hasFeedback
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      // </CustomForm>
    );
  }
}

export default StoreForm;
