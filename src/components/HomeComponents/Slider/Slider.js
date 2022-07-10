import React from 'react';

export default function Slider() {
    return (
        <div className="home-slider row">
            <div className="col-4 home-slider-item">
                <a href="/">
                    <img src={require('~/assets/images/home-slider/img1.jpg')} alt="slider-img" />
                </a>
            </div>
            <div className="col-4 home-slider-item">
                <a href="/">
                    <img src={require('~/assets/images/home-slider/img1.jpg')} alt="slider-img" />
                </a>
            </div>
            <div className="col-4 home-slider-item">
                <a href="/">
                    <img src={require('~/assets/images/home-slider/img1.jpg')} alt="slider-img" />
                </a>
            </div>
            <div className="slider-btn">
                <div className="slider-btn-item slider-btn-back">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
                <div className="slider-btn-item slider-btn-forward">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}
