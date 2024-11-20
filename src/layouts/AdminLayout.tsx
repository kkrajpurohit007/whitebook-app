import { Layout, Menu } from "antd";

const { Header, Sider, Content, Footer } = Layout;

const AdminLayout = ({ children }: any) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div
          className="logo"
          style={{ color: "white", padding: "20px", fontWeight: "bold" }}
        >
          Admin Panel
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Users</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
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
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Admin Panel ©2024 Created with Ant Design
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
