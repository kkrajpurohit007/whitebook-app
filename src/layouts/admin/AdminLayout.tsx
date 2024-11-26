import { Layout, Menu } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { ADMIN_NAV_LINKS } from "../../utilies/admin.constant";
const { Header, Sider, Content, Footer } = Layout;
import { BookFilled } from "@ant-design/icons";

const AdminLayout = () => {
  const location = useLocation();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div
          className="logo"
          style={{ color: "white", padding: "20px", fontWeight: "bold" }}
        >
          <BookFilled /> WhiteBook
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={ADMIN_NAV_LINKS}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Admin Header
        </Header>
        <Content
          style={{ margin: "20px", background: "#fff", padding: "20px" }}
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Admin Panel ©2024 Created with Ant Design
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
