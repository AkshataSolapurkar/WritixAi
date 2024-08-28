// components/Chart.tsx
"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Dummy data and options
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return context.dataset.label + ': ' + context.raw;
        },
      },
    },
  },
};

const Chart: React.FC = () => {
  return (
    <div className="w-full h-48 mt-[50px]">
      <h1 className="text-[18px] text-gray-600 font-semibold">ProgressBar</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
