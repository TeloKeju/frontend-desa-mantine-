import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Pilih = () => {
  const data = {
    labels: ["Kategori 1", "Kategori 2", "Kategori 3"], // Label sumbu Y
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20], // Nilai untuk bar pertama
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Warna latar belakang bar
        borderColor: "rgba(255, 99, 132, 1)", // Warna border bar
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [15, 25], // Nilai untuk bar kedua
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Warna latar belakang bar
        borderColor: "rgba(54, 162, 235, 1)", // Warna border bar
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "x", // Mengatur agar bar chart menjadi horizontal
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Pilih;
