import React from 'react';
import { useSelector } from 'react-redux';
import { currentSongIndexSelector, getSongSelector } from 'src/redux/selectors/controlsSelector';
import { listSongsSelector } from 'src/redux/selectors/zingChartPageSelector';
import Details from './Details';
import Options from './Options';
import Player from './Player';

export default function Controls({ controlsHide }) {
    const listSongs = useSelector(listSongsSelector);
    const currentSongIndex = useSelector(currentSongIndexSelector);
    const song = useSelector(getSongSelector);
    return (
        <div style={controlsHide ? {} : { display: 'flex' }} className="controls">
            <Details listSongs={listSongs} currentSongIndex={currentSongIndex} song={song} />
            <Player currentSongIndex={currentSongIndex} listSongs={listSongs} song={song} />
            <Options />
        </div>
    );
}
