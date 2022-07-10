import React from 'react';
import { Link } from 'react-router-dom';

export default function CardItem({ title, link, sortDescription, thumbnail }) {
    return (
        <div className="card-item col">
            <div className="card-item-top">
                <a href="/">
                    <div className="card-img">
                        <img src={thumbnail} alt={title} />
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
                    <a href="/" className="card-title">
                        {title}
                    </a>
                </div>
                <p className="card-desc">{sortDescription}</p>
            </div>
        </div>
    );
}
