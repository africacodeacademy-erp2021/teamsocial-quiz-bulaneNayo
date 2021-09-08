import React, { useState } from 'react';

 function Sports() {
   
  const Name= JSON.stringify(localStorage.getItem('Current'))
  const user = Name.replace('"','');
  const username = user.replace('"','');

  const questions = [
    {
      questionText: 'Steve Kompela is currently coaching Bafana Bafana?',
      answerOptions: [
        { answerText: 'False', isCorrect: true },
        { answerText: 'True', isCorrect: false },
      ],
    },
    {
      questionText: 'Kaizer Chiefs has never won in PSL Leaque',
      answerOptions: [
        { answerText: 'False', isCorrect: true },
        { answerText: 'True', isCorrect: false },
      ],
    },
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
    {
      questionText: 'What does jersy no.4 mean in in football?',
      answerOptions: [
        { answerText: 'Striker', isCorrect: false },
        { answerText: 'central defender', isCorrect: true },
        { answerText: 'Captain', isCorrect: false },
        { answerText: 'Goal keeper', isCorrect: false },
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
    {
      questionText: 'Which team does Itumeleng Khune play for?',
      answerOptions: [
        { answerText: 'Barcelona', isCorrect: false },
        { answerText: 'Kaizer Chiefs', isCorrect: true },
        { answerText: 'Pirates', isCorrect: false },
        { answerText: 'Arsenal', isCorrect: false },
      ],
    },
    
  ]

  const random = Math.floor(Math.random() * questions.length);
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
    <div className="categories-div">
    
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
                  <span className="Question">Question {currentQuestion + 1}</span>
                </div>
                <div className='question-text'>
                  {questions[random].questionText}
                </div>
              </div>

              <div className='answers'>
                {
                  questions[random].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)} className="answers-btn">
                      {answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default Sports;