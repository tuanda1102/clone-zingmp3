import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DOMAIN } from 'src/constants/constants';

export const controlsSlice = createSlice({
    name: 'controls',
    initialState: {
        status: 'idle',
        data: {
            linkAudio: {},
            currentSongIndex: 0,
            controls: {
                random: false,
                play: false,
                repeat: false,
            },
        },
    },
    reducers: {
        getCurrentSongIndex: (state, actions) => {
            state.data.currentSongIndex = actions.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(playSong.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(playSong.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data.linkAudio = Object.values(action.payload)[0];
            });
    },
});

export const playSong = createAsyncThunk('controls/playSong', async (actions) => {
    const res = await axios.get(`${DOMAIN}/api/song?id={${actions}}`);
    return res.data.data;
});
