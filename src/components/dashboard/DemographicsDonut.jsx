import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./dashboard.css";

const data = [
  { name: "Male", value: 55 },
  { name: "Female", value: 45 },
];

const COLORS = ["#0f766e", "#99f6e4"];

const DemographicsDonut = () => {
  return (
    <div className="chart-card">
      <h4 className="chart-title">Chart of Demographics</h4>

      <div className="donut-wrapper">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={90}
              dataKey="value"
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="donut-center">
          <p>Total Crowd</p>
          <h3>100%</h3>
        </div>
      </div>

      <div className="donut-legend">
        <p>
          <span className="dot male" /> 55% Males
        </p>
        <p>
          <span className="dot female" /> 45% Females
        </p>
      </div>
    </div>
  );
};

export default DemographicsDonut;
