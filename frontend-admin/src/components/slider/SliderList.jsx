import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Divider,
  Image,
  Modal,
  Skeleton,
  Space,
  Switch,
  Table,
} from "antd";
import Column from "antd/es/table/Column";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import sliderService from "./../../services/sliderService";

export default class SliderList extends Component {
  render() {
    const { slider, onEdit, onDeleteConfirm, handleStatusChange } = this.props;
    console.log("slider", slider);
    return (
      <Table
        className="content-panel_table"
        dataSource={slider}
        size="small"
        rowKey="id"
        pagination={{ pageSize: 6 }}
        scroll={{ y: 396 }}
      >
        <Column
          title="ID"
          key="Id"
          dataIndex="id"
          width={50}
          align="center"
        ></Column>
        <Column
          title="image"
          key="image"
          dataIndex="image"
          width={100}
          align="center"
          render={(_, record) => (
            <Space>
              <Image
                height="50px"
                src={sliderService.getPhotoUrl(record.image)}
              ></Image>
            </Space>
          )}
        ></Column>
        <Column
          title="Tên"
          key="name"
          dataIndex="name"
          align="center"
        ></Column>
        <Column
          title="Trạng thái"
          key="status"
          dataIndex="status"
          width={150}
          align="center"
          render={(text, record) => (
            <Space size="middle">
              <Switch
                checked={record.status === 0}
                onChange={() => handleStatusChange(record)}
                // loading={isLoading}
              />
            </Space>
          )}
        ></Column>
        <Column
          title="Chức năng"
          key="action"
          dataIndex="status"
          width={150}
          align="center"
          render={(_, record) => (
            <Space size="middle">
              <Button
                key={record.key}
                type="primary"
                style={{ marginRight: "8px" }}
                onClick={() => onEdit(record)}
              >
                <BiEdit type="primary" align="center" />
              </Button>
              <Button
                // loading={isLoading}
                key={record.key}
                type="primary"
                danger
                onClick={() => onDeleteConfirm(record)}
              >
                <RiDeleteBin2Line align="center" />
              </Button>
            </Space>
          )}
        ></Column>
      </Table>
    );
  }
}
