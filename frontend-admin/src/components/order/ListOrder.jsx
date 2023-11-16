import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

import ContentHeader from "../common/ContentHeader";
import OrderList from "./OrderList";
import { Button, Col, Modal, Row, Skeleton } from "antd";
// import OrderForm from "./OrderForm";
import {
  insertOrder,
  getOrders,
  deleteById,
  updateOrder,
  statusOrder,
} from "./../../redux/actions/orderAction";
import { connect } from "react-redux";
import orderReducer from "./../../redux/reducers/orderReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";

class ListOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      order: {},
    };
  }
  componentDidMount = () => {
    this.props.getOrders();
  };
  // componentWillUnmount = () => {
  //   this.props.clearState();
  // };
  onCreate = (values) => {
    // console.log(values);
    if (values.id) {
      this.props.updateOrder(values);
    } else {
      this.props.insertOrder(values);
    }
    this.setState({ ...this.state, order: {}, open: false });
  };
  onEdit = (order) => {
    // this.setState({ ...this.state, order: values, open: true });
    const { navigate } = this.props.router;
    navigate("/order/edit/" + order.id);
  };

  onDeleteConfirm = (order) => {
    this.setState({ ...this.state, order: order });

    const message = "Bạn có muốn xóa tác giả: " + order.name + " không?";
    Modal.confirm({
      title: "Xóa bản ghi?",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteOrder,
      okText: "Xóa",
      cancelText: "Thoát",
      onCancel: this.onCancelModel,
    });
  };
  deleteOrder = () => {
    this.props.deleteById(this.state.order.id);
    this.setState({ ...this.state, order: {} });
  };
  onCancelModel = () => {
    this.setState({ ...this.state, order: {} });
  };
  handleStatusChange = async (record) => {
    this.props.statusOrder(record.id, {
      status: record.status === 0 ? 1 : 0,
    });
  };
  delete = async (record) => {
    this.props.statusOrder(record.id, { status: 2 });
  };
  restore = async (record) => {
    this.props.statusOrder(record.id, { status: 1 });
  };
  show = (order) => {
    const { navigate } = this.props.router;
    navigate("/orders/show/" + order.id);
  };
  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { orders, isLoading, type, title } = this.props;
    console.log(orders);
    // let filteredOrders = orders.filter((order) => order.status !== 2);

    // // If the type is "trash", filter orders with status === 2
    // if (type === "trash") {
    //   filteredOrders = orders.filter((order) => order.status === 2);
    // }
    if (isLoading) {
      return (
        <>
          <ContentHeader
            navigate={navigate}
            title="Danh sách nhà xuất bản"
            className="site-page_header"
          />
          <Skeleton />
        </>
      );
    }
    return (
      <>
        <div className="content-header">
          <Row type="flex" justify="space-between" align="middle">
            <Col span={12}>
              <ContentHeader
                navigate={navigate}
                title="Danh sách nhà xuất bản"
                className="site-page_header"
              />
            </Col>
            <Col md={12} style={{ textAlign: "right" }}>
              <Button
                type="primary"
                onClick={() => {
                  this.setState({ ...this.state, open: true });
                }}
              >
                Thêm tác giả
              </Button>
            </Col>
          </Row>
        </div>

        <OrderList
          dataSource={orders}
          onDeleteConfirm={this.onDeleteConfirm}
          onEdit={this.onEdit}
          handleStatusChange={this.handleStatusChange}
          type={type}
          onRestore={this.restore}
          onDelete={this.delete}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orderReducer.orders,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  insertOrder,
  getOrders,
  deleteById,
  updateOrder,
  statusOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListOrder));
