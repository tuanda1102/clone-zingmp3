import React from 'react';
import { useSelector } from 'react-redux';
import { linkAudioSelector, songSelector } from 'src/redux/selectors/controlsSelector';

export default function Controls() {
    // const dispatch = useDispatch();
    const song = useSelector(songSelector);
    const linkAudio = useSelector(linkAudioSelector);

    const RenderAudio = () => {
        return (
            <audio controls autoPlay>
                <source src={linkAudio} type="audio/mpeg"></source>
            </audio>
        );
    };

    const convertSecondsToMinutes = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };

    return (
        <div className="controls">
            <div className="controls-left">
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
            <div className="controls-center">
                <div className="controls-main">
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
                {<RenderAudio />}
                <div className="time-progress">
                    <span>00:02</span>
                    {/* <div className="progress-area">
                        <div className="progress-bar">
                            <audio id="main-audio" src={audio}></audio>
                        </div>
                    </div> */}
                    <span>
                        {convertSecondsToMinutes(Math.floor(song.duration / 60), '0', 2)}:
                        {convertSecondsToMinutes(song.duration - Math.floor(song.duration / 60) * 60, 0, 2)}
                    </span>
                </div>
            </div>
            <div className="controls-right">
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
