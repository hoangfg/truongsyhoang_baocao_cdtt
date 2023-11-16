import { MdSettingsBackupRestore } from "react-icons/md";
import { BiShowAlt } from "react-icons/bi";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Divider, Modal, Skeleton, Space, Switch, Table } from "antd";
import Column from "antd/es/table/Column";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Image } from "antd/lib";
import userService from "../../services/userService";
import { Link } from "react-router-dom";
export default class CustomerList extends Component {
  render() {
    const {
      dataSource,
      onEdit,
      onDeleteConfirm,
      onDelete,
      handleStatusChange,
      onShow,
      onRestore,
      type,
    } = this.props;
    console.log(dataSource);
    return (
      <Table
        className="content-panel_table"
        dataSource={dataSource}
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
                src={userService.getPhotoUrl(record.image)}
              ></Image>
            </Space>
          )}
        ></Column>
        <Column title="Tên" key="name" dataIndex="name" align="center"></Column>
        {type !== "trash" && (
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
        )}

        <Column
          title="Chức năng"
          key="action"
          dataIndex="status"
          width={200}
          align="center"
          render={(_, record) => (
            <Space size="middle">
              <Link to={`/users/show/${record.id}`}>
                <Button
                  key={record.key}
                  type="link"
                  style={{ marginRight: "8px" }}
                  // onClick={() => onShow(record)}
                >
                  {/* <BiEdit type="primary" align="center" /> */}
                  <BiShowAlt type="success" align="center" />
                </Button>
              </Link>
              {type === "trash" ? (
                <>
                  <Button
                    key={record.key}
                    type="primary"
                    style={{ marginRight: "8px" }}
                    onClick={() => onRestore(record)}
                  >
                    {/* Add an onRestore method for restoring from trash */}
                    <MdSettingsBackupRestore type="primary" align="center" />
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
                </>
              ) : (
                <>
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
                    onClick={() => onDelete(record)}
                  >
                    <RiDeleteBin2Line align="center" />
                  </Button>
                </>
              )}
            </Space>
          )}
        ></Column>
      </Table>
    );
  }
}
