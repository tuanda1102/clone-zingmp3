import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { linkAudioSelector, statusAudioSelector } from 'src/redux/selectors/controlsSelector';

export default function Player({ song }) {
    const linkAudio = useSelector(linkAudioSelector);
    const statusLoading = useSelector(statusAudioSelector);
    const audioEl = useRef(null);
    const [isPlaying, setIsPlay] = useState(false);
    const [durationLine, setDurationLine] = useState(0);

    const convertSecondsToMinutes = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };

    const handlePlayClick = () => {
        isPlaying ? audioEl.current.play() : audioEl.current.pause();
        setIsPlay(!isPlaying);
    };

    const onPlaying = () => {
        if (audioEl.current?.duration) {
            setDurationLine((audioEl.current?.currentTime * 100) / audioEl.current?.duration);
        }
    };

    return (
        <div className="player">
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
                    {statusLoading === 'pending' ? (
                        <div className="loading-audio">
                            <div className="loader loader--style1" title="0">
                                <svg
                                    version="1.1"
                                    id="loader-1"
                                    x="0px"
                                    y="0px"
                                    width="40px"
                                    height="40px"
                                    viewBox="0 0 40 40"
                                    enableBackground="new 0 0 40 40"
                                >
                                    <path
                                        opacity="0.2"
                                        fill="#000"
                                        d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                                    />
                                    <path
                                        fill="#000"
                                        d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
                                    >
                                        <animateTransform
                                            attributeType="xml"
                                            attributeName="transform"
                                            type="rotate"
                                            from="0 20 20"
                                            to="360 20 20"
                                            dur="0.5s"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                </svg>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                    <div
                        className="control-btn btn-play"
                        onClick={() => {
                            handlePlayClick();
                        }}
                    >
                        {isPlaying ? (
                            <ion-icon name="play-circle-outline"></ion-icon>
                        ) : (
                            <ion-icon name="pause-circle-outline"></ion-icon>
                        )}
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
                {convertSecondsToMinutes(Math.floor(audioEl.current.currentTime / 60), '0', 2)}:
                {convertSecondsToMinutes(
                    audioEl.current.currentTime - Math.floor(audioEl.current.currentTime / 60) * 60,
                    '0',
                    2,
                )}
                <div className="progress-area">
                    <div className="progress-bar" style={{ width: durationLine + '%' }}>
                        <audio
                            onTimeUpdate={onPlaying}
                            ref={audioEl}
                            autoPlay
                            id="main-audio"
                            src={linkAudio}
                            type="audio/mpeg"
                        ></audio>
                    </div>
                </div>
                <span>
                    {convertSecondsToMinutes(Math.floor(song.duration / 60), '0', 2)}:
                    {convertSecondsToMinutes(song.duration - Math.floor(song.duration / 60) * 60, 0, 2)}
                </span>
            </div>
        </div>
    );
}
