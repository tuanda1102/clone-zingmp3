export const statusLoadingZingChartSelector = (state) => {
    return state.zingChart.status;
};

export const listSongsChartSelector = (state) => {
    return state.chart.data;
};
