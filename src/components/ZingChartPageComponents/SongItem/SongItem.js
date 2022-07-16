import React from 'react';

export default function SongItem({ song, rank, withContentAlbum }) {
    const str_pad_left = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };

    return (
        <div className="chart-song-item">
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
                        {str_pad_left(Math.floor(song.duration / 60), '0', 2)}:
                        {str_pad_left(song.duration - Math.floor(song.duration / 60) * 60, 0, 2)}
                    </div>
                </div>
            </div>
        </div>
    );
}
