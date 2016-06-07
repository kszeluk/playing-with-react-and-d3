import React from "react";
import BarChart from "./BarChart";

export default class Charts extends React.Component {
  render() {
    return (
      <div>
        <h1>D3.js combined with React.js</h1>
        <BarChart />
      </div>
    );
  }
}