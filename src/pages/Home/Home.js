import React from 'react';

export default function Home() {
    return (
        <div className="home">
            <div className="home-slider row">
                <div className="col-4 home-slider-item">
                    <img src={require('~/assets/images/home-slider/img1.jpg')} alt="img1" />
                </div>
                <div className="col-4 home-slider-item">
                    <img src={require('~/assets/images/home-slider/img2.jpg')} alt="img1" />
                </div>
                <div className="col-4 home-slider-item">
                    <img src={require('~/assets/images/home-slider/img3.jpg')} alt="img1" />
                </div>
                <div className="slide-btn dflex-center">
                    <div className="slide-btn-item slide-btn-back">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </div>
                    <div className="slide-btn-item slide-btn-forward">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}
