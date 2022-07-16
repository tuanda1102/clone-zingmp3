import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { chartWeekSelector } from 'src/redux/selectors/zingChartPageSelector';
import WeekChartBox from './WeekChartBox';

export default function WeekChart() {
    const [arrChartWeek, setArrChartWeek] = useState([]);
    const weekBoxData = useSelector(chartWeekSelector);

    useEffect(() => {
        if (weekBoxData !== undefined) {
            const arr = Object.values(weekBoxData);
            setArrChartWeek(arr);
        }
    }, [weekBoxData]);

    const RenderBoxChart = () => {
        return arrChartWeek.map((box, index) => {
            return <WeekChartBox key={index} data={box} />;
        });
    };

    return (
        <div className="week-chart">
            <div className="background-chart">
                <div className="bg-blur"></div>
                <div className="bg-alpha"></div>
                <div className="bg-alpha-1"></div>
            </div>
            <div className="wrapper-week-chart">
                <div className="week-heading">
                    <a href="/">BẢNG XẾP HẠNG TUẦN</a>
                </div>

                <div className="week-container">
                    <div className="row">
                        <RenderBoxChart />
                    </div>
                </div>
            </div>
        </div>
    );
}
