import React, { useState } from 'react';

 function General() {
  const Name= JSON.stringify(localStorage.getItem('Current'))
  const user = Name.replace('"','');
  const username = user.replace('"','');
  
  const questions = [
    {
      questionText: 'Which of the following gases make water when combined?',
      answerOptions: [
        { answerText: 'H and He', isCorrect: false },
        { answerText: 'O2 and Co2', isCorrect: false },
        { answerText: 'H and O2', isCorrect: true },
        { answerText: 'Co2 and H', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the narrator in money heist?',
      answerOptions: [
        { answerText: 'Bogota', isCorrect: false },
        { answerText: 'Tokyo', isCorrect: true },
        { answerText: 'Nairobi', isCorrect: false },
        { answerText: 'Lesbon', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the richest person in the world?',
      answerOptions: [
        { answerText: 'Elon Musk', isCorrect: false },
        { answerText: 'Jeff Bezos', isCorrect: true },
        { answerText: 'Bulane Naeo', isCorrect: false },
        { answerText: 'Bill Gates', isCorrect: false },
      ],
    },
    {
      questionText: 'How many children does Chris Jenner have?',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '6', isCorrect: true },
      ],
    },
  ]

  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h2 className='header'>General Knowledge</h2>
      <p>Current Player : {username}</p>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                      {answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default General;