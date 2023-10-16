import React, { Component, createRef, useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  Form,
  Input,
  Mentions,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  message,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
import publisherService from "../../services/publisherService";
import authorService from "../../services/authorService";
import bookGenresService from "../../services/bookGenresService";
import bookLanguageService from "../../services/bookLanguageService";
import { Table } from "antd";
import Column from "antd/es/table/Column";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

const { Option } = Select;

class MenuList extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      menu: {
        name: "",
        link: "",
        position: "mainmenu",
        type: "",
        table_id: "",
      },
      position: "mainmenu",
      publisherList: [], // Thêm mảng publisherList vào state
      authorList: [], // Thêm mảng authorList vào state
      genresList: [], // Thêm mảng genresList vào state
      languageList: [],
      TopicList: [],
      PageList: [],
      selectedItems: [],
    };
  }
  onChange = (e) => {
    this.setState({
      position: e.target.value,
    });
  };

  genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );
  getNameAndSlugFromTableId = (table_id) => {
    const { publisherList } = this.props;
    const selectedPublisher = publisherList.find(
      (item) => item.id === table_id
    );
    if (selectedPublisher) {
      return {
        name: selectedPublisher.name,
        slug: selectedPublisher.slug,
      };
    }
    return { name: "", slug: "" };
  };
  onSubmitForm = (values) => {
    console.log("value", values);
    this.props.onCreate(values);
  };

  onCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const { selectedPublishers } = this.state;

    if (checked) {
      this.setState({ selectedPublishers: [...selectedPublishers, value] });
    } else {
      // Nếu checkbox bị hủy chọn, loại bỏ id khỏi mảng
      this.setState({
        selectedPublishers: selectedPublishers.filter((id) => id !== value),
      });
      console.log(selectedPublishers);
    }
  };

  render() {
    const { radio } = this.state;
    const {
      publisherList,
      authorList,
      genresList,
      languageList,
      PageList,
      TopicList,
      selectedItems,
      dataSoure,
      onCreate,
      onEdit,
      onDeleteConfirm,
      handleStatusChange,
    } = this.props;
    // console.log("publisherList:", publisherList);
    // console.log("authorList:", authorList);
    // console.log("genresList:", genresList);
    // console.log("languageList:", languageList);
    // console.log("PageList:", PageList);
    console.log("selectedItems:", dataSoure);

    const items = [
      {
        key: "1",
        label: "Vị trí",
        children: (
          <Radio.Group
            onChange={this.onChange}
            value={this.state.position}
            defaultValue="mainmenu"
          >
            <Space name="position" direction="vertical">
              <Radio value="mainmenu">Main Menu</Radio>
              <Radio value="footermenu">Footer Menu</Radio>
            </Space>
          </Radio.Group>
        ),
        extra: this.genExtra(),
      },
      {
        key: "2",
        label: "Nhà xuất bản",
        children: (
          <>
            <Form
              layout="vertical"
              className="form"
              onFinish={this.onSubmitForm}
              ref={this.props.formRef}
            >
              {publisherList &&
                publisherList.map((item) => (
                  <div>
                    <Form.Item name="table_id">
                      {console.log("name", item.name)}
                      <Radio.Group>
                        <Radio value={item.id}>{item.name}</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                ))}

              <Form.Item hidden name="type" initialValue="publisher">
                <Input type="hidden" />
              </Form.Item>
              <Form.Item
                hidden
                name="position"
                initialValue={this.state.position}
              ></Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        ),
        extra: this.genExtra(),
      },
      {
        key: "3",
        label: "Tác giả",
        children: (
          <>
            <Form
              layout="vertical"
              className="form"
              onFinish={this.onSubmitForm}
              ref={this.props.formRef}
            >
              {authorList &&
                authorList.map((item) => (
                  <>
                    <Form.Item name="table_id">
                      <Radio.Group>
                        <Radio value={item.id} key={"aut" + item.id}>
                          {item.name}
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                    {/* <Form.Item
                      hidden
                      name="name"
                      initialValue={item.name}
                    ></Form.Item>
                    <Form.Item
                      hidden
                      name="link"
                      initialValue={item.slug}
                    ></Form.Item> */}
                  </>
                ))}

              <Form.Item hidden name="type" initialValue="author"></Form.Item>
              <Form.Item
                hidden
                name="position"
                initialValue={this.state.position}
              ></Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        ),
        extra: this.genExtra(),
      },
      {
        key: "4",
        label: "Thể loại",
        children: (
          <>
            <Form
              layout="vertical"
              className="form"
              onFinish={this.onSubmitForm}
              ref={this.props.formRef}
            >
              {genresList &&
                genresList.map((item) => (
                  <>
                    <Form.Item name="table_id">
                      <Radio.Group>
                        <Radio value={item.id} key={"gen" + item.id}>
                          {item.name}
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </>
                ))}
              <Form.Item hidden name="type" initialValue="genre">
                <Input type="hidden" />
              </Form.Item>
              <Form.Item
                hidden
                name="position"
                initialValue={this.state.position}
              ></Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        ),
        extra: this.genExtra(),
      },
      {
        key: "5",
        label: "Ngôn ngữ",
        children: (
          <>
            <Form
              layout="vertical"
              className="form"
              onFinish={this.onSubmitForm}
              ref={this.props.formRef}
            >
              {languageList &&
                languageList.map((item) => (
                  <>
                    <Form.Item name="table_id">
                      <Radio.Group>
                        <Radio value={item.id} key={"lan" + item.id}>
                          {item.name}
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </>
                ))}
              <Form.Item hidden name="type" initialValue="language"></Form.Item>
              <Form.Item
                hidden
                name="position"
                initialValue={this.state.position}
              ></Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        ),
        extra: this.genExtra(),
      },
      {
        key: "6",
        label: "Trang đơn",
        children: (
          <>
            <Form
              layout="vertical"
              className="form"
              onFinish={this.onSubmitForm}
              ref={this.props.formRef}
            >
              {PageList &&
                PageList.map((item) => (
                  <>
                    <Form.Item name="table_id">
                      <Radio.Group>
                        <Radio value={item.id} key={"page" + item.id}>
                          {item.name}
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </>
                ))}
              <Form.Item hidden name="type" initialValue="page">
                <Input type="hidden" />
              </Form.Item>
              <Form.Item
                hidden
                name="position"
                initialValue={this.state.position}
              ></Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        ),
        extra: this.genExtra(),
      },
      {
        key: "7",
        label: "Thể loại bài viết",
        children: (
          <>
            <Form
              layout="vertical"
              className="form"
              onFinish={this.onSubmitForm}
              ref={this.props.formRef}
            >
              {TopicList &&
                TopicList.map((item) => (
                  <>
                    <Form.Item name="table_id">
                      <Radio.Group>
                        <Radio value={item.id} key={"top" + item.id}>
                          {item.name}
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </>
                ))}

              <Form.Item hidden name="type" initialValue="topic"></Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        ),
        extra: this.genExtra(),
      },
      {
        key: "8",
        label: "Tùy biến",
        children: (
          <>
            <Form
              layout="vertical"
              className="form"
              onFinish={this.onSubmitForm}
              ref={this.props.formRef}
            >
              <Form.Item
                name="name"
                label="Name"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
                }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="link"
                label="Link"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
                }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Mentions rows={3} />
              </Form.Item>
              <Form.Item
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
                }}
                name="type"
                label="Type"
                initialValue="custom"
              >
                <Input readOnly defaultValue="custom" />
              </Form.Item>
              <Form.Item hidden name="table_id" initialValue="0"></Form.Item>
              <Form.Item
                hidden
                name="position"
                initialValue={this.state.position}
              ></Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 14,
                  offset: 6,
                }}
              >
                <Space wrap>
                  <Button htmlType="submit" type="primary">
                    Submit
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </>
        ),
        extra: this.genExtra(),
      },
    ];

    return (
      <>
        <Row>
          <Col span={6}>
            <Collapse defaultActiveKey={["1"]} items={items} />
          </Col>
          <Col span={17} offset={1}>
            <Table
              className="content-panel_table"
              dataSource={dataSoure}
              size="small"
              rowKey="id"
              pagination={{ pageSize: 11 }}
              scroll={{ y: 396 }}
            >
              <Column
                title="ID"
                key="id"
                dataIndex="id"
                width={50}
                align="center"
                sorter={(a, b) => a.id.localeCompare(b.id)}
              />
              <Column
                title="Tên"
                key="name"
                dataIndex="name"
                align="center"
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
              <Column
                title="Link"
                key="link"
                dataIndex="link"
                align="center"
                sorter={(a, b) => a.link.localeCompare(b.link)}
              />

              <Column
                title="Loại"
                key="type"
                dataIndex="type"
                align="center"
                sorter={(a, b) => a.type.localeCompare(b.type)}
                filters={[
                  { text: "Publisher", value: "publisher" },
                  { text: "Author", value: "author" },
                  { text: "Genres", value: "genre" },
                  { text: "Topic", value: "topic" },
                  { text: "Page", value: "page" },
                  { text: "Custom", value: "custom" },
                ]}
                onFilter={(value, record) => record.type === value}
              />
              <Column
                title="Vị trí"
                key="position"
                dataIndex="position"
                align="center"
                sorter={(a, b) => a.position.localeCompare(b.position)}
                filters={[
                  { text: "Main menu", value: "mainmenu" },
                  { text: "Footer menu", value: "footermenu" },
                ]}
                onFilter={(value, record) => record.position === value}
              />
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
                    />
                  </Space>
                )}
              />
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
                      key={record.key}
                      type="primary"
                      danger
                      onClick={() => onDeleteConfirm(record)}
                    >
                      <RiDeleteBin2Line align="center" />
                    </Button>
                  </Space>
                )}
              />
            </Table>
          </Col>
        </Row>
      </>
    );
  }
}

export default MenuList;
