export const songSelector = (state) => {
    return state.controls.data.song;
};

export const linkAudioSelector = (state) => {
    return state.controls.data.linkAudio;
};
