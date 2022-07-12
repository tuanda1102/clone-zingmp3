import React from 'react';
import ZingChart from 'src/components/ZingChart/ZingChart';

export default function Chart() {
    return (
        <div className="chart-wrapper">
            <div className="background-chart">
                <div className="bg-blur"></div>
                <div className="bg-alpha"></div>
                <div className="bg-alpha-1"></div>
            </div>
            <div className="wrapper-header">
                <h2>#zingchart</h2>
                <button>
                    <ion-icon name="play"></ion-icon>
                </button>
            </div>
            <ZingChart height="320px" />
        </div>
    );
}
