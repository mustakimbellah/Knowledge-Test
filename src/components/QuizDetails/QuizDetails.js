import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizInformation from '../QuizInformation/QuizInformation';


const QuizDetails = () => {
    const quiz = useLoaderData();

    const { name } = quiz.data;

    return (
        <div>
            <h3>Quiz of : {name}</h3>
            {
                quiz.data.questions.map(data => <QuizInformation
                    key={data.id}
                    data={data}
                ></QuizInformation>)
            }
        </div>
    );
};

export default QuizDetails;