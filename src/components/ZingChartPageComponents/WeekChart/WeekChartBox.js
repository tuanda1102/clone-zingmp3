import React from 'react';
import { Button, CircleButton } from 'src/components/StyledComponents/Button';
import SongItem from '../SongItem/SongItem';

export default function WeekChartBox({ data }) {
    const RenderListSongs = () => {
        return data.items.slice(0, 5).map((song, index) => {
            return <SongItem key={song.encodeId} song={song} rank={index + 1} />;
        });
    };

    return (
        <div className="col-4">
            <div className="week-box">
                <div className="week-box-header">
                    <div className="week-box-heading">
                        {data.country === 'vn' ? 'Việt Nam' : data.country === 'us' ? 'US-UK' : 'K-Pop'}
                    </div>
                    <CircleButton primary width="29px" height="29px">
                        <ion-icon name="play"></ion-icon>
                    </CircleButton>
                </div>
                <div className="box-list">{<RenderListSongs />}</div>
                <div className="week-box-btn">
                    <Button>Xem Tất Cả</Button>
                </div>
            </div>
        </div>
    );
}
