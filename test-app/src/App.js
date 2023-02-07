import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";

function App() {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  
  return (
    <div className="app">
      <LineChart/>
      <BarChart/>
    </div>
  );
}

export default App;
