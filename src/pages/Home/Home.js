import React, { useEffect } from 'react';
import HomeChart from 'src/components/HomeComponents/HomeChart/HomeChart';
import HomeFooter from 'src/components/HomeComponents/HomeFooter/HomeFooter';
import HomeTop from 'src/components/HomeComponents/HomeTop/HomeTop';
import NewMusics from 'src/components/HomeComponents/NewMusics/NewMusics';
import Slider from 'src/components/HomeComponents/Slider/Slider';
import TodayChoice from 'src/components/HomeComponents/TodayChoice/TodayChoice';

import { useDispatch } from 'react-redux';
import { getHome } from './homeSlice';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHome());
    }, []);

    return (
        <div className="home">
            <Slider />
            <TodayChoice />
            <NewMusics />
            <HomeChart />
            <HomeTop />
            <HomeFooter />
        </div>
    );
}
