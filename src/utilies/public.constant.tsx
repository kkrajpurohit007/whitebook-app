import Navlink from "../components/navlink";
import {
  DashboardOutlined,
  HomeOutlined,
  TagsOutlined,
} from "@ant-design/icons";

export const NAV_LINKS = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Navlink to="/" label="Home" />,
  },
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: <Navlink to="/dashboard" label="Dashboard" />,
  },
  {
    key: "/task-list",
    icon: <TagsOutlined />,
    label: <Navlink to="/task-list" label="Task List" />,
  },
];
