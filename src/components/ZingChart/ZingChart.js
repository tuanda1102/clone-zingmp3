import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import 'chartjs-adapter-moment';
import { chartDataSelector } from 'src/redux/selectors/zingChartPageSelector';
ChartJS.register(...registerables);

export default function ZingChart(props) {
    const dataChart = useSelector(chartDataSelector);
    const [times, setTimes] = useState([]);
    const [linesData, setLinesData] = useState([]);

    const arrColorLine = ['#4a90e2', '#50e3c2', '#e35050'];
    const itemsChart = dataChart.data?.RTChart?.chart.items;

    useEffect(() => {
        if (itemsChart) {
            const arrItemsChart = Object.values(itemsChart);
            setLinesData(arrItemsChart);
            setTimes(arrItemsChart[0].map((item) => item.time));
        }
    }, [itemsChart]);

    const dataLineChart = () => {
        return linesData?.map((dataLine, index) => {
            return {
                data: dataLine.map((item) => item.counter),
                fill: false,
                backgroundColor: 'transparent',
                borderColor: arrColorLine[index],
                pointHoverBackgroundColor: arrColorLine[index],
                pointHoverBorderColor: arrColorLine[index],
                borderWidth: 2,
                tension: 0.4,
            };
        });
    };

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
        datasets: dataLineChart(),
    };

    return (
        <div className="zingchart">
            <Line style={{ height: props.height }} options={options} data={data} />
        </div>
    );
}
