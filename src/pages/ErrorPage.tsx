import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Oops! We can't seem to find the page you're looking for."
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Go Back to Homepage
        </Button>
      }
    />
  );
};

export default ErrorPage;
