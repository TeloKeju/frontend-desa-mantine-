import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrasi komponen ChartJS yang diperlukan
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data dan konfigurasi diagram lingkaran
  const data = {
    labels: ["Merah", "Biru", "Kuning"],
    datasets: [
      {
        label: "Jumlah Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default PieChart;
