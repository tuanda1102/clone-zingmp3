import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import HomeChart from 'src/components/HomeComponents/HomeChart/HomeChart';
import HomeFooter from 'src/components/HomeComponents/HomeFooter/HomeFooter';
import HomeTop from 'src/components/HomeComponents/HomeTop/HomeTop';
import NewMusics from 'src/components/HomeComponents/NewMusics/NewMusics';
import TodayChoice from 'src/components/HomeComponents/TodayChoice/TodayChoice';
import Banner from 'src/components/HomeComponents/Slider/Banner';
import { getHome } from './homeSlice';
import { statusLoadingSelector } from 'src/redux/selectors/homeSelectors';
import NewRelease from 'src/components/HomeComponents/NewRelease/NewRelease';

export default function Home() {
    const loadingStatus = useSelector(statusLoadingSelector);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHome());
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
                <div className="home">
                    <Banner />
                    <TodayChoice />
                    {/* <NewMusics /> */}
                    <HomeChart />
                    <HomeTop />
                    <NewRelease />
                    <HomeFooter />
                </div>
            )}
        </>
    );
}
