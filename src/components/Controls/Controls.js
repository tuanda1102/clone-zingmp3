import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { linkAudioSelector, songSelector } from 'src/redux/selectors/controlsSelector';
import Details from './Details';
import Options from './Options';
import Player from './Player';

export default function Controls() {
    const song = useSelector(songSelector);
    const linkAudio = useSelector(linkAudioSelector);

    useEffect(() => {
        console.log('useEffect Controls');
        // isPlaying ? audioEl.current.play() : audioEl.current.pause();
    }, []);

    return (
        <div className="controls">
            <Details song={song} />
            <Player song={song} />
            <Options song={song} />
        </div>
    );
}
