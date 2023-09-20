import { MdOutlineEmojiPeople } from "react-icons/md";
import "./DashboardPage.css";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Row, Col, Avatar, message } from "antd";
import { TbBrandAirtable } from "react-icons/tb";
import { IoLanguageSharp } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./../components/home/Home";
import Index from "./../components/publisher/Index";
import AddOrEdit from "./../components/publisher/AddOrEdit";
import { useDispatch, useSelector } from "react-redux";

import { setError, setMessage } from "./../redux/actions/commonAction";
import { commonReducer } from "./../redux/reducers/commonReducer";
import ListAuthor from "../components/author/ListAuthor";
import AuthorForm from "../components/author/AuthorForm";

const { Header, Sider, Content } = Layout;

function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const msg = useSelector((state) => state.commonReducer.message);
  const err = useSelector((state) => state.commonReducer.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (msg) {
      dispatch(setMessage(""));
      message.success(msg);
    }
    if (err) {
      dispatch(setError(""));
      message.error(err);
    }
  }, [msg, err, dispatch]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ overflow: "auto" }}
      >
        <div className="logo">
          <h2>{collapsed ? "HF" : "HoangFG"}</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <TbBrandAirtable />,
              label: "Publisher",
              children: [
                {
                  key: "21",
                  icon: <BsListTask />,
                  label: "List",
                  onClick: () => navigate("/publishers"),
                },
                {
                  key: "22",
                  icon: <MdOutlineCreateNewFolder />,
                  label: "Add",
                  onClick: () => navigate("/publishers/add"),
                },
              ],
            },
            {
              key: "3",
              icon: <MdOutlineEmojiPeople />,
              label: "Author",
              children: [
                {
                  key: "31",
                  icon: <BsListTask />,
                  label: "List",
                  onClick: () => navigate("/authors"),
                },
                {
                  key: "32",
                  icon: <MdOutlineCreateNewFolder />,
                  label: "Add",
                  onClick: () => navigate("/author/add"),
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row>
            <Col md={18}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>

            <Col md={6}>
              <div className="avatar-user_header">
                <Avatar
                  className="user-img"
                  size={"default"}
                  icon={<UserOutlined />}
                ></Avatar>
                <span className="user-name">AdminHFG</span>
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className="content-panel">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/publishers" element={<Index />}></Route>
              <Route
                path="/publishers/add"
                element={<AddOrEdit key="a" />}
              ></Route>
              <Route
                path="/publishers/update/:id"
                element={<AddOrEdit key="u" />}
              ></Route>
              <Route path="/authors" element={<ListAuthor />}></Route>
              <Route
                path="/author/add"
                element={<AuthorForm key="a" />}
              ></Route>
              <Route
                path="/author/update/:id"
                element={<AuthorForm key="u" />}
              ></Route>
            </Routes>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;
