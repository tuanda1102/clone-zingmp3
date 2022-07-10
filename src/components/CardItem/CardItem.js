import React from 'react';

export default function CardItem(props) {
    return (
        <div className="card-item col">
            <div className="card-item-top">
                <a href="/">
                    <div className="card-img">
                        <img
                            src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/5/6/f/c56f9e842b6e4255759c9f589172bc63.jpg"
                            alt="choose-im"
                        />
                        <div className="card-overley">
                            <i className="card-overley-btn card-overley-icon">
                                <ion-icon name="heart-outline"></ion-icon>
                            </i>
                            <i className="card-overley-btn card-play">
                                <ion-icon name="play-outline"></ion-icon>
                            </i>
                            <i className="card-overley-btn card-overley-icon">
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </i>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card-item-bottom">
                <div>
                    <a className="card-title" href="/">
                        Nhạc Mới Mỗi Ngày
                    </a>
                </div>
                <p className="card-desc">Muốn đi nhanh thì đi một mình, muốn đi xa thì hãy đi cùng nhau</p>
            </div>
        </div>
    );
}
