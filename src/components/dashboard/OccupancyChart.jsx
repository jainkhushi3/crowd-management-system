import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./dashboard.css";

const data = [
  { time: "08:00", occupancy: 150 },
  { time: "09:00", occupancy: 155 },
  { time: "10:00", occupancy: 160 },
  { time: "11:00", occupancy: 170 },
  { time: "12:00", occupancy: 165 },
  { time: "13:00", occupancy: 175 },
  { time: "14:00", occupancy: 185 },
  { time: "15:00", occupancy: 178 },
  { time: "16:00", occupancy: 190 },
];

const OccupancyChart = () => {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Overall Occupancy</h3>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="occupancy"
            stroke="#0f766e"
            fill="#99f6e4"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OccupancyChart;
