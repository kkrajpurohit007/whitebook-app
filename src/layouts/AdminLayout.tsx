const AdminLayout = ({ children }: any) => {
  return (
    <div>
      <aside>
        <nav>
          <ul>
            <li>Admin Dashboard</li>
            <li>Settings</li>
            <li>Profile</li>
          </ul>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
