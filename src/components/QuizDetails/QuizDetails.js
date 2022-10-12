import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizInformation from '../QuizInformation/QuizInformation';


const QuizDetails = () => {
    const quiz = useLoaderData();
    // const { questions } = quiz;
    console.log(quiz.data.questions);

    return (
        <div>

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