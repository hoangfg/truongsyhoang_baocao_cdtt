import { AiOutlineAppstoreAdd } from "react-icons/ai";
import React, { Component } from "react";
import { AiOutlineFolderView } from "react-icons/ai";
import PropTypes from "prop-types";
import {
  Button,
  Divider,
  Input,
  Modal,
  Skeleton,
  Space,
  Switch,
  Table,
  Tooltip,
} from "antd";

import Column from "antd/es/table/Column";
import { BiEdit, BiShowAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Image } from "antd/lib";
import bookService from "../../services/bookService";
import withRouter from "../../helpers/withRouter";
import { Link } from "react-router-dom";
import { MdSettingsBackupRestore } from "react-icons/md";
class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: [],
      isSearching: false,
    };
  }
  onSearch = (value) => {
    const { books } = this.props;
    if (value != null && value !== "") {
      const filteredResults = books.filter((book) => {
        return book.name.toLowerCase().includes(value.toLowerCase());
      });

      this.setState({ filteredBooks: filteredResults, isSearching: true });
    } else {
      this.setState({ filteredBooks: [], isSearching: false });
    }
  };

  render() {
    const {
      books,
      navigate,
      openDeleteConfirmModal,
      handleStatusChange,
      onEdit,
      onStore,
      openStoreForm,
      onRestore,
      type,
      onDelete,
    } = this.props;

    const { filteredBooks, isSearching } = this.state;
    console.log(books);
    return (
      <>
        <Input.Search
          placeholder="Tìm kiếm..."
          onSearch={this.onSearch}
          style={{ width: 200, margin: "1rem", float: "right" }}
        />
        <Table
          className="content-panel_table"
          dataSource={isSearching ? filteredBooks : books}
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
            sorter={(a, b) => a.name.localeCompare(b.name)}
          ></Column>
          <Column
            title="Số lượng"
            key="quanlity"
            dataIndex="quanlity"
            width={80}
            align="center"
            sorter={(a, b) => b.quanlity - a.quanlity}
          ></Column>
          <Column
            width={50}
            title="Giá"
            key="price"
            dataIndex="price"
            align="center"
            sorter={(a, b) => b.price - a.price}
          ></Column>

          {type !== "trash" && (
            <Column
              title="Trạng thái"
              key="status"
              dataIndex="status"
              width={150}
              align="center"
              filters={[
                { text: "Đã kích hoạt", value: 0 },
                { text: "Chưa kích hoạt", value: 1 },
              ]}
              onFilter={(value, record) => record.status === value}
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
            width={150}
            align="center"
            render={(_, record) => (
              <Space>
                <Link to={`/product/show/${record.id}`}>
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
                <Tooltip placement="top" title="Add store">
                  <Button
                    key={record.key}
                    type="link"
                    style={{ marginRight: "8px" }}
                    onClick={() => openStoreForm(record.id)}
                  >
                    <AiOutlineAppstoreAdd
                      size="middle"
                      color="green"
                      type="primary"
                      align="center"
                    />
                  </Button>
                </Tooltip>
                {type !== "trash" ? (
                  <>
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
                        onClick={() => onDelete(record)}
                      >
                        <RiDeleteBin2Line
                          size="middle"
                          align="center"
                          color="red"
                        />
                      </Button>
                    </Tooltip>
                  </>
                ) : (
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
                      onClick={() => openDeleteConfirmModal(record)}
                    >
                      <RiDeleteBin2Line align="center" />
                    </Button>
                  </>
                )}
              </Space>
            )}
          ></Column>
        </Table>
      </>
    );
  }
}
export default BookList;
