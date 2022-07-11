import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import { bannerHomeSelector } from 'src/redux/selectors/homeSelectors';

export default function Banner() {
    const banner = useSelector(bannerHomeSelector);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        arrows: true,
    };

    return (
        <div className="home-slider">
            <Slider {...settings}>
                {banner?.items?.map((item, index) => {
                    return (
                        <div key={index} className="home-slider-item">
                            <a href="/">
                                <img src={item.banner} alt={item.banner} />
                            </a>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
