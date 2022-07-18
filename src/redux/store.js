import { configureStore } from '@reduxjs/toolkit';
import { controlsSlice } from 'src/components/Controls/controlsSlice';
import { chartSlice } from 'src/components/ZingChart/zingChartSlice';
import { homeSlice } from 'src/pages/Home/homeSlice';

const store = configureStore({
    reducer: {
        homePage: homeSlice.reducer,
        chart: chartSlice.reducer,
        controls: controlsSlice.reducer,
    },
});

export default store;
