'use client'
import { createColumnHelper } from '@tanstack/react-table'
import { Badge } from 'react-bootstrap'
import { DashboardCard, DashboardDiskCard } from '@/app/components/Dashboard'
import { Table } from '@/app/components/Table'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useFetch } from '@/utils/hooks/useFetch'
import { useState } from 'react';

export default function RegisterPage() {

  const [detail, setDetail] = useState(null)
  const { data, isLoading } = useFetch(`http://${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}:${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/systems`);

  ChartJS.register(ArcElement, Tooltip, Legend);

  const columns = [
    {
      id: 'name',
      header: 'Name',
      accessorKey: 'name',
    },
    {
      id: 'osDescription',
      header: 'OS Description',
      accessorKey: 'description',
    },
    {
      id: 'osType',
      header: 'OS Type',
      accessorKey: 'os',
    },
    {
      id: 'statut',
      header: 'Status',
      cell: ({ row }) => {
        return row.original.alive ? <Badge bg="success">Connected</Badge> : <Badge bg="danger">Disconnected</Badge>
      }
    }
  ];

  /**
   * Fetch System detail on row click
   * @param {Object} row 
   */
  const handleRowClick = async (row) => {
    const data = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}:${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/systems/${row.original.id}/details`);
    const result = await data.json();
    setDetail(result)
  };

  return (
    <div className='m-3'>
      {!isLoading && (<Table data={data} columns={columns} handleRowClick={handleRowClick} />)}
      <hr className="hr hr-blurry mt-4" />
      {detail && (
        <>
          <div className='bg-secondary mt-2 text-center text-light pt-2 pb-2'>{detail.name}</div>
          <div className='d-flex'>
            <div className='bg-secondary mt-2 w-50 me-2'>
              <div>
                <span className='text-center d-block text-light mb-3'>Details</span>
                <div className='d-flex pb-3'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-6 text-center text-light '>Processeur : {detail.processor}</div>
                      <div className='col-6 text-center text-light '>Coeurs : {detail.cores}</div>
                    </div>
                    <div className='row'>
                      <div className='col-6 text-center text-light '>Architecture : {detail.architecture}</div>
                      <div className='col-6 text-center text-light '>hostname : {detail.hostname}</div>
                    </div>
                    <div className='row'>
                      <div className='col-6 text-center text-light '>Plateforme : {detail.os}</div>
                      <div className='col-6 text-center text-light '>Version : {detail.release}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-secondary mt-2 w-50'>
              <div>
                <span className='text-center d-block text-light mb-3'>Network</span>
                <div className='d-flex pb-3'>
                  <div className='container'>
                    {Object.keys(detail.networkInterfaces).map((key, index) => (
                      <div className='row' key={index}>
                        <div className='col-6 text-center text-light'>
                          IP: {detail.networkInterfaces[key][0]?.address || 'N/A'}
                        </div>
                        <div className='col-6 text-center text-light'>
                          Mask: {detail.networkInterfaces[key][0]?.netmask || 'N/A'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {detail.disks && (<div className='bg-secondary mt-2'>
            <div>
              <span className='text-center d-block text-light mb-3'>Disques</span>
              <div className='d-flex justify-content-center pb-3'>
                {detail.disks.map(disk => {
                  return (
                    <DashboardDiskCard key={disk.filesystem} name={disk.filesystem} data={disk} />
                  )
                })}
              </div>
            </div>
          </div>)}
        </>
      )}
    </div>
  );
}