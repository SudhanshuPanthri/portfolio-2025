import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const location = useLocation();
    const { selectedCard, selectedCardImage, bigCardImage } = location.state || {};

    const bigCardSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const smallCardSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const bigCardItems = [
        { id: 1, title: 'Featured Show 1', image: 'https://image.tmdb.org/t/p/w1280/ggFHVNu6YYI5L9pCfOacjizRGt.jpg' },
        { id: 2, title: 'Featured Show 2', image: 'https://image.tmdb.org/t/p/w1280/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg' },
    ];

    const smallCardItems = [
        { id: 4, title: 'Loki', image: 'https://image.tmdb.org/t/p/original/ykElAtsOBoArgI1A8ATVH0MNve0.jpg' },
        { id: 5, title: 'WandaVision', image: 'https://image.tmdb.org/t/p/original/glKDfE6btIRcVB5zrjspRIs4r52.jpg' },
        { id: 6, title: 'The Falcon and the Winter Soldier', image: 'https://image.tmdb.org/t/p/original/6kbAMLteGO8yyewYau6bJ683sw7.jpg' },
        { id: 7, title: 'The Queen\'s Gambit', image: 'https://image.tmdb.org/t/p/original/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg' },
        { id: 8, title: 'The Boys', image: 'https://image.tmdb.org/t/p/original/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg' },
        { id: 9, title: 'Money Heist', image: 'https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
        { id: 10, title: 'The Handmaid\'s Tale', image: 'https://image.tmdb.org/t/p/original/oIkxqt6ug5zT5ZSUUyc1Iqopf02.jpg' },
    ];

    return (
        <div className='relative flex flex-col items-center'>
            <div className='sticky top-0 left-0 w-full z-10'>
                <Header selectedCard={selectedCard} selectedCardImage={selectedCardImage} />
            </div>
            <div className='parallax w-full h-[100vh]'>
                <img src={bigCardImage} alt="bigCardImage" className='h-full w-full' />
            </div>
            <div className='w-[100%] absolute bottom-[-250px]'>
                <Slider {...smallCardSettings}>
                    {smallCardItems.map(item => (
                        <div key={item.id} className="p-2 cursor-pointer">
                            <img src={item.image} alt={item.title} className="w-full h-[20vh] rounded-lg object-cover" />
                            <h3 className="text-center text-white mt-2">{item.title}</h3>
                        </div>
                    ))}
                </Slider>
                <Slider {...smallCardSettings}>
                    {smallCardItems.map(item => (
                        <div key={item.id} className="p-2 cursor-pointer">
                            <img src={item.image} alt={item.title} className="w-full h-[20vh] rounded-lg object-cover" />
                            <h3 className="text-center text-white mt-2">{item.title}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Home;