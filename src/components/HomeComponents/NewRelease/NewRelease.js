import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import CardItem from 'src/components/CardItem/CardItem';
import { newReleaseSelector } from 'src/redux/selectors/homeSelectors';

export default function NewRelease() {
    const [songs, setSongs] = useState([]);
    // const [albums, setAlbums] = useState([]);
    const newRelease = useSelector(newReleaseSelector);
    useEffect(() => {
        newRelease?.items?.forEach((element) => {
            setSongs(element.song);
            // setAlbums(element.album);
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        arrows: false,
    };

    return (
        <div className="home-row-item new-release-container">
            <h4 className="title-list">{newRelease?.title}</h4>
            <div className="new-release-slider">
                <Slider {...settings}>
                    {songs?.map((song, index) => {
                        return (
                            <CardItem
                                key={index}
                                title={song.title}
                                link={song.link}
                                sortDescription={song.artistsNames}
                                thumbnailM={song.thumbnailM}
                            />
                        );
                    })}
                </Slider>
                {/* <Slider {...settings}>
                    {albums?.map((song, index) => {
                        return (
                            <CardItem
                                key={index}
                                title={song.title}
                                link={song.link}
                                sortDescription={song.artistsNames}
                                thumbnailM={song.thumbnailM}
                            />
                        );
                    })}
                </Slider> */}
            </div>
        </div>
    );
}
