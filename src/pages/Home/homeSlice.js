import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DOMAIN } from 'src/constants/constants';

export const homeSlice = createSlice({
    name: 'homePage',
    initialState: {
        status: 'idle',
        data: {
            banner: [],
            playlistToday: [],
            recentPlaylist: [],
            newRelease: [],
        },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHome.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getHome.fulfilled, (state, action) => {
                state.status = 'idle';
                action.payload.forEach((item) => {
                    if (item.sectionType === 'banner') {
                        state.data.banner = item;
                    } else if (item.sectionType === 'playlist') {
                        state.data.playlistToday = item;
                    } else if (item.sectionType === 'new-release') {
                        state.data.newRelease = item;
                    }
                });
            });
    },
});

export const getHome = createAsyncThunk('home/getHome', async () => {
    const res = await axios.get(`${DOMAIN}/api/home?page=/`);
    return res.data.data.items;
});
