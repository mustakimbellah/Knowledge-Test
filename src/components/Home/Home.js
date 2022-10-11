import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import HomeHeader from '../HomeHeader/HomeHeader';
import './Home.css';

const Home = () => {
    const quizData = useLoaderData();
    console.log(quizData);
    return (
        <div className='home'>
            <HomeHeader></HomeHeader>

            <div className='home-container'>
                {
                    quizData.data.map(quizDa => <Cart
                        key={quizDa.id}
                        quizDa={quizDa}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;