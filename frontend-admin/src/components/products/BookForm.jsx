import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  Button,
  Col,
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
import bookService from "../../services/bookService";

class BookForm extends Component {
  form = React.createRef();
  handleRemoveImage = (params) => {
    if (params.fileName) {
      this.props.handleRemoveImage(params);
    } else if (params.response && params.response.fileName) {
      this.props.handleRemoveImage(params.response.fileName);
    }
  };
  updateBookImages = (fileList) => {
    this.setState({ bookImages: fileList });
  };

  normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length > 1) {
      return [e.fileList[1]];
    }
    return e && e.fileList;
  };
  render() {
    const { book } = this.props;

    const handlePriceChange = (value) => {
      const price = parseFloat(value);

      if (!isNaN(price) && price > 0) {
      }
    };

    return (
      // <CustomForm>
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
            hasFeedback
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            initialValue={book.price}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập giá bán.",
              },
              {
                type: "number",
                min: 1,
                message: "Giá bán phải là một số dương lớn hơn 0.",
              },
            ]}
            hasFeedback
          >
            <InputNumber style={{ width: "100%" }} />
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
            initialValue={book.status === 0 ? "0" : "1"}
            rules={[
              {
                required: true,
                message: "Vui lòng chọn.",
              },
            ]}
            hasFeedback
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
            initialValue={
              book.image
                ? [
                    {
                      ...book.image,
                      url: bookService.getPhotoUrl(book.image.fileName),
                    },
                  ]
                : []
            }
            rules={[
              {
                required: true,
                message: "Vui lòng chọn.",
              },
            ]}
            hasFeedback
            valuePropName="fileList"
            getValueFromEvent={this.normFile}
          >
            <Upload
              listType="picture-card"
              accept=".jpg, .png, .gif, .webp"
              maxCount={1}
              onRemove={this.handleRemoveImage}
              action={bookService.getImageUploadURL()}
              onChange={this.props.updateBookImages}
            >
              <AiOutlineCloudUpload />
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      // </CustomForm>
    );
  }
}

export default BookForm;
