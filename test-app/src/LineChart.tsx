import React, { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface chartProps {
  categories: [];
  data: [];
}

const LineChart: FC<chartProps> = ({ categories, data }) => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories,
      },
    },
    series: [
      {
        name: "series-1",
        data,
      },
    ],
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
