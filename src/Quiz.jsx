import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Quiz() {

    const navigate = useNavigate();

    const questions = [
        {
            question: 'Are You 65 Years Old or Older?',
            options: ["YES, I'M 65 OR OLDER", "NO, I'M 64 OR YOUNGER"],

        },
        {
            question: 'Are You On Medicare or Medicaid?',
            options: ['YES', 'NO'],

        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    function handleAnswer(option) {

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }

        if (currentQuestion === questions.length - 1) {
            navigate("/resultpage");
        }
    }

    return (
        <div className='Quiz'>
            <p>{questions[currentQuestion].question}</p>
            {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
            ))}
        </div>
    );
}

export default Quiz;
