import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChart } from 'src/components/ZingChart/zingChartSlice';
import Chart from 'src/components/ZingChartPageComponents/Chart/Chart';
import ListSongs from 'src/components/ZingChartPageComponents/ListSongs/ListSongs';
import WeekChart from 'src/components/ZingChartPageComponents/WeekChart/WeekChart';
import { statusChart } from 'src/redux/selectors/zingChartPageSelector';

export default function ZingChartPage() {
    const dispatch = useDispatch();
    const loadingStatus = useSelector(statusChart);

    useEffect(() => {
        dispatch(getChart());
    }, []);

    return (
        <>
            <div className="zingchart-page">
                <div
                    style={loadingStatus === 'pending' ? { display: 'grid' } : { display: 'none' }}
                    className="loading-container"
                >
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <Chart />
                <ListSongs />
                <WeekChart />
            </div>
        </>
    );
}
