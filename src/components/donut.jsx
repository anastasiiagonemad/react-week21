import React from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
  Chart.register(ChartDataLabels);

  const data = {
    labels: ['First', 'Second', 'Third'],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ['Wheat', 'Cornsilk', 'Tan'],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50,
      },
    },
  };

  return (
    <div className="donut-chart-container">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
