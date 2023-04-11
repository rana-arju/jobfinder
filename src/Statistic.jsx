import React from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const data1 = [
  {
    name: "Assignment 1",
    mark: 55,
  },
  {
    name: "Assignment 2",
    mark: 54,
  },
  {
    name: "Assignment 3",
    mark: 56,
  },
  {
    name: "Assignment 4",
    mark: 60,
  },
  {
    name: "Assignment 5",
    mark: 48,
  },
  {
    name: "Assignment 6",
    mark: 58,
  },
  {
    name: "Assignment 7",
    mark: 60,
  },
  {
    name: "Assignment 8",
    mark: 60,
  },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Statistic = () => {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto mt-20 flex justify-center flex-col items-center">
        <h2 className=" text-2xl font-bold border-b pb-4 inline-block border-b-1">
          My 8 Assignment Statistic
        </h2>
        <PieChart width={300} height={300}>
          <Pie
            data={data1}
            isAnimationActive={false}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="mark"
          >
            {data1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            dataKey="name"
            data={data1}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </div>
      <Footer />
    </>
  );
};

export default Statistic;
