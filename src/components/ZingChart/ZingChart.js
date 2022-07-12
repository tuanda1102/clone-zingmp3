import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import { useSelector } from 'react-redux';
import { chartDataSelector } from 'src/redux/selectors/zingChartPageSelector';
ChartJS.register(...registerables);

export default function ZingChart(props) {
    const [itemsChart, setItemsChart] = useState({});
    const dataChart = useSelector(chartDataSelector);
    const times = itemsChart[Object.keys(itemsChart)[0]]?.map((item) => {
        return item.time;
    });

    useEffect(() => {
        if (dataChart) {
            setItemsChart(dataChart.chart.items);
        }
    }, []);

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
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            intersect: false,
        },
        elements: {
            point: {
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false,
                },
                type: 'time',
                time: {
                    unit: 'hour',
                    stepSize: 2,
                    displayFormats: { hour: 'HH:mm' },
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    };

    const data = {
        labels: times,
        datasets: [
            {
                data:
                    itemsChart[Object.keys(itemsChart)[0]]?.map((item) => {
                        return item.counter;
                    }) || [],
                fill: false,
                backgroundColor: 'transparent',
                borderColor: '#4a90e2',
                pointHoverBackgroundColor: '#4a90e2',
                pointHoverBorderColor: '#4a90e2',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                data:
                    itemsChart[Object.keys(itemsChart)[1]]?.map((item) => {
                        return item.counter;
                    }) || [],
                fill: false,
                backgroundColor: 'transparent',
                borderColor: '#50e3c2',
                pointHoverBackgroundColor: '#50e3c2',
                pointHoverBorderColor: '#50e3c2',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                data:
                    itemsChart[Object.keys(itemsChart)[2]]?.map((item) => {
                        return item.counter;
                    }) || [],
                fill: false,
                backgroundColor: 'transparent',
                borderColor: '#e35050',
                pointHoverBackgroundColor: '#e35050',
                pointHoverBorderColor: '#e35050',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="zingchart">
            <Line style={{ height: props.height }} options={options} data={data} />
        </div>
    );
}
