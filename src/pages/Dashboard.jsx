import SummaryCards from "../components/dashboard/SummaryCards";
import OccupancyChart from "../components/dashboard/OccupancyChart";
import DemographicsDonut from "../components/dashboard/DemographicsDonut";
import DemographicsTimeline from "../components/dashboard/DemographicsTimeline";

const Dashboard = () => {
  return (
    <>
      <h2 style={{ marginBottom: "16px" }}>Overview</h2>

      <SummaryCards />

      <OccupancyChart />

      <h3 style={{ marginBottom: "12px" }}>Demographics</h3>

      <div className="demographics-section">
        <DemographicsDonut />
        <DemographicsTimeline />
      </div>
    </>
  );
};

export default Dashboard;
