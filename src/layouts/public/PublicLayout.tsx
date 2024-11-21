import React from "react";
import "./PublicLayout.css";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../utilies/public.constant";
import { BookFilled } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

const PublicLayout: React.FC = () => {
  const location = useLocation();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="logo">
          {" "}
          <BookFilled /> WhiteBook
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          items={NAV_LINKS}
          style={{ display: "flex", justifyContent: "flex-end", flex: 2 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default PublicLayout;
