import React from 'react';
import CardItem from 'src/components/CardItem/CardItem';
import { useSelector } from 'react-redux';
import { playlistTodaySelector } from 'src/redux/selectors/homeSelectors';

export default function TodayChoice() {
    const playlistToday = useSelector(playlistTodaySelector);

    return (
        <div className="home-row-item">
            <h4 className="title-list">{playlistToday?.title}</h4>
            <div className="row">
                {playlistToday?.items?.map(({ title, link, sortDescription, thumbnailM }, index) => {
                    return (
                        <CardItem
                            key={index}
                            title={title}
                            link={link}
                            sortDescription={sortDescription}
                            thumbnailM={thumbnailM}
                        />
                    );
                })}
            </div>
        </div>
    );
}
