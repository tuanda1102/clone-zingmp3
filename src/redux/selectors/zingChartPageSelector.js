export const statusLoadingZingChartSelector = (state) => {
    return state.zingChart.status;
};

export const chartDataSelector = (state) => {
    return state.zingChart.data.RTChart;
};
