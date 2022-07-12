import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DOMAIN } from 'src/constants/constants';

export const zingChartSlice = createSlice({
    name: 'zingChart',
    initialState: {
        status: 'idle',
        data: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChartHome.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getChartHome.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload;
            });
    },
});

export const getChartHome = createAsyncThunk('zingChartPage/getChartHome', async () => {
    const res = await axios.get(`${DOMAIN}/api/charthome`);
    const data = res.data.data;
    return data;
});
