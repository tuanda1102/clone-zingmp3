import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(...registerables);

export default function ZingChart(props) {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            elements: {
                line: {
                    borderDash: [10, 10],
                    borderDashOffset: [4, 16],
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [33, 53, 85, 41, 44, 65],
                fill: false,
                backgroundColor: 'transparent',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                tension: 0.1,
            },
            {
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                backgroundColor: 'transparent',
                borderColor: '#742774',
                borderWidth: 2,
                tension: 0.1,
            },
            {
                data: [24, 36, 40, 88, 12, 35],
                fill: false,
                backgroundColor: 'transparent',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="zingchart">
            <Line style={{ height: props.height }} options={options} data={data} />
        </div>
    );
}
