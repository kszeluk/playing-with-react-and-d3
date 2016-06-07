import "./main.css";

import React from "react";
import ReactDOM from "react-dom";
import BarChart from "./components/Charts.jsx";

const ChartsMountingPoint = document.createElement("div");
ChartsMountingPoint.id = "charts";
document.body.appendChild(ChartsMountingPoint);
ReactDOM.render(<BarChart />, ChartsMountingPoint);