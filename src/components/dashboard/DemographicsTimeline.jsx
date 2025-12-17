import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "./dashboard.css";

const data = [
  { time: "08:00", male: 180, female: 135 },
  { time: "09:00", male: 185, female: 138 },
  { time: "10:00", male: 190, female: 140 },
  { time: "11:00", male: 195, female: 142 },
  { time: "12:00", male: 200, female: 148 },
  { time: "13:00", male: 198, female: 146 },
  { time: "14:00", male: 205, female: 150 },
  { time: "15:00", male: 210, female: 152 },
  { time: "16:00", male: 202, female: 149 },
  { time: "17:00", male: 206, female: 151 },
  { time: "18:00", male: 220, female: 160 },
];

const DemographicsTimeline = () => {
  return (
    <div className="chart-card">
      <h4 className="chart-title">Demographics Analysis</h4>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />

          <XAxis
            dataKey="time"
            label={{
              value: "Time",
              position: "insideBottom",
              offset: -5,
            }}
          />

          <YAxis
            domain={[0, (dataMax) => dataMax + 40]}
            padding={{ top: 20, bottom: 0 }} // 👈 bottom padding 0
            label={{
              value: "Count",
              angle: -90,
              position: "insideLeft",
            }}
          />

          <Tooltip />

          <Legend verticalAlign="top" align="right" iconType="circle" />

          <Line
            type="monotone"
            dataKey="male"
            name="Male"
            stroke="#0f766e"
            strokeWidth={2}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="female"
            name="Female"
            stroke="#99f6e4"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DemographicsTimeline;
