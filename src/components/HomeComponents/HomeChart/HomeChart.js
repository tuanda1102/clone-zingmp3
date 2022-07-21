import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/StyledComponents/Button';
import ZingChart from 'src/components/ZingChart/ZingChart';
import SongItem from 'src/components/ZingChartPageComponents/SongItem/SongItem';
import { listSongsSelector } from 'src/redux/selectors/zingChartPageSelector';

export default function HomeChart() {
    const listSongs = useSelector(listSongsSelector);

    const renderListSongs = listSongs?.slice(0, 3).map((song, index) => {
        return <SongItem index={index} key={song.encodeId} song={song} rank={index + 1} />;
    });

    return (
        <>
            <div className="home-chart home-row-item">
                <div className="home-chart-header">
                    <a href="/">#zingchart</a>
                    <button>
                        <ion-icon name="play"></ion-icon>
                    </button>
                </div>
                <div className="home-chart-content row">
                    <div className="home-chart-left col-5">
                        <div className="home-chart-list">{renderListSongs}</div>
                        <div className="home-chart-btn">
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <Link to="/zingchart">Xem Thêm</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="home-chart-right col-7">
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
        </>
    );
}
