import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { linkAudioSelector, statusAudioSelector } from 'src/redux/selectors/controlsSelector';
import { controlsSlice, playSong } from './controlsSlice';

export default function Player({ listSongs, currentSongIndex }) {
    const dispatch = useDispatch();
    const linkAudio = useSelector(linkAudioSelector);
    const statusLoading = useSelector(statusAudioSelector);
    const audioRef = useRef(null);
    const progressLine = useRef(null);
    const [isPlaying, setIsPlay] = useState(true);
    const [shuffle, setShuffle] = useState(false);
    const [repeatSong, setRepeatSong] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        // when pause music, but skip song => music is playing
        setIsPlay(true);
    }, [linkAudio]);

    const convertSecondsToMinutes = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };

    // handle when user click button pause or play
    const handlePlayClick = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlay(!isPlaying);
    };

    // range line run
    const onPlaying = () => {
        if (audioRef.current?.duration) {
            progressLine.current.style.width = (audioRef.current?.currentTime * 100) / audioRef.current?.duration + '%';
            setTotalTime(audioRef.current?.duration);
            setCurrentTime(audioRef.current?.currentTime);
        }
    };

    // handle when music ended
    const onEnded = () => {
        if (repeatSong) {
            dispatch(playSong(listSongs[currentSongIndex].encodeId));
            dispatch(controlsSlice.actions.getCurrentSongIndex(currentSongIndex));
        } else {
            skipSong();
        }
    };

    // handle when click line range =>> fast-forward music
    const handleFastForward = (e) => {
        const seekTime = (audioRef.current?.duration / 100) * e.target.value;
        audioRef.current.currentTime = seekTime;
    };

    // handleShuffle
    const handleShuffle = () => {
        setShuffle(!shuffle);
    };

    // handle repeat song
    const handleRepeatSong = () => {
        setRepeatSong(!repeatSong);
    };

    const skipSongForwards = (forwards, numSkip) => {
        if (forwards) {
            if (currentSongIndex + numSkip < listSongs.length) {
                dispatch(playSong(listSongs[currentSongIndex + numSkip].encodeId));
                dispatch(controlsSlice.actions.getCurrentSongIndex(currentSongIndex + numSkip));
            } else {
                dispatch(playSong(listSongs[0].encodeId));
                dispatch(controlsSlice.actions.getCurrentSongIndex(0));
            }
        } else {
            if (currentSongIndex - numSkip >= 0) {
                dispatch(playSong(listSongs[currentSongIndex - numSkip].encodeId));
                dispatch(controlsSlice.actions.getCurrentSongIndex(currentSongIndex - numSkip));
            } else {
                dispatch(playSong(listSongs[listSongs.length - numSkip].encodeId));
                dispatch(controlsSlice.actions.getCurrentSongIndex(listSongs.length - numSkip));
            }
        }
    };

    // skip song
    const skipSong = (forwards = true) => {
        if (shuffle) {
            const randomSong = listSongs[Math.floor(Math.random() * listSongs.length)];
            dispatch(playSong(randomSong.encodeId));
            dispatch(controlsSlice.actions.getCurrentSongIndex(listSongs.indexOf(randomSong)));
        } else if (repeatSong) {
            skipSongForwards(forwards, 1);
        } else {
            skipSongForwards(forwards, 1);
        }
    };

    return (
        <div className="player">
            <div className="controls-main">
                <div className="controls-top-item">
                    <div
                        style={shuffle ? { color: '#3460f5' } : { color: '' }}
                        className="control-btn"
                        onClick={handleShuffle}
                    >
                        <ion-icon name="shuffle-outline"></ion-icon>
                    </div>
                </div>
                <div className="controls-top-item">
                    <div
                        className="control-btn"
                        onClick={() => {
                            skipSong(false);
                        }}
                    >
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
                            <ion-icon name="pause-circle-outline"></ion-icon>
                        ) : (
                            <ion-icon name="play-circle-outline"></ion-icon>
                        )}
                    </div>
                </div>
                <div className="controls-top-item">
                    <div
                        className="control-btn"
                        onClick={() => {
                            skipSong();
                        }}
                    >
                        <ion-icon name="play-skip-forward-outline"></ion-icon>
                    </div>
                </div>
                <div className="controls-top-item">
                    <div
                        className="control-btn"
                        onClick={() => handleRepeatSong()}
                        style={repeatSong ? { color: '#3460f5' } : { color: '' }}
                    >
                        <ion-icon name="repeat-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div className="time-progress">
                <span className="time-block">
                    {convertSecondsToMinutes(Math.floor(Math.floor(currentTime) / 60), '0', 2)}:
                    {convertSecondsToMinutes(
                        Math.floor(currentTime) - Math.floor(Math.floor(currentTime) / 60) * 60,
                        '0',
                        2,
                    )}
                </span>
                <div className="progress-area">
                    <div ref={progressLine} className="progress-bar-line"></div>
                    <input
                        onChange={handleFastForward}
                        id="progress-bar"
                        className="progress-bar"
                        type="range"
                        step="0"
                        min="0"
                        max="100"
                    />
                    <audio
                        onTimeUpdate={onPlaying}
                        onEnded={onEnded}
                        ref={audioRef}
                        id="main-audio"
                        src={linkAudio}
                        type="audio/mpeg"
                        autoPlay={isPlaying}
                    ></audio>
                </div>
                <span className="time-block">
                    {convertSecondsToMinutes(Math.floor(Math.floor(totalTime) / 60), '0', 2)}:
                    {convertSecondsToMinutes(Math.floor(totalTime) - Math.floor(Math.floor(totalTime) / 60) * 60, 0, 2)}
                </span>
            </div>
        </div>
    );
}
