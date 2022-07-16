export const statusChart = (state) => {
    return state.chart.status;
};

export const chartDataSelector = (state) => {
    return state.chart;
};

export const listSongsSelector = (state) => {
    return state.chart.data.RTChart?.items;
};

export const chartWeekSelector = (state) => {
    return state.chart.data.weekChart;
};
