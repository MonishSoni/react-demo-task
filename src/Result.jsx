import React, { useState, useEffect } from 'react';
import Timer from "./Timer";
import Header from "./Header"

const Result = () => {
    const [text, setText] = useState('Reviewing Your Answers...');
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Use setTimeout to delay the display of each text
        setTimeout(() => setText('Matching With Best Options...'), 2000);
        setTimeout(() => setText('Confirming Eligibility...'), 4000);
        setTimeout(() => setText(''), 5000);
        setTimeout(() => setShowContent(true), 5000);
    }, []);


    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="text">{text}</div>
                {showContent && <div className="result">
                    <h2>Congratulations !</h2>
                    <h1>You May Pre-Qualify For <span>The Flex Card!</span> </h1>

                    <a href='tel:858 306-0416'>Call (858) 306-0416</a>

                    <h3>We Have Reserved Your Spot.</h3>

                    <p>Due to high call volume, your official agent is waiting for only <strong>3 minutes</strong> , then your spot will not be reserved.</p>
                    <Timer />
                </div>}
            </div>
        </>





    )
}

export default Result;





