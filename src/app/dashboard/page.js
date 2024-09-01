'use client'
import { createColumnHelper } from '@tanstack/react-table'
import { DashboardCard } from '@/app/components/Dashboard'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function RegisterPage() {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = [
    { id: '1', name: 'PC 1', OSDescription: 'Nobara - Fedora 40', OSType: 'linux' },
    { id: '2', name: 'PC 2', OSDescription: 'Windows 10 - 64x', OSType: 'windows' },
    { id: '3', name: 'NAS Synology', OSDescription: 'Synology', OSType: 'linux' }
  ]

  let chartData = [
    {
      label: "Free",
      value: 34,
      color: "rgba(0, 43, 73, 1)",
      cutout: "50%",
    },
    {
      label: "Used",
      value: 66,
      color: "rgba(0, 103, 160, 1)",
      cutout: "50%",
    }
  ]

  const finalData = {
    labels: chartData.map((item) => item.label),
    datasets: [
      {
        data: chartData.map((item) => Math.round(item.value)),
        backgroundColor: chartData.map((item) => item.color),
        borderColor: chartData.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(chartData.length).fill(true),
      },
    ],
  };

  const options = {
    plugins: {
      responsive: true,
    },
    cutout: chartData.map((item) => item.cutout),
  };


  return (
    <>
      <div className='m-auto mt-4' style={{ width: '90%' }}>
        {data.map(d => {
          return (
            <>
              <DashboardCard key={d.id} name={d.name} OSDescription={d.OSDescription} OSType={d.OSType} onClick={() => console.log(d.name)} />
            </>
          )
        })}
        <div className='row mt-3'>
          <div className='bg-white me-3' style={{ width: '15%' }}>
            <span className='text-center d-block'>Espace Disque</span>
            <Doughnut data={finalData} options={options} />
          </div>
          <div className='bg-white' style={{ width: '15%' }}>
            <span className='text-center d-block'>Espace Disque</span>
            <Doughnut data={finalData} options={options} />
          </div>
        </div>
      </div>
    </>
  );
}