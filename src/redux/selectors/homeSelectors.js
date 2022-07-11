export const playlistTodaySelector = (state) => {
    return state.homePage.data.playlistToday;
};

export const bannerHomeSelector = (state) => {
    return state.homePage.data.banner;
};

export const statusLoadingSelector = (state) => {
    return state.homePage.status;
};

export const newReleaseSelector = (state) => {
    return state.homePage.data.newRelease;
};
