import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Col, Divider, Form, Input, Row, Select, Upload } from "antd";
import React, { Component } from "react";

class BookForm extends Component {
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
              label="ID"
              name="id"
              labelCol={{ span: 24 }}
              initialValue={book.id}
              hidden={book.id ? false : true}
            >
              <Input readOnly></Input>
            </Form.Item>
            <Form.Item
              label="Tên"
              name="name"
              initialValue={book.name}
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
              label="Price"
              name="price"
              initialValue={book.price}
              labelCol={{ span: 24 }}
              // wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập giá bán.",
                },
                {
                  min: 1,
                  message: "Giá bán phải là một số dương lớn hơn 0.",
                },
              ]}
            >
              <Input onBlur={(e) => handlePriceChange(e.target.value)}></Input>
            </Form.Item>
          </Col>
          <Col md={1}>
            <Divider type="vertical" style={{ height: "100%" }}></Divider>
          </Col>
          <Col md={11}>
            <Form.Item
              label="Trạng thái"
              name="status"
              labelCol={{ span: 24 }}
              initialValue={book.status === 0 ? "1" : "0"}
            >
              <Select>
                <Select.Option value="0">Còn hàng</Select.Option>
                <Select.Option value="1">Hết hàng</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Main Image"
              name="image"
              labelCol={{ span: 24 }}
              initialValue={book.image ? [{ ...book.image }] : []}
            >
              <Upload
                listType="picture-card"
                accept=".jpg, .png, .gif, .webp"
                maxCount={1}
              >
                <AiOutlineCloudUpload size="middle" />
              </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default BookForm;
