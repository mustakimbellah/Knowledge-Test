import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ quizDa }) => {
    const { id, logo, name, total } = quizDa;
    return (
        <div className='cart-container'>
            <img src={logo} alt="" />
            <div className='cart-div'>
                <p>{name}</p>
                <p>Total Quiz: {total}</p>
            </div>
            <button className='btn-cart'>
                <Link to={`/quizdetails/${id}`}>
                    <p className='btn-text'>Start Quiz</p>
                </Link>

            </button>
        </div >
    );
};

export default Cart;