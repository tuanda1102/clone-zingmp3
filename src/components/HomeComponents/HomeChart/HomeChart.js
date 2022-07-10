import React, { Fragment } from 'react';
import { Button } from 'src/components/StyledComponents/Button';
import ZingChart from 'src/components/ZingChart/ZingChart';

export default function HomeChart() {
    return (
        <Fragment>
            <div className="home-chart home-row-item">
                <div className="home-chart-header">
                    <a href="/">#zingchart</a>
                    <button>
                        <ion-icon name="play"></ion-icon>
                    </button>
                </div>
                <div className="home-chart-content row">
                    <div className="home-chart-left col-4">
                        <div className="home-chart-list">
                            <div className="chart-song-item">
                                <div className="song-item-left">
                                    <span className="song-item-num">1</span>
                                    <div className="media">
                                        <a href="/" className="media-thumb">
                                            <img
                                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg"
                                                alt="thumb"
                                            />
                                        </a>
                                        <div className="media-content">
                                            <div className="media-content-title">Em Nên Dừng Lại</div>
                                            <span className="media-content-subtitle">Khắc Việt</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="song-item-right">
                                    <span>46%</span>
                                </div>
                            </div>
                            <div className="chart-song-item">
                                <div className="song-item-left">
                                    <span className="song-item-num">1</span>
                                    <div className="media">
                                        <a href="/" className="media-thumb">
                                            <img
                                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg"
                                                alt="thumb"
                                            />
                                        </a>
                                        <div className="media-content">
                                            <div className="media-content-title">Em Nên Dừng Lại</div>
                                            <span className="media-content-subtitle">Khắc Việt</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="song-item-right">
                                    <span>46%</span>
                                </div>
                            </div>
                            <div className="chart-song-item">
                                <div className="song-item-left">
                                    <span className="song-item-num">1</span>
                                    <div className="media">
                                        <a href="/" className="media-thumb">
                                            <img
                                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg"
                                                alt="thumb"
                                            />
                                        </a>
                                        <div className="media-content">
                                            <div className="media-content-title">Em Nên Dừng Lại</div>
                                            <span className="media-content-subtitle">Khắc Việt</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="song-item-right">
                                    <span>46%</span>
                                </div>
                            </div>
                        </div>
                        <Button>Xem Thêm</Button>
                    </div>

                    <div className="home-chart-right col-8">
                        <ZingChart height="320px" />
                    </div>
                </div>
            </div>
            <div className="charts-country row">
                <div className="charts-country-item col-4">
                    <a href="/">
                        <div className="charts-country-item-img">
                            <img
                                alt="charts-country"
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg"
                            />
                        </div>
                    </a>
                </div>
                <div className="charts-country-item col-4">
                    <a href="/">
                        <div className="charts-country-item-img">
                            <img
                                alt="charts-country"
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg"
                            />
                        </div>
                    </a>
                </div>
                <div className="charts-country-item col-4">
                    <a href="/">
                        <div className="charts-country-item-img">
                            <img
                                alt="charts-country"
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </Fragment>
    );
}
