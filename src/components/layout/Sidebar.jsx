import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiLogOut } from "react-icons/fi";
import "./layout.css";
import socketService from "../../services/socket.service";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    socketService.disconnect();
    navigate("/", { replace: true });
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-top">
        <div className="logo">
          <span className="logo-icon">◎</span>
          <span className="logo-text">kloudspot</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        <NavLink
          to="/dashboard"
          className="menu-item"
          onClick={() => setSidebarOpen(false)}
        >
          Overview
        </NavLink>

        <NavLink
          to="/entries"
          className="menu-item"
          onClick={() => setSidebarOpen(false)}
        >
          Crowd Entries
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
