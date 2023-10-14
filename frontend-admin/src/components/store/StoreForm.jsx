import { FcAddImage } from "react-icons/fc";
import React, { Component, createRef } from "react";

import {
  Input,
  Modal,
  Form,
  Select,
  Col,
  Divider,
  Row,
  InputNumber,
  DatePicker,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";

class StoreForm extends Component {
  form = createRef();
  constructor(props) {
    super(props);

    this.state = {
      store: {},
    };
  }

  form = React.createRef();
  render() {
    const { open, onCreate, onCancel, store, productId, onEdit } = this.props;
    let beginSaleDate;
    let endSaleDate;

    console.log("pr", store);

    if (moment(store.beginSale, "YYYY-MM-DD").isValid()) {
      beginSaleDate = moment(store.beginSale, "YYYY-MM-DD");
    }
    if (moment(store.endSale, "YYYY-MM-DD").isValid()) {
      endSaleDate = moment(store.endSale, "YYYY-MM-DD");
    }

    return (
      <Modal
        open={open}
        title={<span style={{ fontSize: "20px" }}>Nhập sản phẩm</span>}
        okText="Lưu"
        cancelText="Thoát"
        onCancel={onCancel}
        onOk={() => {
          this.form.current
            .validateFields()
            .then((values) => {
              this.form.current.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        style={{
          position: "absolute",

          left: 0,
          right: 0,
          minWidth: "50vw",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Form
          ref={this.form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: "public" }}
          key={"f" + store.id}
        >
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Col md={24}>
              <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={store.id}
                // hidden={book.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>
              <Form.Item
                label="ID"
                name="bookId"
                labelCol={{ span: 24 }}
                initialValue={store.id}
                // hidden={book.id ? false : true}
                hidden
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col xs={24} md={11}>
              {/* <Form.Item
                label="ID"
                name="id"
                labelCol={{ span: 24 }}
                initialValue={book.id}
                hidden={book.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item> */}
              <Form.Item
                label="Tên"
                name="typeName"
                initialValue={store.typeName}
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
                label="Entry Price "
                name="entryPrice"
                initialValue={store.entryPrice}
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
                initialValue={store.quanlity}
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
              <Divider></Divider>

              {/* {!book.id && (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                >
                  Lưu
                </Button>
              )}
              {book.id && (
                <Button
                  htmlType="button"
                  type="primary"
                  style={{ float: "right" }}
                  // loading={isLoading}
                  onClick={this.openUpdateConfirmModal}
                >
                  Cập nhật
                </Button> */}
              {/* )} */}
            </Col>
            <Col md={1}>
              <Divider type="vertical" style={{ height: "100%" }}></Divider>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Begin Sale"
                name="beginSale"
                initialValue={beginSaleDate}
                labelCol={{ span: 24 }}
              >
                <DatePicker></DatePicker>
              </Form.Item>
              <Form.Item
                label="End Sale"
                name="endSale"
                initialValue={endSaleDate}
                labelCol={{ span: 24 }}
              >
                <DatePicker></DatePicker>
              </Form.Item>
              <Form.Item
                label="Price Sale"
                name="priceSale"
                initialValue={store.priceSale}
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
              >
                <Input></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default StoreForm;
