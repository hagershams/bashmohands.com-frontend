import "./Header.css";
// import { useState } from "react";
import { Link, useNavigation, useLocation } from "react-router-dom";
import { useEffect } from "react";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { Layout, Menu, ConfigProvider, Row, Col, Button } from "antd";
const { Header } = Layout;

const MainNav = () => {
  // Routing progress bar setup
  const navigation = useNavigation();
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    if (navigation.state === "idle") NProgress.done();
  }, [location, navigation.state]); // Watch for router location

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#fff",
            headerHeight: 100,
          },
          Menu: {
            activeBarHeight: 0,
            itemColor: "#17080E",
            itemSelectedColor: "#17080E",
          },
        },
      }}
    >
      <Header
        id="baseLayoutHeader"
        theme="light"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          alignItems: "center",
          boxShadow:
            "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
        }}
      >
        <Row>
          <Col span={8}>
            <div>
              <Link to="/">
                <img
                  alt="logo"
                  src="/bashmohands-logo.svg"
                  width="277"
                  height="auto"
                />
              </Link>
            </div>
          </Col>
          <Col span={8}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Menu.Item key="1">
                <Link to="/" style={{ fontSize: "16px" }}>
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/1" style={{ fontSize: "16px" }}>
                  User
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/1/account" style={{ fontSize: "16px" }}>
                  User Account
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              type="default"
              shape="round"
              size={"small"}
              style={{
                display: "flex",
                paddingLeft: "15px",
                gap: "5px",
                height: "46px",
                alignItems: "center",
                padding: "5px",
                paddingRight: "15px",
              }}
            >
              <img
                alt="avatar"
                src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
                width={35}
                height={35}
                style={{ borderRadius: "35px" }}
              />
              Mohamed Abduljalil
            </Button>
          </Col>
        </Row>
      </Header>
    </ConfigProvider>
  );
};

export default MainNav;
