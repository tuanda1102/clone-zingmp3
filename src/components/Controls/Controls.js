import React from 'react';
import { useSelector } from 'react-redux';
import { currentSongIndexSelector } from 'src/redux/selectors/controlsSelector';
import { listSongsSelector } from 'src/redux/selectors/zingChartPageSelector';
import Details from './Details';
import Options from './Options';
import Player from './Player';

export default function Controls() {
    const listSongs = useSelector(listSongsSelector);
    const currentSongIndex = useSelector(currentSongIndexSelector);
    return (
        <div className="controls">
            <Details
                listSongs={listSongs}
                currentSongIndex={currentSongIndex}
                song={listSongs ? listSongs[currentSongIndex] : {}}
            />
            <Player
                currentSongIndex={currentSongIndex}
                listSongs={listSongs}
                song={listSongs ? listSongs[currentSongIndex] : {}}
            />
            <Options />
        </div>
    );
}
