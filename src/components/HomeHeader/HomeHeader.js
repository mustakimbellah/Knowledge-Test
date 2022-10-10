import React from 'react';
import Photo from '../../utility/photo.jpg'
import './HomeHeader.css'

const HomeHeader = () => {
    return (
        <div className='homeheader-continer'>
            <img src={Photo} alt="" />
            <div>
                <h2>Welcome to the world’s largest quiz community.Play a quiz.There's a Knowledge Test for everyone </h2>
            </div>
            <img src={Photo} alt="" />
        </div>
    );
};

export default HomeHeader;