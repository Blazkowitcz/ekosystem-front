'use client'
import { Legend } from "chart.js";
import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";

const DashboardCard = (props) => {
    const {
        name,
        OSDescription,
        OSType,
        onClick
    } = props;

    let iconClass;
    switch (OSType) {
        case 'linux':
            iconClass = 'bi-ubuntu';
            break;
        case 'windows':
            iconClass = 'bi-windows';
            break;
        case 'fedora':
            iconClass = 'bi-fedora';
            break;
        default:
            iconClass = 'bi-question-circle';
            break;
    }

    return (
        <div key={name} className='bg-dark me-4 mt-3 pt-4 pb-4 ps-5 pe-5 d-inline-flex' style={{cursor: "pointer"}} onClick={onClick}>
            <i className={`bi ${iconClass} text-light widget-icon rounded-circle h1 mt-2`}></i>
            <div className='d-inline-block ms-4 mt-1'>
                <div className='row'>
                    <h5 className="text-light">{name}</h5>
                </div>
                <div className='row'>
                    <h6 className="text-light">{OSDescription}</h6>
                </div>
            </div>
        </div>
    );
}

const DashboardDiskCard = (props) => {
    const {data, name} = props
    const finalData = useMemo(() => ({
        labels: ['Free', 'Used'],
        datasets: [
            {
                data: [Math.round(100 - (data.used * 100) / data.blocks), Math.round((data.used * 100) / data.blocks)],
                label: '%',
                backgroundColor: ['green', 'darkred'],
                borderColor: ['green', 'darkred'],
                borderWidth: 1
            }
        ],
    }), [data]);

    const options = {
        plugins: {
            responsive: true,
            legend: {
                labels: {
                    color: "white"
                }
            }
        }
    };

    return (
        <div className='me-5' style={{ width: '10%' }}>
            <span className='text-center d-block text-light'>{name}</span>
            <Doughnut data={finalData} options={options} />
        </div>
    );
}

export { DashboardCard, DashboardDiskCard }