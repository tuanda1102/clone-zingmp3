import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DOMAIN } from 'src/constants/constants';

export const homeSlice = createSlice({
    name: 'homePage',
    initialState: {
        status: 'idle',
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHome.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(getHome.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload;
            });
    },
});

export const getHome = createAsyncThunk('home/getHome', async () => {
    const res = await axios.get(`${DOMAIN}/api/home?page={home}`);
    const data = res.data.data.items;
    return data;
});
