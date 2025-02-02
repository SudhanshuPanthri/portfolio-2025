import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
    const location = useLocation();
    const { selectedCard, selectedCardImage } = location.state || {};

    return (
        <div>
            <Header selectedCard={selectedCard} selectedCardImage={selectedCardImage} />
            <h1>Welcome to the Home Page</h1>
            {selectedCard && <p>You selected: {selectedCard}</p>}

        </div>
    );
};

export default Home;