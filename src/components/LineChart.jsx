import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const labels = ["6th","7th","8th","9th","10th","11th","12th"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Passing % by class fy 2022",
            backgroundColor: "rgb(255,99,132)",
            borderColor: "rgb(25,99,132)",
            data: [98,95,93,94,97,95,96]
        }
    ]
}

const LineChart = () => {
  return (
    <div>
      <Line data={data}></Line>
    </div>
  )
}

export default LineChart;
