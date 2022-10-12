import React from 'react';
import './QuizInformation.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const QuizInformation = ({ data }) => {
    const { question, correctAnswer, options } = data;

    const notify = () => toast(`${correctAnswer}`);

    const no = (e) => {

        if (e.target.value === correctAnswer) {
            toast("Correct");
        } else {
            toast("Wrong")
        }
    }

    return (
        <div className='quizIn-container'>
            <div className='icon-container'>
                <h5>Question:  {question}</h5>
                <button onClick={notify}>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </button>
            </div>

            {
                options.map(data1 => <div>
                    <input type="radio" name="name" value={data1} onClick={no}></input><span>{data1}</span>
                </div>)
            }
            <ToastContainer position="top-center" />
        </div>
    );
};

export default QuizInformation;
