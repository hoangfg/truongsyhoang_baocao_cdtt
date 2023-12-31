import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Divider, Modal, Skeleton, Space, Switch, Table } from "antd";
import Column from "antd/es/table/Column";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

export default class LanguageList extends Component {
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

        <Column title="Code" key="code" dataIndex="code" align="center"></Column>
        <Column title="Tên" key="name" dataIndex="name" align="center"></Column>
        
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
