import React, { useState } from 'react';

 function Sports() {
   
  const Name= JSON.stringify(localStorage.getItem('Current'))
  const user = Name.replace('"','');
  const username = user.replace('"','');

  const questions = [
    {
      questionText: 'Which team does Messi play for now?',
      answerOptions: [
        { answerText: 'Chiefs', isCorrect: false },
        { answerText: 'Sundowns', isCorrect: false },
        { answerText: 'Barcelona', isCorrect: true },
        { answerText: 'Real Madrid', isCorrect: false },
      ],
    },
    {
      questionText: 'Which counry is hosting Olympics 2020?',
      answerOptions: [
        { answerText: 'China', isCorrect: false },
        { answerText: 'Japan', isCorrect: true },
        { answerText: 'Brazil', isCorrect: false },
        { answerText: 'Lesotho', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the name of the national football team in Lesotho?',
      answerOptions: [
        { answerText: 'Bakoena FC', isCorrect: false },
        { answerText: 'Likoena FC', isCorrect: true },
        { answerText: 'Lesotho FC', isCorrect: false },
        { answerText: 'Basotho FC', isCorrect: false },
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
    
      <h2 className='header'>Sports</h2>
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

export default Sports;