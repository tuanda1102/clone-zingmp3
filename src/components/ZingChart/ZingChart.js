import React, { memo, useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import 'chartjs-adapter-moment';
import { chartDataSelector } from 'src/redux/selectors/zingChartPageSelector';
ChartJS.register(...registerables);

function ZingChart(props) {
    const [times, setTimes] = useState([]);
    const [firstLine, setFirstLine] = useState([]);
    const [secondLine, setSecondLine] = useState([]);
    const [threeLine, setThreeLine] = useState([]);
    const dataChart = useSelector(chartDataSelector);

    const itemsChart = dataChart.data?.RTChart?.chart.items;
    useEffect(() => {
        if (itemsChart) {
            setTimes(
                itemsChart[Object.keys(itemsChart)[0]]?.map((item) => {
                    return item.time;
                }),
            );
            setFirstLine(
                itemsChart[Object.keys(itemsChart)[0]]?.map((item) => {
                    return item.counter;
                }),
            );
            setSecondLine(
                itemsChart[Object.keys(itemsChart)[1]]?.map((item) => {
                    return item.counter;
                }),
            );
            setThreeLine(
                itemsChart[Object.keys(itemsChart)[2]]?.map((item) => {
                    return item.counter;
                }),
            );
        }
    }, [itemsChart]);

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
                data: firstLine,
                fill: false,
                backgroundColor: 'transparent',
                borderColor: '#4a90e2',
                pointHoverBackgroundColor: '#4a90e2',
                pointHoverBorderColor: '#4a90e2',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                data: secondLine,
                fill: false,
                backgroundColor: 'transparent',
                borderColor: '#50e3c2',
                pointHoverBackgroundColor: '#50e3c2',
                pointHoverBorderColor: '#50e3c2',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                data: threeLine,
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

export default memo(ZingChart);
