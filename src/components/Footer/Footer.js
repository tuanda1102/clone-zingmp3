import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="media">
                    <div className="media-left">
                        <a href="/" className="media-thumb">
                            <img
                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg"
                                alt="thumb"
                            />
                        </a>
                        <div className="media-content">
                            <div className="media-content-title">Em Nên Dừng Lại</div>
                            <a href="/" className="media-content-subtitle">
                                Khắc Việt
                            </a>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="media-right-item">
                            <div className="media-thumb-btn">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="media-right-item">
                            <div className="media-thumb-btn">
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <div className="controls">
                    <div className="controls-top-item">
                        <div className="control-btn">
                            <ion-icon name="shuffle-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="controls-top-item">
                        <div className="control-btn">
                            <ion-icon name="play-skip-back-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="controls-top-item controls-btn-play">
                        <div className="control-btn btn-play">
                            <ion-icon name="play-circle-outline"></ion-icon>{' '}
                        </div>
                    </div>
                    <div className="controls-top-item">
                        <div className="control-btn">
                            <ion-icon name="play-skip-forward-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="controls-top-item">
                        <div className="control-btn">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="time-progress">
                    <span>00:02</span>
                    <div id="progress-container">
                        <input type="range" className="amplitude-song-slider" />
                        <progress id="song-played-progress" className="amplitude-song-played-progress" />
                        <progress id="song-buffered-progress" className="amplitude-buffered-progress" value={0} />
                    </div>
                    <span>06:08</span>
                </div>
            </div>
            <div className="footer-right">
                <div className="options">
                    <div className="option-item">
                        <div className="option-item-icon">
                            <ion-icon name="film-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="option-item">
                        <div className="option-item-icon">
                            <ion-icon name="mic-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="option-item">
                        <div className="option-item-icon">
                            <ion-icon name="albums-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="option-item">
                        <div className="option-item-icon">
                            <ion-icon name="volume-low-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="option-item">
                        <div className="option-item-icon">
                            <ion-icon name="list-circle-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
