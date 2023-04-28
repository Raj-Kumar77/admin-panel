import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const labels = ["Pass-92%","Fail-8%"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(250,99,132)",
            borderColor: "rgb(25,99,132)",
            data: [92,8]
        }
    ]
}

const PieChart = () => {
  return (
    <div>
      <Pie data={data}></Pie>
    </div>
  )
}

export default PieChart;
