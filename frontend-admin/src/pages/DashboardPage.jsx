import { BsFillSignpostSplitFill } from "react-icons/bs";
import { MdTopic } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineAlipay } from "react-icons/ai";
import { IoLanguageOutline } from "react-icons/io";
import { GiRegeneration } from "react-icons/gi";
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

import { BsListTask } from "react-icons/bs";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
// import Home from "./../components/layout/Home";
import Index from "./../components/publisher/Index";
import AddOrEdit from "./../components/publisher/AddOrEdit";
import { useDispatch, useSelector } from "react-redux";

import { setError, setMessage } from "./../redux/actions/commonAction";
import { commonReducer } from "./../redux/reducers/commonReducer";
import ListAuthor from "../components/author/ListAuthor";
import AuthorForm from "../components/author/AuthorForm";
import ListGenres from "../components/bookgenres/ListGenres";
import ListLanguage from "../components/booklanguage/ListLanguage";
import UploadImage from "../components/products/UploadImage";
import AddOrEditBook from "../components/products/AddOrEditBook";
import ListBook from "../components/products/ListBook";
import ListTopic from "../components/topic/ListTopic";
import ListPost from "../components/post/ListPost";
import ListPage from "../components/page/ListPage";
import ListConfig from "../components/config/ListConfig";
import ListSlider from "../components/slider/ListSlider";
import Home from "../components/home/Home";
import ListStore from "../components/store/ListStore";
import MenuList from "../components/menu/MenuList";
import ListMenu from "../components/menu/ListMenu";
// import Home from './../../../../../java-project/frontend-site/src/layouts/Home';

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
    <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
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
              ],
            },
            {
              key: "4",
              icon: <GiRegeneration />,
              label: "Genres",
              children: [
                {
                  key: "41",
                  icon: <BsListTask />,
                  label: "List",
                  onClick: () => navigate("/genres"),
                },
              ],
            },
            {
              key: "5",
              icon: <AiOutlineAlipay />,
              label: "Language",
              children: [
                {
                  key: "51",
                  icon: <BsListTask />,
                  label: "List",
                  onClick: () => navigate("/language"),
                },
              ],
            },
            {
              key: "6",
              icon: <GiBookshelf />,
              label: "Product",
              children: [
                // {
                //   key: "61",
                //   icon: <AiOutlineCloudUpload />,
                //   label: "Upload Images",
                //   onClick: () => navigate("/product/upload"),
                // },
                {
                  key: "62",
                  icon: <BsListTask />,
                  label: "Add Book",
                  onClick: () => navigate("/product/add"),
                },
                {
                  key: "63",
                  icon: <BsListTask />,
                  label: "List",
                  onClick: () => navigate("/product"),
                },
              ],
            },
            {
              key: "6a",
              icon: <AiOutlineAlipay />,
              label: "Store",
              children: [
                {
                  key: "6a1",
                  icon: <BsListTask />,
                  label: "List",
                  onClick: () => navigate("/store"),
                },
              ],
            },
            {
              key: "7",
              icon: <ImNewspaper />,
              label: "Topic",
              children: [
                // {
                //   key: "61",
                //   icon: <AiOutlineCloudUpload />,
                //   label: "Upload Images",
                //   onClick: () => navigate("/product/upload"),
                // },
                {
                  key: "71",
                  icon: <MdTopic />,
                  label: "Topic",
                  onClick: () => navigate("/topic"),
                },
                {
                  key: "72",
                  icon: <BsFillSignpostSplitFill />,
                  label: "Post",
                  onClick: () => navigate("/post"),
                },
                {
                  key: "73",
                  icon: <BsFillSignpostSplitFill />,
                  label: "Page",
                  onClick: () => navigate("/page"),
                },
              ],
            },
            {
              key: "8",
              icon: <ImNewspaper />,
              label: "Config",
              children: [
                {
                  key: "81",
                  icon: <BsListTask />,
                  label: "List",
                  onClick: () => navigate("/config"),
                },
              ],
            },
            {
              key: "9",
              icon: <AiOutlineAlipay />,
              label: "Slider",
              children: [
                {
                  key: "91",
                  icon: <BsListTask />,
                  label: "List",
                  onClick: () => navigate("/slider"),
                },
              ],
            },
            {
              key: "10a",
              icon: <AiOutlineAlipay />,
              label: "menu",
              children: [
                {
                  key: "10a1",
                  icon: <BsListTask />,
                  label: "List",
                  onClick: () => navigate("/menu"),
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
              {/* <Route
                path="/author/add"
                element={<AuthorForm key="a" />}
              ></Route>
              <Route
                path="/author/update/:id"
                element={<AuthorForm key="u" />}
              ></Route> */}
              <Route path="/genres" element={<ListGenres />}></Route>
              <Route path="/language" element={<ListLanguage />}></Route>
              {/* <Route path="/product/upload" element={<UploadImage />}></Route> */}
              <Route
                path="/product/add"
                element={<AddOrEditBook key="a" />}
              ></Route>
              <Route path="/product" element={<ListBook />}></Route>
              <Route
                path="/product/update/:id"
                element={<AddOrEditBook key="u" />}
              />
              <Route path="/topic" element={<ListTopic />}></Route>
              <Route path="/post" element={<ListPost />}></Route>
              <Route path="/page" element={<ListPage />}></Route>
              <Route path="/config" element={<ListConfig />}></Route>
              <Route path="/slider" element={<ListSlider />}></Route>
              <Route path="/store" element={<ListStore />}></Route>
              <Route path="/menu" element={<ListMenu />}></Route>
            </Routes>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;
