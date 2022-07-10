import { configureStore } from '@reduxjs/toolkit';
import { homeSlice } from 'src/pages/Home/homeSlice';

const store = configureStore({
    reducer: {
        homePage: homeSlice.reducer,
    },
});

export default store;
