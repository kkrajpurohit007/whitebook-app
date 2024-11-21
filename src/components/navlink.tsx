import { NavLink } from "react-router-dom";

type NavlinkProps = {
  to: string;
  label: string;
};

const Navlink: React.FC<NavlinkProps> = ({ to, label }: any) => {
  // Determine if the current route matches the `to` prop

  //   const isActive = location.pathname === to;
  return (
    <NavLink to={to}>
      {/* <NavLink to={to} className={isActive ? "active-link" : "link"}></NavLink> */}
      {label}
    </NavLink>
  );
};

Navlink.propTypes = {};
export default Navlink;
