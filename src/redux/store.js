import { configureStore } from '@reduxjs/toolkit';
import { chartSlice } from 'src/components/ZingChart/zingChartSlice';
import { homeSlice } from 'src/pages/Home/homeSlice';
import { zingChartPageSlice } from 'src/pages/ZingChartPage/zingChartPageSlice';

const store = configureStore({
    reducer: {
        homePage: homeSlice.reducer,
        chart: chartSlice.reducer,
        zingChart: zingChartPageSlice.reducer,
    },
});

export default store;
