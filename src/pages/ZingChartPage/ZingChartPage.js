import React from 'react';
import { useSelector } from 'react-redux';
import Chart from 'src/components/ZingChartPageComponents/Chart/Chart';
import ListSongs from 'src/components/ZingChartPageComponents/ListSongs/ListSongs';
import { statusChart } from 'src/redux/selectors/zingChartPageSelector';

export default function ZingChartPage() {
    const loadingStatus = useSelector(statusChart);
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
            </div>
        </>
    );
}
