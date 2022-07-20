import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'src/components/StyledComponents/Button';
import { listSongsSelector } from 'src/redux/selectors/zingChartPageSelector';
import SongItem from '../SongItem/SongItem';

export default function ListSongs() {
    const [visible, setVisible] = useState(10);
    const listSongs = useSelector(listSongsSelector);

    const handleLoadMore = () => {
        setVisible(listSongs.length);
    };

    const renderListSongs = listSongs?.slice(0, visible).map((song, index) => {
        return <SongItem withContentAlbum index={index} key={song.encodeId} song={song} rank={index + 1} />;
    });

    return (
        <div className="list">
            {renderListSongs}
            <div className="loadmore-btn">
                <Button onClick={handleLoadMore}>Xem Top 100</Button>
            </div>
        </div>
    );
}
