import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import React, { Component } from "react";

class StoreForm extends Component {
  form = React.createRef();
  render() {
    const { book } = this.props;

    return (
      <Form layout="vertical" className="form" size="middle" ref={this.form}>
        <Row>
          <Col md={12}>
            <Form.Item
              label="Entry Price "
              name="entryPrice"
              initialValue={book.entryPrice}
              labelCol={{ span: 24 }}
              // wrapperCol={{ span: 24 }}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="Quanlity"
              name="quanlity"
              initialValue={book.quanlity}
              labelCol={{ span: 24 }}
              // wrapperCol={{ span: 24 }}
            >
              <Input></Input>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default StoreForm;
