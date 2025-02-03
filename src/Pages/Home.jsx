import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg5 from "../assets/bg5.png";
import bg6 from "../assets/bg6.png";
import bg7 from "../assets/bg7.png";

const Home = () => {
    const location = useLocation();
    const { selectedCard, selectedCardImage, bigCardImage } = location.state || {};

    const [bigImage, setBigImage] = useState(bigCardImage || 'https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg');
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (bigCardImage) {
            setBigImage(bigCardImage);
        }
    }, [bigCardImage]);

    const bigCardSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const educationCardSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 5,
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

    const smallCardSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
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

    const techStackItems = [
        { id: 1, title: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
        { id: 2, title: 'C#', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg', description: 'C# is a modern, object-oriented programming language developed by Microsoft.' },
        { id: 3, title: '.NET', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg', description: '.NET is a free, cross-platform, open-source developer platform for building many different types of applications.' },
        { id: 4, title: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', description: 'React is a JavaScript library for building user interfaces.' },
        { id: 5, title: 'Express', image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', description: 'Express is a minimal and flexible Node.js web application framework.' },
        { id: 6, title: 'C++', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', description: 'C++ is a general-purpose programming language created as an extension of the C programming language.' },
        { id: 7, title: 'SQL', image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', description: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.' },
        { id: 8, title: 'MongoDB', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', description: 'MongoDB is a source-available cross-platform document-oriented database program.' },
        { id: 9, title: 'Docker', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg', description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.' },
    ];

    const educationList = [
        { id: 1, title: "MCA", description: "Masters of Computer Applications from Vivekananda Institute of Professional Studies, Delhi", image: bg5, CGPA: 8.5 },
        { id: 2, title: "BCA", description: "Bachelors of Computer Applications from Jagannath Internation Managment School, Delhi", image: bg6, CGPA: 9.0 },
        { id: 3, title: "Higher secondary education", description: "AGDAVCPS, Delhi", image: bg7, PERCENTAGE: "72.16%" },
        { id: 3, title: "Secondary Education", description: "AGDAVCPS, Delhi", image: bg5, CGPA: 9.0 },
    ]

    const handleCardClick = (image) => {
        setBigImage(image);
    };

    const onMouseEnter = (e) => {
        clearInterval(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setActive(true);
            setRemove(false);
        }, 1000);
    };

    const onMouseLeave = (e) => {
        setActive(false);
    };

    return (
        <div className='relative flex flex-col items-center'>
            <div className='sticky top-0 left-0 w-full z-10'>
                <Header selectedCard={selectedCard} selectedCardImage={selectedCardImage} />
            </div>
            <div className='relative w-full h-[100vh]'>
                <div className='absolute w-[40%] bottom-[40%] p-10 flex flex-col gap-10'>
                    <h1 className='font-bold text-3xl'>Sudhanshu Panthri</h1>
                    <span>
                        I am a dedicated software developer with a strong background in C# and .NET technologies. Currently, I am focused on building robust and scalable applications using these technologies. In addition to my backend expertise, I have experience in frontend development, having worked extensively with the MERN stack during my college years. My diverse skill set allows me to contribute effectively to both frontend and backend development, ensuring seamless integration and high-quality software solutions.
                    </span>
                    <div className='flex gap-4'>
                        <button className='bg-white text-black rounded-md p-2 w-[120px]'>
                            Play
                        </button>
                        <button className='p-2 w-[120px] bg-white bg-opacity-20 border border-white border-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg text-white rounded-md transition duration-300 ease-in-out hover:bg-opacity-30 hover:shadow-xl'>
                            Info
                        </button>
                    </div>
                </div>
                <img src={bigImage} alt="bigCardImage" className='h-full w-full object-cover' />
            </div>
            <div className='w-[100%] absolute bottom-[-5%]'>
                <h2 className='text-3xl font-bold p-2'>Education</h2>
                <Slider {...educationCardSettings}>
                    {educationList.map(item => (
                        <div key={item.id} className="p-2 cursor-pointer">
                            <div
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                className="group h-[25vh] relative rounded-lg backdrop-filter backdrop-blur-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-30 hover:shadow-xl overflow-hidden"
                            >
                                <img src={item.image} alt={item.title} className="w-full h-[100%] rounded-lg object-cover" />
                                {/* <h3 className="text-center text-white mt-2">{item.title}</h3> */}
                                <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg gap-4">
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-md">{item.description}</p>
                                    <p className="text-md">{item.CGPA ? `CGPA: ${item.CGPA}` : `Percentage: ${item.PERCENTAGE}`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='w-[100%] absolute bottom-[-35%]'>
                <h2 className='text-3xl font-bold p-2'>Skills</h2>
                <Slider {...smallCardSettings}>
                    {techStackItems.map(item => (
                        <div key={item.id} className="p-2 cursor-pointer">
                            <div
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                className="group relative p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-30 hover:shadow-xl"
                            >
                                <img src={item.image} alt={item.title} className="w-full h-[15vh] rounded-lg object-contain" />
                                <h3 className="text-center text-white mt-2">{item.title}</h3>
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Home;