import { configureStore } from '@reduxjs/toolkit';
import { homeSlice } from 'src/pages/Home/homeSlice';
import { zingChartSlice } from 'src/pages/ZingChartPage/zingChartPageSlice';

const store = configureStore({
    reducer: {
        homePage: homeSlice.reducer,
        zingChart: zingChartSlice.reducer,
    },
});

export default store;
