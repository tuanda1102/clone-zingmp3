import React from 'react';
import SongItem from 'src/components/SongItem/SongItem';

export default function NewReleaseSongs({ songs }) {
    const renderListSongs = songs?.slice(0, 9).map((song, index) => {
        return (
            <div className="col-4" key={song.encodeId}>
                <SongItem index={index} song={song} />
            </div>
        );
    });

    return <div className="row">{renderListSongs}</div>;
}
