import React from 'react';
import { CircleButton } from 'src/components/StyledComponents/Button';
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
                <CircleButton primary width="40px" height="40px">
                    <ion-icon name="play"></ion-icon>
                </CircleButton>
            </div>
            <ZingChart height="320px" />
        </div>
    );
}
