import React from 'react';
import { useDispatch } from 'react-redux';
import { controlsSlice, playSong } from 'src/components/Controls/controlsSlice';

export default function SongItem({ song, rank, withContentAlbum }) {
    const dispatch = useDispatch();
    const convertSecondsToMinutes = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };

    const loadSongControls = () => {
        dispatch(controlsSlice.actions.getSong(song));
        dispatch(playSong(song.encodeId));
    };

    return (
        <div className="chart-song-item" onClick={loadSongControls}>
            <div className="item-media">
                <div className="media-left">
                    <div className="song-prefix">
                        <span className="prefix-number">{rank}</span>
                        <div className="prefix-sort">
                            <ion-icon name="remove-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="song-thumb">
                        <div className="thumb-img">
                            <img src={song.thumbnailM} alt={song.alias} />
                        </div>
                        <div className="thumb-overley">
                            <ion-icon name="play"></ion-icon>
                        </div>
                    </div>
                    <div className="song-info">
                        <p className="song-title">{song.title}</p>
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
