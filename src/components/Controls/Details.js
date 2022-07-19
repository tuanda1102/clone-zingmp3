import React from 'react';

export default function Details({ song }) {
    return (
        <div className="details">
            <div className="media">
                <div className="media-left">
                    <a href="/" className="media-thumb">
                        <img src={song.thumbnailM} alt={song.title} />
                    </a>
                    <div className="media-content">
                        <div className="media-content-title">{song.title}</div>
                        <a href="/" className="media-content-subtitle">
                            {song.artistsNames}
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
    );
}
