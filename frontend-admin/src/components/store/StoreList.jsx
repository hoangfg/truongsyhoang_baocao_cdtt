import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Divider, Modal, Skeleton, Space, Switch, Table } from "antd";
import Column from "antd/es/table/Column";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

export default class StoreList extends Component {
  render() {
    const { dataSource, onEdit, onDeleteConfirm } = this.props;
    return (
      <Table
        className="content-panel_table"
        dataSource={dataSource}
        size="small"
        rowKey="id"
        pagination={{ pageSize: 8 }}
      >
        <Column
          title="ID"
          key="Id"
          dataIndex="id"
          width={50}
          align="center"
        ></Column>

        <Column
          title="bookName"
          key="bookName"
          dataIndex="bookName"
          align="center"
        ></Column>
        <Column
          title="typeName"
          key="typeName"
          dataIndex="typeName"
          align="center"
        ></Column>
        <Column
          title="Quanlity"
          key="quanlity"
          dataIndex="quanlity"
          align="center"
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
              {/* <Button
                // loading={isLoading}
                key={record.key}
                type="primary"
                danger
                onClick={() => onDeleteConfirm(record)}
              >
                <RiDeleteBin2Line align="center" />
              </Button> */}
            </Space>
          )}
        ></Column>
      </Table>
    );
  }
}
