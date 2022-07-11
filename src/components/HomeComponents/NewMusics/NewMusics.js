import React from 'react';
import CardItem from 'src/components/CardItem/CardItem';
import { useSelector } from 'react-redux';

export default function NewMusics() {
    return (
        <div className="home-row-item">
            <h4 className="title-list">Nhạc mới mỗi ngày</h4>
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
