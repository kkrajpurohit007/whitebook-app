import { Form, Input, Button, Checkbox, message } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined, BookFilled } from "@ant-design/icons";

const Login = () => {
  const onFinish = (values: any) => {
    message.success("Login successful!");
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Login failed. Please try again.");
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10,
      }}
    >
      <div className="logo" style={{ color: "Blue", fontWeight: "bold" }}>
        <BookFilled /> WhiteBook
      </div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Login
          </Button>
        </Form.Item>
        <Form.Item>
          Don't have an account? <Link to="/registration">Register here</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
