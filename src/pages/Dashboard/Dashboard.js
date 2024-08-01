import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import Earning from "./Earning";
import SideMenu from "../../components/SideMenu/SideMenu";

const raceData = [
  { name: "White", value: 15 },
  { name: "Black", value: 10 },
  { name: "Asian", value: 10 },
  { name: "Hispanic", value: 7 },
  { name: "Other", value: 3 },
  { name: "Race6", value: 5 },
  { name: "Race7", value: 8 },
  { name: "Race8", value: 12 },
  { name: "Race9", value: 13 },
  { name: "Race10", value: 17 },
];

const ageData = [
  { name: "0-10", value: 5 },
  { name: "11-20", value: 10 },
  { name: "21-30", value: 15 },
  { name: "31-40", value: 20 },
  { name: "41-50", value: 10 },
  { name: "51-60", value: 5 },
  { name: "61-70", value: 8 },
  { name: "71-80", value: 12 },
  { name: "81-90", value: 13 },
  { name: "91-100", value: 2 },
];

const childrenData = [
  { name: "0", value: 40 },
  { name: "1", value: 30 },
  { name: "2", value: 20 },
  { name: "3", value: 10 },
  { name: "4", value: 5 },
  { name: "5", value: 8 },
  { name: "6", value: 3 },
  { name: "7", value: 4 },
  { name: "8", value: 7 },
  { name: "9+", value: 6 },
];

const genderData = [
  { name: "Male", value: 60 },
  { name: "Female", value: 40 },
];

const COLORS = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
  "#D3A7FF",
  "#FFABAB",
  "#FFC3A0",
  "#FF677D",
  "#D4F1F4",
  "#A2D5F2",
  "#85A9FF",
];

const CustomBackground = (props) => {
  const { fill, x, y, width, height } = props;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={10}
      ry={10}
    />
  );
};

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden leading-normal tracking-normal text-left text-sm text-gray-700 font-sans bg-purple-100">
      <SideMenu />
      <Earning />
      <main className="w-[1400px] left-[450px] absolute top-[280px] mx-auto grid grid-cols-2 grid-rows-2 gap-4 p-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-4">Race</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={raceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#B0C4DE"
                barSize={15}
                radius={[10, 10, 0, 0]}
                background={<CustomBackground fill="#E6E6FA" />}
              >
                {raceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#4682B4" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-4">Age</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#FFECB3"
                barSize={15}
                radius={[10, 10, 0, 0]}
                background={<CustomBackground fill="#FFF8DC" />}
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#FFD700" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-4">Number of Children</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={childrenData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#D3D3D3"
                barSize={15}
                radius={[10, 10, 0, 0]}
                background={<CustomBackground fill="#E0E0E0" />}
              >
                {childrenData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#A9A9A9" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-4">Gender</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
