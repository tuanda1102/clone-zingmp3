import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentSongIndexSelector, songSelector } from 'src/redux/selectors/controlsSelector';
import { listSongsSelector } from 'src/redux/selectors/zingChartPageSelector';
import Details from './Details';
import Options from './Options';
import Player from './Player';

export default function Controls() {
    const song = useSelector(songSelector);
    const listSongs = useSelector(listSongsSelector);
    const currentSongIndex = useSelector(currentSongIndexSelector);
    return (
        <div className="controls">
            <Details listSongs={listSongs} currentSongIndex={currentSongIndex} song={song} />
            <Player currentSongIndex={currentSongIndex} listSongs={listSongs} song={song} />
            <Options />
        </div>
    );
}
