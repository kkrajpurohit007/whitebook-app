import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (values: any) => {
    message.success("Registration successful!");
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Registration failed. Please check your inputs.");
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
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <Form name="register" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          Already have an account? <Link to="/login">Login here</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
