import React, { useState } from "react";

import { getById } from "../../redux/actions/orderAction";
import { useParams } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import { connect } from "react-redux";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Skeleton,
  Table,
  message,
} from "antd";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import Column from "antd/es/table/Column";
import bookService from "../../services/bookService";

function OrderDetail({ order, getById, isLoading }) {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    getById(id);
    const fetchOrderTail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/orderdetail/${id}`,
          {
            responseType: "json",
          }
        );

        const data = response.data;

        setOrderDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrderTail();
  }, [id]);
  const handleStatusChange = (newStatus) => {
    axios
      .put(`http://localhost:8080/api/orders/${id}/updateStatus/${newStatus}`)
      .then((response) => {
        message.success("Status updated successfully");
        console.log(response.data);

        // Reload the page after a brief delay
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        message.error("Failed to update status");
        console.error(error);
      });
  };
  console.log("order", orderDetails);
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Card>
      <Form
        layout="vertical"
        initialValues={{ modifier: "public" }}
        key={"f" + order.id + order.name}
      >
        <Row>
          <Col span={4}>
            <Form.Item
              label="ID"
              name="id"
              labelCol={{ span: 24 }}
              initialValue={order.id}
              hidden={order.id ? false : true}
            >
              <Input readOnly></Input>
            </Form.Item>

            <Form.Item
              label="name"
              name="name"
              labelCol={{ span: 24 }}
              initialValue={order.name}
              hidden={order.id ? false : true}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="email"
              name="email"
              labelCol={{ span: 24 }}
              initialValue={order.email}
              hidden={order.id ? false : true}
            >
              <Input readOnly></Input>
            </Form.Item>
            <Form.Item
              label="phone"
              name="phone"
              labelCol={{ span: 24 }}
              initialValue={order.phone}
              hidden={order.id ? false : true}
            >
              <Input readOnly></Input>
            </Form.Item>
            <Form.Item
              label="address"
              name="address"
              labelCol={{ span: 24 }}
              initialValue={order.address}
              hidden={order.id ? false : true}
            >
              <Input readOnly></Input>
            </Form.Item>
            <Form.Item
              label="node"
              name="node"
              labelCol={{ span: 24 }}
              initialValue={order.node}
              hidden={order.id ? false : true}
            >
              <Input readOnly></Input>
            </Form.Item>
          </Col>
          <Col span={19} offset={1}>
            <div className=" d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleStatusChange(0)}
              >
                {order.status === 0 && <AiOutlineCheckCircle />} Đơn mới
              </button>
              <button
                // onClick={() => handleStatusChange(1)}
                type="button"
                className="btn btn-info "
                style={{ color: "white" }}
              >
                {order.status === 1 && <AiOutlineCheckCircle />} Xác nhận
              </button>
              <button
                onClick={() => handleStatusChange(2)}
                type="button"
                className="btn btn-warning"
                style={{ color: "white" }}
              >
                {order.status === 2 && <AiOutlineCheckCircle />} Vận chuyển
              </button>
              <button
                onClick={() => handleStatusChange(3)}
                type="button"
                className="btn  btn-success"
              >
                {order.status === 3 && <AiOutlineCheckCircle />} Hoàn thành
              </button>
              <button
                onClick={() => handleStatusChange(4)}
                type="button"
                className="btn btn-danger"
              >
                {order.status === 4 && <AiOutlineCheckCircle />} Hủy
              </button>
            </div>
            <Divider></Divider>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>product image</th>
                  <th>product name</th>
                  <th>Quanlity</th>
                  <th>Price</th>
                  <th>Total Money</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.map((detail) => (
                  <tr key={detail.id}>
                    <td>{detail.id}</td>
                    <td>
                      <Image
                        height="50px"
                        src={bookService.getPhotoUrl(
                          detail.book.image.FileName
                        )}
                      ></Image>
                    </td>
                    <td>{detail.book.name}</td>
                    <td>{detail.qty}</td>
                    <td>{detail.price}</td>
                    <td>{detail.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  order: state.orderReducer.order,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getById,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrderDetail));
