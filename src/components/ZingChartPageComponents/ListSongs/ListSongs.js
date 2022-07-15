import React from 'react';
import { useSelector } from 'react-redux';
import { listSongsSelector } from 'src/redux/selectors/zingChartPageSelector';
import SongItem from './SongItem';

export default function ListSongs() {
    const listSongs = useSelector(listSongsSelector);

    const renderListSongs = listSongs?.map((song, index) => {
        return <SongItem key={index} song={song} rank={index + 1} />;
    });

    return <div className="list">{renderListSongs}</div>;
}
