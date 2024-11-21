import Navlink from "../components/navlink";
import {
  DashboardOutlined,
  ProfileOutlined,
  SettingOutlined,
  ToolOutlined,
} from "@ant-design/icons";

export const ADMIN_NAV_LINKS = [
  {
    key: "/admin",
    icon: <DashboardOutlined />,
    label: <Navlink to="/admin" label="Dashboard" />,
  },
  {
    key: "/admin/todo",
    icon: <ToolOutlined />,
    label: <Navlink to="/admin/todo" label="To-Do" />,
  },
  {
    key: "/admin/profile",
    icon: <ProfileOutlined />,
    label: <Navlink to="/admin/profile" label="Profile" />,
  },
  {
    key: "/admin/setting",
    icon: <SettingOutlined />,
    label: <Navlink to="/admin/setting" label="Setting" />,
  },
];
