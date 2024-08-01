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
  { name: "White", value: 60 },
  { name: "Black", value: 20 },
  { name: "Asian", value: 10 },
  { name: "Hispanic", value: 7 },
  { name: "Other", value: 3 },
];

const ageData = [
  { name: "0-18", value: 30 },
  { name: "19-35", value: 50 },
  { name: "36-50", value: 15 },
  { name: "51+", value: 5 },
];

const childrenData = [
  { name: "0", value: 40 },
  { name: "1", value: 30 },
  { name: "2", value: 20 },
  { name: "3+", value: 10 },
];

const genderData = [
  { name: "Male", value: 60 },
  { name: "Female", value: 40 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A8D8EA",
  "#FF6F61",
  "#DD4132",
  "#9B2335",
  "#6B5B95",
  "#88B04B",
  "#FFA07A",
  "#2E8B57",
];

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden leading-normal tracking-normal text-left text-sm text-gray-700 font-sans bg-purple-100">
      <SideMenu />
      <Earning />
      <main className="w-[1400px] left-[450px] absolute top-[280px] mx-auto grid grid-cols-2 grid-rows-2 gap-4 p-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-4">Race</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={raceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8">
                {raceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-4">Age</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={ageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d">
                {ageData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-4">Number of Children</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={childrenData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#ffc658">
                {childrenData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-4">Gender</h3>
          <ResponsiveContainer width="100%" height={200}>
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
