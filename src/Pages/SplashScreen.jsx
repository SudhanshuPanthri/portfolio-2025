import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg4 from "../assets/bg4.png";

const SplashScreen = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();

    const handleCardClick = (name, url) => {
        setSelectedCard(name);
        console.log(name, url, collection[name]);
        setTimeout(() => {
            navigate(`/home`, { state: { selectedCard: name, selectedCardImage: url, bigCardImage: collection[name] } });
        }, 1000);
    };

    const collection = {
        "About Me": bg1,
        "Education": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/08b4e4122035155.60d1c49fdadb5.gif",
        "Projects": bg4,
        "Hobbies": bg2
    }

    return (
        <div className='animate-fadeIn'>
            <div className='w-full'>
                <img src={logo} alt="logo" height={180} width={180} className='p-6' />
            </div>
            <div className='h-[80vh] w-full text-white flex flex-col items-center'>
                <div className='h-[15%] w-full flex items-center justify-center mt-20'>
                    <h1 className='text-5xl font-normal '>Who's watching?</h1>
                </div>
                <div className='flex gap-10 w-[100%] justify-center items-center h-[40%]'>
                    <Card name="About Me" url="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" onClick={handleCardClick} selectedCard={selectedCard} />
                    <Card name="Education" url="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-2fg93funipvqfs9i.webp" onClick={handleCardClick} selectedCard={selectedCard} />
                    <Card name="Projects" url="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-62wgyitks6f4l79m.webp" onClick={handleCardClick} selectedCard={selectedCard} />
                    <Card name="Hobbies" url="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.webp" onClick={handleCardClick} selectedCard={selectedCard} />
                </div>
            </div>
        </div>
    );
};

const Card = ({ name, url, onClick, selectedCard }) => {
    return (
        <div
            className={`width-[160px] h-[180px] flex flex-col items-center justify-center gap-4 ${selectedCard === name ? 'animate-cardZoom' : ''}`}
            onClick={() => onClick(name, url)}
        >
            <img src={url} alt={name} className='w-[100%] h-[90%] cursor-pointer hover:scale-110 transition duration-300 ease-in-out' />
            <span className='text-white h-[10%] capitalize text-lg'>{name}</span>
        </div>
    );
};

export default SplashScreen;