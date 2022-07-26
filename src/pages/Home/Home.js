import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeChart from 'src/components/HomeComponents/HomeChart/HomeChart';
import HomeFooter from 'src/components/HomeComponents/HomeFooter/HomeFooter';
import HomeTop from 'src/components/HomeComponents/HomeTop/HomeTop';
import TodayChoice from 'src/components/HomeComponents/TodayChoice/TodayChoice';
import Banner from 'src/components/HomeComponents/Slider/Banner';
import { getHome } from './homeSlice';
import { statusLoadingHomeSelector } from 'src/redux/selectors/homeSelectors';
import NewRelease from 'src/components/HomeComponents/NewRelease/NewRelease';
import { getChart } from 'src/components/ZingChart/zingChartSlice';
import NewMusics from 'src/components/HomeComponents/NewMusics/NewMusics';

export default function Home() {
    const loadingStatus = useSelector(statusLoadingHomeSelector);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHome());
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
                <div className="home">
                    <Banner />
                    <TodayChoice />
                    <NewRelease />
                    {/* <NewMusics /> */}
                    <HomeChart height="320px" />
                    {/* <HomeTop /> */}
                    <HomeFooter />
                </div>
            </div>
        </>
    );
}
