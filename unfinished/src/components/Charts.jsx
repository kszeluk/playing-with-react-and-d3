import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DiagramChart from "./DiagramChart";

export default class Charts extends React.Component {
  render() {
    return (
      <div>
        <h1>D3.js combined with React.js</h1>
        <BarChart width={1200} height={200} />
        <PieChart width={500} height={500} />
        <DiagramChart />
      </div>
    );
  }
}