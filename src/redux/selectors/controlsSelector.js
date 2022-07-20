export const songSelector = (state) => {
    return state.controls.data.song;
};

export const linkAudioSelector = (state) => {
    return state.controls.data.linkAudio;
};

export const statusAudioSelector = (state) => {
    return state.controls.status;
};

export const currentSongIndexSelector = (state) => {
    return state.controls.data.currentSongIndex;
};
