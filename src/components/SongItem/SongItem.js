import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { controlsSlice, playSong } from 'src/components/Controls/controlsSlice';

export default function SongItem({ song, rank, withContentAlbum, index }) {
    const arrColorLine = ['#4a90e2', '#50e3c2', '#e35050'];
    const dispatch = useDispatch();
    const [streamingStatus, setStreamingStatus] = useState(true);

    useEffect(() => {
        // check VIP song
        song?.streamingStatus === 1 ? setStreamingStatus(false) : setStreamingStatus(true);
    }, []);

    const convertSecondsToMinutes = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };

    const loadSongControls = () => {
        dispatch(controlsSlice.actions.getSong(song));
        dispatch(playSong(song.encodeId));
        dispatch(controlsSlice.actions.getCurrentSongIndex(index));
    };

    return (
        <div className="chart-song-item" dataset={index} onClick={loadSongControls}>
            <div className="item-media">
                <div className="media-left">
                    {rank ? (
                        <div className="song-prefix">
                            <span style={{ WebkitTextStroke: '1px' + arrColorLine[index] }} className="prefix-number">
                                {rank}
                            </span>
                            <div className="prefix-sort">
                                <ion-icon name="remove-outline"></ion-icon>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    <div className="song-thumb">
                        <div className="thumb-img">
                            <img src={song.thumbnailM} alt={song.alias} />
                        </div>
                        <div className="thumb-overley">
                            <ion-icon name="play"></ion-icon>
                        </div>
                    </div>
                    <div className="song-info" style={streamingStatus ? { opacity: '0.7' } : { opacity: '1' }}>
                        <p className="song-title">
                            {song.title}{' '}
                            <span>
                                {streamingStatus ? (
                                    <img
                                        className="vip-streamingStatus"
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.11/static/media/vip-label.3dd6ac7e.svg"
                                        alt="VIP"
                                    />
                                ) : (
                                    ''
                                )}
                            </span>{' '}
                        </p>
                        <span className="song-subtitle">
                            <a href="/">{song.artistsNames}</a>
                        </span>
                    </div>
                </div>
                <div className="media-content">{withContentAlbum ? song.album?.title : ''}</div>
                <div className="media-right">
                    <div className="media-right-item duration">
                        {convertSecondsToMinutes(Math.floor(song.duration / 60), '0', 2)}:
                        {convertSecondsToMinutes(song.duration - Math.floor(song.duration / 60) * 60, 0, 2)}
                    </div>
                </div>
            </div>
        </div>
    );
}
