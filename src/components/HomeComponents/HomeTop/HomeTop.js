import React from 'react';
import CardItem from 'src/components/CardItem/CardItem';

export default function HomeTop() {
    return (
        <div className="home-row-item">
            <h4 className="title-list">Top 100</h4>
            <div className="row">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </div>
    );
}
