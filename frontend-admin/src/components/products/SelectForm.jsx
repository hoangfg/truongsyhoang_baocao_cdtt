import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Col, Divider, Form, Input, Row, Select, Upload } from "antd";
import React, { Component } from "react";

class SelectForm extends Component {
  form = React.createRef();
  render() {
    const { book } = this.props;
    const handlePriceChange = (value) => {
      const price = parseFloat(value);

      if (!isNaN(price) && price > 0) {
      }
    };
    return (
      <Form layout="vertical" className="form" size="middle" ref={this.form}>
        <Row>
          <Col md={12}>
            <Form.Item
              label="publisher"
              name="publisherId"
              labelCol={{ span: 24 }}
              initialValue={book.publisherId}
            >
              <Select placeholder="Chọn nhà xuất bản">
                <Select.Option value="0">Còn hàng</Select.Option>
                <Select.Option value="1">Hết hàng</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="language"
              name="languageId"
              labelCol={{ span: 24 }}
              initialValue={book.languageId}
            >
              <Select placeholder="Chọn ngôn ngữ">
                <Select.Option value="0">Còn hàng</Select.Option>
                <Select.Option value="1">Hết hàng</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="genres"
              name="genresId"
              labelCol={{ span: 24 }}
              initialValue={book.genresId}
            >
              <Select placeholder="Chọn thể loại">
                <Select.Option value="0">Còn hàng</Select.Option>
                <Select.Option value="1">Hết hàng</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="author"
              name="authorId"
              labelCol={{ span: 24 }}
              initialValue={book.authorId}
            >
              <Select placeholder="Chọn tác giả">
                <Select.Option value="0">Còn hàng</Select.Option>
                <Select.Option value="1">Hết hàng</Select.Option>
              </Select>
            </Form.Item>
            
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SelectForm;
