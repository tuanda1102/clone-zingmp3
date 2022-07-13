import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DOMAIN } from 'src/constants/constants';

export const chartSlice = createSlice({
    name: 'chart',
    initialState: {
        status: 'idle',
        data: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChart.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getChart.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload;
            });
    },
});

export const getChart = createAsyncThunk('chart/getChartHome', async () => {
    const res = await axios.get(`${DOMAIN}/api/charthome`);
    return res.data.data.RTChart;
});
