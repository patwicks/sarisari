import React from "react";
import Chart from "react-apexcharts";

const DailySalesChart = () => {
  const chartOptions = {
    chart: {
      id: "sales-chart",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  };
  const chartSeries = [
    {
      name: "Daily Sales",
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
  ];

  return (
    <div className="h-[40vh] w-full p-2 overflow-hidden">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="area"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default DailySalesChart;
