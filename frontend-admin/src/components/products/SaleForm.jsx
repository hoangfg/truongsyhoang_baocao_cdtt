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
import CustomForm from "./CustomForm";

class SaleForm extends Component {
  form = React.createRef();
  render() {
    const { book } = this.props;

    return (
      // <CustomForm>
        <Row>
          <Col md={12}>
            <Form.Item
              label="Begin Sale"
              name="beginSale"
              initialValue={book.beginSale}
              labelCol={{ span: 24 }}
            >
              <DatePicker></DatePicker>
            </Form.Item>
            <Form.Item
              label="End Sale"
              name="endSale"
              initialValue={book.endSale}
              labelCol={{ span: 24 }}
            >
              <DatePicker></DatePicker>
            </Form.Item>
          </Col>
          <Col md={1}>
            <Divider type="vertical" style={{ height: "100%" }}></Divider>
          </Col>
          <Col md={11}>
            <Form.Item
              label="Price Sale"
              name="priceSale"
              initialValue={book.priceSale}
              labelCol={{ span: 24 }}
              // wrapperCol={{ span: 24 }}
            >
              <Input></Input>
            </Form.Item>
          </Col>
        </Row>
      // </CustomForm>
    );
  }
}

export default SaleForm;
