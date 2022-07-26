import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'src/components/StyledComponents/Button';
import { newReleaseSelector } from 'src/redux/selectors/homeSelectors';
import NewReleaseAlbum from './NewReleaseAlbum';
import NewReleaseSongs from './NewReleaseSongs';

export default function NewRelease() {
    const newReleaseData = useSelector(newReleaseSelector);
    const [songs, setSongs] = useState([]);
    const [album, setAlbum] = useState([]);

    const [active, setActive] = useState('songs');

    const handleChangeActive = () => {
        active === 'songs' ? setActive('album') : setActive('songs');
    };

    useEffect(() => {
        if (newReleaseData.items) {
            const { album, song } = newReleaseData?.items[0];
            setSongs(song);
            setAlbum(album);
        }
    });

    return (
        <div className="new-release home-row-item">
            <h4 className="title-list">{newReleaseData.title}</h4>
            <div className="new-release-header">
                <div className="new-release-btn-block">
                    <Button
                        className="new-release-btn"
                        onClick={() => {
                            handleChangeActive();
                        }}
                        style={
                            active === 'songs'
                                ? { backgroundColor: '#3460f5', border: '1px solid #3460f5' }
                                : { backgroundColor: '' }
                        }
                    >
                        BÀI HÁT
                    </Button>
                    <Button
                        className="new-release-btn"
                        onClick={() => {
                            handleChangeActive();
                        }}
                        style={
                            active === 'album'
                                ? { backgroundColor: '#3460f5', border: '1px solid #3460f5' }
                                : { backgroundColor: '' }
                        }
                    >
                        ALBUM
                    </Button>
                </div>
                <div>
                    <a className="new-release-link" href="/">
                        TẤT CẢ
                        <span className="new-release-link-icon">
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </span>
                    </a>
                </div>
            </div>
            <div className="new-release-content">
                {active === 'songs' ? <NewReleaseSongs songs={songs} /> : <NewReleaseAlbum album={album} />}
            </div>
        </div>
    );
}
