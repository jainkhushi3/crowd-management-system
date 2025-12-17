import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { Outlet } from "react-router-dom";
import "./layout.css";

const MainLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-section">
        <TopNavbar />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
