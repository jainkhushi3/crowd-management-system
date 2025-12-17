import { FiBell, FiUser, FiMenu } from "react-icons/fi";
import "./layout.css";

const TopNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="top-navbar">
      <div className="navbar-left">
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu size={20} />
        </button>

        <h3>Crowd Solutions</h3>

        <div className="location-box">Avenue Mall</div>
      </div>

      <div className="navbar-right">
        <div className="lang-toggle">EN</div>
        <FiBell className="nav-icon" />
        <FiUser className="nav-icon" />
      </div>
    </header>
  );
};

export default TopNavbar;
