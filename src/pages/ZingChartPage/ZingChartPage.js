import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'src/components/ZingChartPageComponents/Chart/Chart';
import ListSongs from 'src/components/ZingChartPageComponents/ListSongs/ListSongs';
import { statusLoadingZingChartSelector } from 'src/redux/selectors/zingChartPageSelector';
import { getChartHome } from './zingChartPageSlice';

export default function ZingChartPage() {
    const loadingStatus = useSelector(statusLoadingZingChartSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChartHome());
    }, []);

    return (
        <>
            {loadingStatus === 'pending' ? (
                <div className="loading-container">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : (
                <div className="zingchart-page">
                    <Chart />
                    <ListSongs />
                </div>
            )}
        </>
    );
}
