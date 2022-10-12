import React from 'react';
import './QuizInformation.css';

const QuizInformation = ({ data }) => {
    const { question, correctAnswer, options } = data;


    return (
        <div className='quizIn-container'>
            <h5>Question:  {question}</h5>
            <p>{correctAnswer}</p>
            {
                options.map(data1 => <li>{data1}</li>)
            }
        </div>
    );
};

export default QuizInformation;