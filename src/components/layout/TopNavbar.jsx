import { FiBell, FiUser } from "react-icons/fi";
import "./layout.css";

const TopNavbar = () => {
  return (
    <header className="top-navbar">
      <div className="navbar-left">
        <h3>Crowd Solutions</h3>

        <div className="location-box">
          Avenue Mall
        </div>
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
