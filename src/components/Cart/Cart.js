import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ quizDa }) => {
    const { logo, name, total } = quizDa;
    return (
        <div className='cart-container'>
            <img src={logo} alt="" />
            <div className='cart-div'>
                <p>{name}</p>
                <p>Total Quiz: {total}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'> <Link to='/quizdetails'>Home</Link> Start Quiz</p>
            </button>
        </div >
    );
};

export default Cart;