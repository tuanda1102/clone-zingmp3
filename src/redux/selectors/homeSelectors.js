export const playlistTodaySelector = (state) => {
    return state.homePage.data.find((item) => item.sectionType === 'playlist');
};
