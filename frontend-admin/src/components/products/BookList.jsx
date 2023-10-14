import { AiOutlineFolderView } from "react-icons/ai";
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Divider,
  Modal,
  Skeleton,
  Space,
  Switch,
  Table,
  Tooltip,
} from "antd";
import Column from "antd/es/table/Column";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Image } from "antd/lib";
import bookService from "../../services/bookService";
import withRouter from "../../helpers/withRouter";
class BookList extends Component {
  render() {
    const {
      books,
      navigate,
      openDeleteConfirmModal,
      handleStatusChange,
      onEdit,
      onStore,
      openStoreForm,
    } = this.props;
    // console.log(books);
    return (
      <Table
        className="content-panel_table"
        dataSource={books}
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
          title="Hình"
          key="imageFileName"
          dataIndex="image"
          width={100}
          align="center"
          render={(_, record) => (
            <Space>
              <Image
                height="50px"
                src={bookService.getPhotoUrl(record.imageFileName)}
              ></Image>
            </Space>
          )}
        ></Column>
        <Column
          title="Tên"
          key="name"
          dataIndex="name"
          align="center"
          width={150}
        ></Column>
        <Column
          title="Số lượng"
          key="quanlity"
          dataIndex="quanlity"
          width={80}
          align="center"
        ></Column>
        <Column
          width={50}
          title="Giá"
          key="price"
          dataIndex="price"
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
            <Space>
              <Tooltip placement="top" title="Add store">
                <Button
                  key={record.key}
                  type="link"
                  style={{ marginRight: "8px" }}
                  onClick={() => openStoreForm(record.id)}
                >
                  <AiOutlineFolderView
                    size="middle"
                    color="green"
                    type="primary"
                    align="center"
                  />
                </Button>
              </Tooltip>
              <Tooltip placement="top" title="Edit">
                <Button
                  key={record.key}
                  type="link"
                  style={{ marginRight: "8px" }}
                  onClick={() => onEdit(record)}
                >
                  <BiEdit
                    size="middle"
                    color="blue"
                    type="primary"
                    align="center"
                  />
                </Button>
              </Tooltip>
              <Tooltip placement="top" title="delete">
                <Button
                  // loading={isLoading}
                  key={record.key}
                  type="link"
                  danger
                  onClick={() => openDeleteConfirmModal(record)}
                >
                  <RiDeleteBin2Line size="middle" align="center" color="red" />
                </Button>
              </Tooltip>
            </Space>
          )}
        ></Column>
      </Table>
    );
  }
}
export default BookList;
