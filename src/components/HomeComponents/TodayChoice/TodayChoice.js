import React, { useState } from 'react';
import CardItem from 'src/components/CardItem/CardItem';
import { useSelector } from 'react-redux';
import { playlistTodaySelector } from 'src/redux/selectors/homeSelectors';

export default function TodayChoice() {
    // const [playlist, setPlaylist] = useState([]);

    const playlistToday = useSelector(playlistTodaySelector);

    console.log(playlistToday);

    return (
        <div className="home-row-item">
            <h4 className="title-list">{playlistToday?.title}</h4>
            <div className="row">
                {playlistToday?.items?.map(({ title, link, sortDescription, thumbnail }, index) => {
                    return (
                        <CardItem
                            key={index}
                            title={title}
                            link={link}
                            sortDescription={sortDescription}
                            thumbnail={thumbnail}
                        />
                    );
                })}
            </div>
        </div>
    );
}
