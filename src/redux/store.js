import { configureStore } from '@reduxjs/toolkit';
import { chartSlice } from 'src/components/ZingChart/zingChartSlice';
import { homeSlice } from 'src/pages/Home/homeSlice';

const store = configureStore({
    reducer: {
        homePage: homeSlice.reducer,
        chart: chartSlice.reducer,
    },
});

export default store;
